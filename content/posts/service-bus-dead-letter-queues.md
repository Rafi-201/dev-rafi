---
title: "What actually happens when a Service Bus message fails"
description: "Retries, delivery counts, and dead-letter queues in Azure Service Bus — and how to tell a message that's having a bad day from one that will never work."
date: 2026-08-13
tags: [Azure, Service Bus, Reliability, Node.js]
draft: true
---

Most people meet the dead-letter queue the same way: something stops working, you go looking, and you find forty thousand messages sitting in a queue you didn't know existed. Nothing is on fire, exactly. But nothing is moving either.

The dead-letter queue isn't complicated. It's just poorly introduced. Here's the whole thing.

## A message isn't sent, it's borrowed

The first thing to unlearn is the idea that your handler "receives" a message and that's that.

In peek-lock mode — the default, and the one you want — receiving a message doesn't remove it from the queue. It puts a **lock** on it. The message is still there; it's just invisible to other receivers for the duration of the lock, 30 seconds by default.

That lock is a deadline. Before it expires, you have to tell Service Bus what happened:

```ts
import { ServiceBusClient } from "@azure/service-bus";

const client = new ServiceBusClient(connectionString);
const receiver = client.createReceiver("telemetry", { receiveMode: "peekLock" });

receiver.subscribe({
  async processMessage(message) {
    await handleTelemetry(message.body);
    await receiver.completeMessage(message); // done — delete it
  },
  async processError(args) {
    console.error("receiver error", args.error);
  },
});
```

You have three ways to answer:

- **Complete** — I handled it. Delete it.
- **Abandon** — I couldn't handle it. Release the lock so someone can try again.
- **Dead-letter** — I handled it as far as I'm willing to. Move it aside.

And one way to not answer: let the lock expire. Your process crashes, the network drops, your handler hangs on a slow HTTP call. Service Bus waits out the clock and releases the message itself.

Here's the part that matters: **letting the lock expire and calling abandon do the same thing.** The message goes back on the queue and gets delivered again. Which brings us to the counter.

## The delivery count is the whole story

Every message carries a `deliveryCount`. It starts at 1 and goes up by one every single time the message is delivered to a receiver — whether you abandoned it, or crashed, or the lock quietly timed out.

When that count passes the queue's **MaxDeliveryCount** — 10 by default — Service Bus stops trying. It moves the message to the dead-letter queue and moves on.

That's it. That's the mechanism. A retry is just redelivery, and the dead-letter queue is where redelivery gives up.

The default of 10 is worth thinking about rather than accepting. Ten attempts against a database that's down for two minutes is a reasonable thing to do. Ten attempts against a message with a malformed timestamp is ten identical failures, ten log entries, and ten trips through your handler, all guaranteed to fail. Same setting, wildly different value.

## Four ways into the dead-letter queue

Exceeding the delivery count is the famous one, but it isn't the only one:

1. **`MaxDeliveryCountExceeded`** — the retries ran out, as above.
2. **`TTLExpiredException`** — the message sat unprocessed past its time-to-live. Only applies if the queue has dead-lettering on expiration turned on; otherwise expired messages are simply deleted.
3. **Filter evaluation failures** — on a topic subscription, if a SQL filter throws while evaluating a message, that message can be dead-lettered rather than silently dropped.
4. **You did it on purpose** — your code called `deadLetterMessage` directly.

That fourth one is the one most teams never use, and it's the most useful of the lot.

## Transient versus poison

Here is the distinction that separates a queue that heals itself from one that just accumulates:

**A transient failure is a failure of the world.** The database was failing over. A downstream API returned 503. A network blip. The message is fine. Retrying is exactly right, because in thirty seconds the world will probably be different.

**A poison message is a failure of the message.** A required field is missing. The device ID doesn't exist. The payload is a version your consumer was never taught to read. Retrying is pointless. The world isn't the problem, and it will not be different in thirty seconds.

Retry logic can't tell these apart on its own. You can:

