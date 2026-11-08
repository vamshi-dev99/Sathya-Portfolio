import { Mail, Linkedin, Github, Download } from "lucide-react";
import { Section } from "@/components/Section";
import { profile } from "@/data/portfolio";

const base = import.meta.env.BASE_URL;

export function Contact() {
  const items = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}`, external: false },
    { icon: Linkedin, label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin, external: true },
    { icon: Github, label: "GitHub", value: profile.githubLabel, href: profile.github, external: true },
    { icon: Download, label: "Resume", value: "Download PDF", href: `${base}${profile.resume}`, external: false },
  ];
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's talk"
      description={`Hiring for Data Engineering, ETL or Analytics Engineering? I usually reply within a day. Based in ${profile.location}; open to relocation and remote roles.`}
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, label, value, href, external }) => (
          <li key={label}>
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="glass glass-hover flex h-full flex-col gap-2 p-5"
            >
              <Icon className="h-5 w-5 text-accent-400" aria-hidden />
              <span className="text-xs uppercase tracking-wider text-slate-400">{label}</span>
              <span className="break-all text-sm font-medium text-white">{value}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
