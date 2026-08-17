import Section from "./Section";
import Reveal from "./Reveal";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <Section
      id="skills"
      label="Toolkit"
      title="What I work with"
      description="Grouped by what it's for, not by how long the list looks."
    >
      <dl className="divide-y divide-line">
        {skillGroups.map((group) => (
          <Reveal key={group.label}>
            <div className="grid gap-2 py-5 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6">
              <dt className="text-sm text-ink">{group.label}</dt>
              <dd className="font-mono text-xs leading-relaxed text-muted">
                {group.skills.join("  ·  ")}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
