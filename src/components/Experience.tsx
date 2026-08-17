import Section from "./Section";
import Reveal from "./Reveal";
import { education, experience, leadership } from "../data/experience";

export default function Experience() {
  return (
    <Section
      id="experience"
      label="Experience"
      title="Where I've done the work"
      description="Three years at one company, growing from intern to Software Engineer II on the same US enterprise account."
    >
      <div className="divide-y divide-line">
        {experience.map((job) => (
          <Reveal key={job.company}>
            <div className="pb-14">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-medium text-ink">{job.company}</h3>
                <span className="font-mono text-xs text-dim">{job.period}</span>
              </div>

              <p className="mt-1 text-sm text-dim">{job.location}</p>

              {/* Role progression — the promotion is the signal */}
              <p className="mt-5 text-sm text-muted">
                <span className="text-ink">{job.roles[0].title}</span>
                {job.roles.length > 1 && (
                  <span className="text-dim">
                    {" "}
                    — {job.roles[1].period.toLowerCase()} {job.roles[1].title}
                  </span>
                )}
              </p>

              <p className="mt-5 max-w-xl leading-relaxed text-ink">{job.summary}</p>

              <ul className="mt-5 max-w-xl space-y-3">
                {job.points.map((point, i) => (
                  <li key={i} className="flex gap-4 leading-relaxed text-muted">
                    <span className="mt-[13px] h-px w-3 shrink-0 bg-line-strong" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 max-w-xl font-mono text-xs leading-relaxed text-dim">
                {job.stack.join("  ·  ")}
              </p>
            </div>
          </Reveal>
        ))}

        <Reveal>
          <div className="py-14">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.15em] text-dim">
              Education
            </h3>
            <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="text-ink">{education.degree}</p>
              <span className="font-mono text-xs text-dim">{education.year}</span>
            </div>
            <p className="mt-1 text-sm text-muted">{education.school}</p>
            <p className="text-sm text-dim">{education.location}</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="pt-14">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.15em] text-dim">
              Leadership
            </h3>
            <ul className="mt-5 space-y-5">
              {leadership.map((item) => (
                <li key={item.title}>
                  <p className="text-ink">{item.title}</p>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
