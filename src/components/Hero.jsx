import { profile, stats } from "../data";
import TraceConsole from "./TraceConsole";
import CopyEmail from "./CopyEmail";
import CountUp from "./CountUp";

export default function Hero() {
  return (
    <section id="top" className="slide relative mx-auto w-full max-w-5xl px-6 py-14 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <p className="font-mono text-sm text-[var(--steel)]">{profile.location}</p>
          <h1 className="font-display mt-3 text-[2.75rem] font-extrabold leading-[1.05] tracking-tight sm:text-[3.6rem]">
            {profile.name}
          </h1>
          <p className="font-display mt-2 text-xl font-semibold text-[var(--ink-soft)] sm:text-2xl">
            {profile.role} — {profile.tagline}
          </p>
          <p className="measure mt-6 text-[1.05rem] leading-relaxed text-[var(--ink-soft)]">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Rangarajan G - Resume.pdf"
              className="bg-[var(--amber)] px-4 py-2 text-sm font-medium text-[var(--ink)] transition-opacity hover:opacity-90"
            >
              Download resume
            </a>
            <CopyEmail />
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="border border-[var(--mist)] px-4 py-2 text-sm font-medium hover:border-[var(--ink)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="border border-[var(--mist)] px-4 py-2 text-sm font-medium hover:border-[var(--ink)] transition-colors"
            >
              GitHub
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-[var(--mist)] pt-6 sm:max-w-md">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-2xl font-bold text-[var(--ink)] sm:text-3xl">
                  <CountUp value={stat.value} />
                </dt>
                <dd className="mt-1 text-xs text-[var(--ink-soft)] sm:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <TraceConsole />
      </div>

      <a
        href="#work"
        className="scroll-cue absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 font-mono text-[0.68rem] text-[var(--ink-faint)] hover:text-[var(--ink)] lg:flex"
      >
        scroll
        <span className="h-5 w-px bg-current" />
      </a>
    </section>
  );
}