```ts
receiver.subscribe({
  async processMessage(message) {
    const reading = message.body;

    // Poison: this will never succeed, no matter how many times we try.
    if (!reading?.deviceId || !reading?.recordedAt) {
      await receiver.deadLetterMessage(message, {
        deadLetterReason: "InvalidPayload",
        deadLetterErrorDescription: "Missing deviceId or recordedAt",
      });
      return;
    }

    try {
      await persist(reading);
      await receiver.completeMessage(message);
    } catch (error) {
      // Transient: let it retry. Delivery count handles the giving-up.
      await receiver.abandonMessage(message);
    }
  },
  async processError(args) {
    console.error("receiver error", args.error);
  },
});
```

Two things fall out of this, and both are worth more than they look.

Your **dead-letter queue becomes readable**. Instead of ten thousand messages all stamped `MaxDeliveryCountExceeded`, you get reasons: `InvalidPayload`, `UnknownDevice`, `SchemaTooNew`. You can group by reason. You can count them. You can tell at a glance whether one device is misbehaving or one deploy broke everything.

Your **retry budget stops being wasted**. Poison messages exit on attempt one instead of attempt ten. On a queue doing serious volume, that's the difference between a backlog that drains and one that doesn't.

## Reading what's in there

The dead-letter queue is a sub-queue of the entity it belongs to — `telemetry/$deadletterqueue`. You don't create it and you can't delete it. In the SDK you just ask for it:

```ts
const dlq = client.createReceiver("telemetry", { subQueueType: "deadLetter" });

const messages = await dlq.receiveMessages(20, { maxWaitTimeInMs: 5000 });

for (const message of messages) {
  console.log({
    reason: message.deadLetterReason,
    detail: message.deadLetterErrorDescription,
    attempts: message.deliveryCount,
    enqueued: message.enqueuedTimeUtc,
  });
}
```

For a topic subscription it's the same idea, one argument along:

```ts
const dlq = client.createReceiver("telemetry", "processor", {
  subQueueType: "deadLetter",
});
```

Two operational facts that catch people out:

**Dead-lettered messages don't expire.** Time-to-live doesn't apply down there. Whatever lands stays until something takes it out.

**They still count against your quota.** The dead-letter queue shares the entity's storage limit. A queue quietly filling with dead letters will eventually stop accepting live messages — and that failure shows up as senders erroring, which sends you looking in entirely the wrong place.

So the dead-letter queue is not an archive. Something has to consume it.

## What to do with what you find

Three outcomes, and you decide which by reading the reason:

**Fix and replay.** The bug was yours — a schema change, a bad deploy. Ship the fix, then read from the dead-letter queue and send the messages back to the main queue. Note that you're *sending a new message*, not un-dead-lettering; there's no way back through the same door.

**Discard deliberately.** Some messages are genuinely worthless — a malformed payload from a device that's since been reflashed. Completing them from the dead-letter queue is fine. Do it knowingly, and log what you dropped.

**Alert.** The most valuable thing the dead-letter queue produces isn't the messages. It's the *rate*. A queue that gains three dead letters a day and one that gains three thousand in an hour are different emergencies, and only one of them is worth waking up for. Put a metric on dead-letter depth and alert on the change, not the total.

## Sensible defaults

If you're setting up a queue tomorrow:

- **MaxDeliveryCount of 5**, not 10, unless you have a reason. Transient failures resolve in the first few attempts or they aren't transient.
- **Dead-letter poison messages explicitly**, on the first attempt, with a reason string you'd be happy to read at 3am.
- **Turn on dead-lettering for expired messages.** A message silently deleted is a message you'll never know you lost.
- **Have something that reads the dead-letter queue.** Even a weekly script beats discovering it during an incident.
- **Alert on dead-letter depth changing**, not on it being non-zero.

None of this is difficult. It's just a set of behaviours nobody writes down, so most people learn them the expensive way — at 40,000 messages, wondering why the queue stopped moving.
