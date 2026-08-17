import { useState, type FormEvent } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import { profile } from "../data/profile";

/**
 * Web3Forms access key. Get a free one at https://web3forms.com — it emails
 * submissions straight to you with no backend, which suits a static host.
 * Until it's set, the form composes a pre-filled email instead of silently
 * dropping the message.
 */
const WEB3FORMS_ACCESS_KEY: string = "";

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full border-0 border-b border-line bg-transparent px-0 py-2.5 text-sm text-ink placeholder:text-dim transition-colors focus:border-accent focus:outline-none";

const labelClass = "block font-mono text-[11px] uppercase tracking-[0.15em] text-dim";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const configured = WEB3FORMS_ACCESS_KEY.length > 0;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // No backend key yet — hand off to the user's mail client rather than
    // pretending the message was sent.
    if (!configured) {
      const subject = encodeURIComponent(
        `Portfolio enquiry from ${data.get("name") || "your site"}`
      );
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany: ${
          data.get("company") || "—"
        }\n\n${data.get("message")}`
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    setError("");
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append("subject", `Portfolio enquiry from ${data.get("name")}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(result.message || "Something went wrong. Please email me directly.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please email me directly.");
    }
  }

  return (
    <Section
      id="contact"
      label="Contact"
      title="Let's talk"
      description="Open to backend and platform engineering roles, and to interesting problems in distributed systems or agentic AI. I reply to everything."
    >
      {/* Direct routes first — these always work, no JS required */}
      <Reveal>
        <div className="flex flex-wrap gap-x-8 gap-y-3 border-b border-line pb-10">
          <a
            href={`mailto:${profile.email}`}
            className="text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-accent"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-accent"
          >
            LinkedIn ↗
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-accent"
          >
            GitHub ↗
          </a>
          {profile.calendly && (
            <a
              href={profile.calendly}
              target="_blank"
              rel="noreferrer noopener"
              className="text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-accent"
            >
              Book a call ↗
            </a>
          )}
        </div>
      </Reveal>

      <Reveal>
        <form onSubmit={handleSubmit} className="mt-10 max-w-xl">
          {/* Honeypot — bots fill this, humans never see it */}
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden
          />

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Jane Doe"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jane@company.com"
                className={fieldClass}
              />
            </div>
          </div>

          <div className="mt-8">
            <label htmlFor="company" className={labelClass}>
              Company <span className="normal-case tracking-normal">(optional)</span>
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className={fieldClass}
            />
          </div>

          <div className="mt-8">
            <label htmlFor="message" className={labelClass}>
              What are you building?
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="A sentence or two about the role or the problem is plenty."
              className={`${fieldClass} resize-y`}
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-10 border-b border-accent pb-1 text-sm text-accent transition-opacity hover:opacity-70 disabled:opacity-50"
          >
            {status === "sending"
              ? "Sending…"
              : configured
                ? "Send message →"
                : "Compose email →"}
          </button>

          {status === "success" && (
            <p className="mt-6 text-sm text-ink">
              Thanks — message received. I'll get back to you shortly.
            </p>
          )}
          {status === "error" && <p className="mt-6 text-sm text-accent">{error}</p>}
          {!configured && status === "idle" && (
            <p className="mt-6 text-xs text-dim">
              Opens your mail client with the message pre-filled.
            </p>
          )}
        </form>
      </Reveal>
    </Section>
  );
}
