import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  label: string;
  title: string;
  description?: string;
  children: ReactNode;
};

/**
 * Every section shares one layout: a small fixed label column on the left,
 * content on the right. The repetition is the design.
 */
export default function Section({
  id,
  label,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section id={id} className="border-t border-line">
      <div className="mx-auto w-full max-w-4xl px-6 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-8 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-10">
          <Reveal>
            <p className="pt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-dim">
              {label}
            </p>
          </Reveal>

          <div className="min-w-0">
            <Reveal>
              <h2 className="text-xl font-medium tracking-tight text-ink">
                {title}
              </h2>
              {description && (
                <p className="mt-3 max-w-xl text-muted">{description}</p>
              )}
            </Reveal>
            <div className="mt-12">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
