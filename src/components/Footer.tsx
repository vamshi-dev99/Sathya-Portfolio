import { profile } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container-x flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <p>
          Built with React, Tailwind, and Framer Motion. Deployed on GitHub Pages.
        </p>
      </div>
    </footer>
  );
}
