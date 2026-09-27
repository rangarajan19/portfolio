import { contributions, openSourceProjects, profile } from "../data";
import SectionHeading from "./SectionHeading";

export default function OpenSource() {
  return (
    <section id="open-source" className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
      <SectionHeading title="Open source" note="github.com/rangarajan19" />

      <div className="grid gap-6 sm:grid-cols-2">
        {openSourceProjects.map((project) => (
          <article key={project.name} className="border border-[var(--mist)] p-6">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="font-display text-lg font-bold underline decoration-[var(--mist)] decoration-2 underline-offset-4 hover:decoration-[var(--amber)]"
            >
              {project.name}
            </a>
            <p className="mt-2.5 text-[0.95rem] leading-relaxed text-[var(--ink-soft)]">
              {project.description}
            </p>
            <p className="mt-3 text-sm text-[var(--ink-faint)]">{project.detail}</p>
            <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-[var(--ink-faint)]">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="font-display text-base font-semibold text-[var(--ink)]">
          Contributions to other projects
        </h3>
        <p className="mt-1.5 text-sm text-[var(--ink-soft)]">
          Bug fixes and tooling improvements sent upstream, on repos I don't maintain.
        </p>
        <ul className="mt-5 divide-y divide-[var(--mist)] border-y border-[var(--mist)]">
          {contributions.map((c) => (
            <li key={c.prUrl} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <div>
                <a
                  href={c.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-sm font-medium text-[var(--steel)] hover:text-[var(--ink)]"
                >
                  {c.repo}
                </a>
                <p className="mt-1 text-[0.95rem] text-[var(--ink)]">{c.title}</p>
              </div>
              <a
                href={c.prUrl}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 font-mono text-sm text-[var(--ink-faint)] hover:text-[var(--ink)]"
              >
                {c.pr} · {c.note}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-block text-sm font-medium text-[var(--steel)] underline decoration-[var(--mist)] underline-offset-4 hover:text-[var(--ink)]"
      >
        See everything on GitHub
      </a>
    </section>
  );
}
