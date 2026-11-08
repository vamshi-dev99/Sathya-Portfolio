import { Github, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Section";
import { projects, focusAreas } from "@/data/portfolio";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={projects.length ? "Open-source work" : "What I do day to day"}
      description={projects.length ? "Public projects I built and maintain. The code is on GitHub." : "The core of my data engineering work, across every role."}
    >
      {projects.length > 0 && <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="glass glass-hover group flex flex-col p-6"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 font-mono text-base font-semibold text-white">
                <Github className="h-4 w-4 text-accent-400" />
                {p.title}
              </span>
              <ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:text-white" />
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">{p.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <li key={s} className="chip">
                  {s}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>}
      {projects.length > 0 && <h3 className="mt-14 text-sm font-semibold uppercase tracking-wider text-white">What I do day to day</h3>}
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {focusAreas.map((f) => (
          <div key={f.title} className="glass p-5">
            <p className="font-medium text-white">{f.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
