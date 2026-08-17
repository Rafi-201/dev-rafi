import Section from "./Section";
import Reveal from "./Reveal";
import { posts } from "../data/posts";

function formatDate(iso: string) {
  const date = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function Writing() {
  return (
    <Section
      id="writing"
      label="Writing"
      title="Backend, explained plainly"
      description="Notes on the things I've had to get right in production — event-driven systems, message reliability, database performance, and agentic AI."
    >
      <ul className="divide-y divide-line border-t border-line">
        {posts.map((post) => (
          <Reveal key={post.slug}>
            <li>
              <a
                href={`blog/${post.slug}/`}
                className="group block py-6 transition-opacity hover:opacity-80"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-dim">
                  {formatDate(post.date)} · {post.readingTime} min read
                </p>
                <h3 className="mt-2 text-ink transition-colors group-hover:text-accent">
                  {post.title}
                </h3>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">
                  {post.description}
                </p>
              </a>
            </li>
          </Reveal>
        ))}
      </ul>

      <Reveal>
        <a
          href="blog/"
          className="mt-8 inline-block border-b border-accent pb-1 text-sm text-accent transition-opacity hover:opacity-70"
        >
          All posts →
        </a>
      </Reveal>
    </Section>
  );
}
