import { motion, useReducedMotion } from "framer-motion";
import { metrics, profile } from "../data/profile";

export default function Hero() {
  const reduced = useReducedMotion();

  const rise = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  const links = [
    { label: "Email", href: `mailto:${profile.email}` },
    { label: "GitHub", href: profile.github },
    { label: "LinkedIn", href: profile.linkedin },
  ];

  return (
    <section id="top">
      <div className="mx-auto w-full max-w-4xl px-6 pb-24 pt-40 sm:px-8 sm:pb-32 sm:pt-48">
        <div className="grid gap-8 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-10">
          <motion.p
            {...rise(0)}
            className="pt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-dim"
          >
            {profile.location}
          </motion.p>

          <div className="min-w-0">
            <motion.h1
              {...rise(0.04)}
              className="text-3xl font-medium tracking-tight text-ink sm:text-4xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p {...rise(0.08)} className="mt-2 text-lg text-muted">
              {profile.role}
            </motion.p>

            <motion.p
              {...rise(0.14)}
              className="mt-8 max-w-xl text-base leading-relaxed text-muted"
            >
              I build event-driven, cloud-native systems on Azure for US-based
              enterprise clients — ingesting{" "}
              <span className="text-ink">millions of IoT events a day</span> from
              devices across North America, and owning them from technical design
              through production support. I also build multi-agent AI systems with
              orchestration, tool calling, and LLM-based workflows.
            </motion.p>

            <motion.div
              {...rise(0.2)}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2"
            >
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer noopener"
                  className="text-sm text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-accent"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#work"
                className="text-sm text-accent underline decoration-transparent underline-offset-4 transition-colors hover:decoration-accent"
              >
                Selected work ↓
              </a>
            </motion.div>

            {/* Proof, stated plainly */}
            <motion.dl
              {...rise(0.28)}
              className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-line pt-8 sm:grid-cols-4"
            >
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="font-mono text-xl text-ink">{metric.value}</dt>
                  <dd className="mt-1.5 text-xs leading-snug text-dim">
                    {metric.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>
      </div>
    </section>
  );
}
