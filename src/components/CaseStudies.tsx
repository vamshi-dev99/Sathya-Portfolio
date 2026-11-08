import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/Section";
import { caseStudies } from "@/data/portfolio";

export function CaseStudies() {
  return (
    <Section
      id="case-studies"
      eyebrow="Case studies"
      title="Work I led"
      description="Selected projects from my current role, described generically: no employer code, documents or client data, just the problem, what I did and the outcome."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {caseStudies.map((c, i) => (
          <article key={c.title} className={`glass flex flex-col p-6 ${i === 0 ? "lg:col-span-2" : ""}`}>
            <span className="chip w-fit">{c.tag}</span>
            <h3 className="mt-3 text-lg font-semibold text-white">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.context}</p>
            <ul className="mt-4 space-y-2">
              {c.did.map((d) => (
                <li key={d} className="flex gap-2 text-sm leading-relaxed text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {c.results.map((r) => (
                <span key={r} className="rounded-full border border-accent-400/40 bg-accent-400/10 px-3 py-1 text-xs font-medium text-white">
                  {r}
                </span>
              ))}
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {c.stack.map((s) => (
                <li key={s} className="chip">
                  {s}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
