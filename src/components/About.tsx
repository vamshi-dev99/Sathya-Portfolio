import { motion } from "framer-motion";
import { GraduationCap, Languages } from "lucide-react";
import { Section } from "@/components/Section";
import { profile, highlights, education, languages } from "@/data/portfolio";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Data you can trust, pipelines that run themselves">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-4 text-base leading-relaxed text-slate-300">
          {profile.summary.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <div className="flex flex-wrap gap-6 pt-4 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-accent-400" />
              {education.degree}, {education.school}
            </span>
            <span className="inline-flex items-center gap-2">
              <Languages className="h-4 w-4 text-accent-400" />
              {languages.join(" · ")}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass p-5"
            >
              <p className="font-display text-2xl font-semibold text-white">{h.value}</p>
              <p className="mt-1 text-sm leading-snug text-slate-400">{h.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
