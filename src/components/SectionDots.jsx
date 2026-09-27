import { useEffect, useState } from "react";

const sections = [
  { href: "#top", label: "Intro" },
  { href: "#work", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#open-source", label: "Open source" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function SectionDots() {
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const targets = sections.map((s) => document.querySelector(s.href)).filter(Boolean);
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex"
    >
      {sections.map((s) => (
        <a
          key={s.href}
          href={s.href}
          aria-current={active === s.href ? "true" : undefined}
          className="group flex items-center gap-2.5"
        >
          <span className="pointer-events-none whitespace-nowrap rounded-none bg-[var(--ink)] px-2 py-1 font-mono text-[0.68rem] text-[var(--paper)] opacity-0 transition-opacity duration-150 group-hover:opacity-100">
            {s.label}
          </span>
          <span
            className={`h-2 w-2 rounded-full border transition-all duration-200 ${
              active === s.href
                ? "border-[var(--amber)] bg-[var(--amber)] scale-125"
                : "border-[var(--ink-faint)] bg-transparent group-hover:border-[var(--ink)]"
            }`}
          />
        </a>
      ))}
    </nav>
  );
}
