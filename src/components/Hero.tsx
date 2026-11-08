import { motion } from "framer-motion";
import { Download, Mail, Linkedin, Github, MapPin } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import { profile, metrics } from "@/data/portfolio";

const base = import.meta.env.BASE_URL;

const ghostBtn =
  "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white transition hover:border-accent-400/60 hover:bg-accent-500/10";

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={50}
          className="h-full w-full"
          particleColor="#9bb4ff"
          speed={0.6}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_30%,transparent_0%,rgba(5,6,10,0.7)_70%,#05060a_100%)]" />
      </div>

      <div className="container-x grid grid-cols-1 items-center gap-12 py-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <div className="chip mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {profile.openTo}
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="mt-4 font-display text-xl font-semibold text-slate-100 sm:text-2xl">{profile.title}</p>
          <p className="mt-2 flex flex-wrap gap-x-3 text-sm font-medium uppercase tracking-[0.18em] text-accent-400">
            {profile.specialties.map((s, i) => (
              <span key={s}>
                {i > 0 && <span className="mr-3 text-slate-600">·</span>}
                {s}
              </span>
            ))}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">{profile.tagline}</p>

          <dl className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
            {metrics.map((m) => (
              <div key={m.label} className="glass px-4 py-3">
                <dt className="text-xs text-slate-400">{m.label}</dt>
                <dd className="mt-1 font-display text-lg font-semibold text-white">{m.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`${base}${profile.resume}`}
              download
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-slate-200"
            >
              <Download className="h-4 w-4" /> Download resume
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className={ghostBtn}>
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className={ghostBtn}>
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href={`mailto:${profile.email}`} className={ghostBtn}>
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
          <p className="mt-6 inline-flex items-center gap-2 text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-accent-400" /> {profile.location} · open to relocation and remote
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[conic-gradient(from_120deg_at_50%_50%,rgba(91,124,255,0.35),transparent_30%,rgba(124,156,255,0.25)_60%,transparent_90%)] blur-2xl" />
          <div className="glass overflow-hidden p-2 sm:p-3">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-ink-800">
              <img
                src={`${base}${profile.photo}`}
                alt={`Portrait of ${profile.name}`}
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between rounded-lg border border-white/10 bg-ink-900/75 px-3 py-2 backdrop-blur">
                <div>
                  <p className="text-xs text-slate-400">Currently</p>
                  <p className="text-sm font-medium text-white">
                    {profile.currentRole} · {profile.company}
                  </p>
                </div>
                <span className="chip">{profile.years} yrs</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
