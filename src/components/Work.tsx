import Section from "./Section";
import Reveal from "./Reveal";
import AgentOrchestration from "./diagrams/AgentOrchestration";
import IotPipeline from "./diagrams/IotPipeline";
import { caseStudies, sideProjects } from "../data/projects";

const diagrams = {
  iot: IotPipeline,
  agents: AgentOrchestration,
} as const;

export default function Work() {
  return (
    <Section
      id="work"
      label="Selected work"
      title="Systems I've designed and shipped"
      description="What the constraint was, how the architecture answers it, and what changed as a result."
    >
      <div className="divide-y divide-line">
        {caseStudies.map((study, index) => {
          const Diagram = diagrams[study.diagram];

          return (
            <Reveal key={study.id}>
              <article className={index === 0 ? "pb-16" : "py-16"}>
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-dim">
                  {String(index + 1).padStart(2, "0")} · {study.eyebrow}
                </p>

                <h3 className="mt-4 text-2xl font-medium tracking-tight text-ink">
                  {study.title}
                </h3>
                <p className="mt-2 max-w-xl text-muted">{study.tagline}</p>

                {study.links.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                    {study.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-sm text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-accent"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}

                <Diagram />

                {/* Results */}
                <dl className="mt-12 grid grid-cols-1 gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-3">
                  {study.results.map((result) => (
                    <div key={result.label}>
                      <dt className="font-mono text-lg text-accent">
                        {result.value}
                      </dt>
                      <dd className="mt-1 text-xs text-dim">{result.label}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-12 space-y-10">
                  <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-[0.15em] text-dim">
                      Problem
                    </h4>
                    <p className="mt-3 max-w-xl leading-relaxed text-muted">
                      {study.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-[0.15em] text-dim">
                      Approach
                    </h4>
                    <ol className="mt-3 max-w-xl space-y-4">
                      {study.approach.map((step, i) => (
                        <li key={i} className="flex gap-4 leading-relaxed text-muted">
                          <span className="pt-0.5 font-mono text-xs text-dim">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-[0.15em] text-dim">
                      Stack
                    </h4>
                    <p className="mt-3 max-w-xl font-mono text-xs leading-relaxed text-muted">
                      {study.stack.join("  ·  ")}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}

        {sideProjects.length > 0 && (
          <Reveal>
            <div className="pt-16">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.15em] text-dim">
                Also built
              </h3>
              <ul className="mt-6 space-y-6">
                {sideProjects.map((project) => (
                  <li key={project.title}>
                    <div className="flex items-baseline justify-between gap-4">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-accent"
                      >
                        {project.title} ↗
                      </a>
                      <span className="font-mono text-xs text-dim">
                        {project.year}
                      </span>
                    </div>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <p className="mt-2 font-mono text-xs text-dim">{project.stack}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}
      </div>
    </Section>
  );
}
