import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Six-plus years across four teams">
      <ol className="relative space-y-8 border-l border-white/10 pl-6 sm:pl-8">
        {experience.map((e, i) => (
          <motion.li
            key={e.company + e.period}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.05 }}
            className="relative"
          >
            <span
              className="absolute -left-[31px] top-2 h-3 w-3 rounded-full border-2 border-accent-400 bg-ink-950 sm:-left-[39px]"
              aria-hidden
            />
            <div className="glass p-5 sm:p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-white">
                  {e.role}{" "}
                  <span className="text-slate-400">
                    · {e.company}
                    {e.client && <span className="text-slate-500"> (client: {e.client})</span>}
                  </span>
                </h3>
                <p className="text-sm text-slate-400">
                  {e.period} · {e.location}
                </p>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-300">
                {e.highlights.map((h) => (
                  <li key={h.slice(0, 30)} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent-400" aria-hidden />
                    {h}
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-2">
                {e.stack.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
