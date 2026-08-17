# Writing

Posts live in `content/posts/*.md`. The filename is the URL slug, so
`service-bus-dead-letter-queues.md` publishes to `/blog/service-bus-dead-letter-queues/`.

## Adding a post

Create a `.md` file with this frontmatter:

```markdown
---
title: "How I found the 55%: reading an Azure SQL execution plan"
description: "One sentence that makes someone want to read it. Used for search results and link previews."
date: 2026-09-01
tags: [Azure SQL, Performance, Indexing]
draft: true
---

Body starts here.
```

| Field | Notes |
| --- | --- |
| `title` | Required. |
| `date` | Required, `YYYY-MM-DD`. Sorts newest first. |
| `description` | Used in the index, `<meta description>`, OG tags and RSS. Write it properly. |
| `tags` | Flat list. |
| `draft` | `true` keeps it out of the index, RSS and sitemap, and marks the page `noindex`. It still builds, so you can preview it at its URL. |

Then `npm run build`. Nothing else to wire up.

## The reveal rule

The Writing section and its nav link stay hidden until **3 posts** are
published. A blog with one post from eight months ago reads as an abandoned
project — worse than having no blog at all.

To change the threshold, edit `REVEAL_THRESHOLD` in `scripts/lib/posts.mjs`.

## What to write

The angle that works: **simple explanations of hard things you have actually
done.** Not "What is a message queue" — that market is saturated and it signals
junior. Your material is the stuff almost nobody writing tutorials has lived
through.

Queued up:

1. **`service-bus-dead-letter-queues.md`** — drafted, needs your edit (see below).
2. **How I found the 55%: reading an Azure SQL execution plan.** Take one real
   query. Show the plan before, name what was wrong (scan vs seek, a bad
   estimate, a missing covering index), show the plan after. This is your
   strongest resume bullet turned into evidence.
3. **Partitioning an IoT Event Hub when you're ingesting millions of events a
   day.** Partition-key choice, consumer groups, what happens when one partition
   goes hot. Very few people have done this at your scale.

Later: *Why my agents needed MCP* — the tool-interface problem in plain
language, from the orchestration platform.

## About the drafted post

I wrote `service-bus-dead-letter-queues.md` as a **starting draft, not a
finished post**. The Service Bus behaviour in it is accurate, but before you
publish:

- Read it end to end and make the voice yours. It should sound like you.
- Add your own war story. The post is currently general; the thing that makes it
  unbeatable is the paragraph only you can write — what actually happened on the
  telemetry pipeline, what the dead-letter queue looked like, what you changed.
- Check the code against the `@azure/service-bus` version you actually use.
- Set `draft: false` when you're happy with it.
