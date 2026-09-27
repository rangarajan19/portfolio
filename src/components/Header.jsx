import { useEffect, useState } from "react";
import { profile } from "../data";
import { prefersReducedMotion } from "../useInView";

const links = [
  { href: "#work", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#open-source", label: "Open source" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

// Every section gets watched (including ones with no nav link, like #top
// and #education) so `active` always reflects the true current section
// instead of getting stuck on whatever was last observed.
const allSectionIds = ["#top", "#work", "#projects", "#open-source", "#skills", "#education", "#contact"];

export default function Header() {
  const [active, setActive] = useState("");
  const [elevated, setElevated] = useState(false);

  const scrollToHash = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;
    el.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
    history.pushState(null, "", href);
  };

  useEffect(() => {
    const sections = allSectionIds
      .map((href) => document.querySelector(href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));

    const onScroll = () => setElevated(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      style={{ height: "var(--header-h)" }}
      className={`sticky top-0 z-30 flex items-center border-b bg-[var(--paper)]/90 backdrop-blur transition-shadow ${
        elevated ? "border-[var(--mist)] shadow-[0_1px_0_var(--mist)]" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          onClick={(e) => scrollToHash(e, "#top")}
          className="font-display text-[1.05rem] font-bold tracking-tight"
        >
          {profile.name}
        </a>
        <nav className="hidden gap-6 text-sm text-[var(--ink-soft)] sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToHash(e, link.href)}
              aria-current={active === link.href ? "true" : undefined}
              className={`relative pb-0.5 transition-colors hover:text-[var(--ink)] ${
                active === link.href
                  ? "text-[var(--ink)] after:absolute after:-bottom-[1px] after:left-0 after:h-[2px] after:w-full after:bg-[var(--amber)]"
                  : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="text-sm font-medium border border-[var(--ink)] px-3 py-1.5 hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors"
        >
          Email me
        </a>
      </div>
    </header>
  );
}
