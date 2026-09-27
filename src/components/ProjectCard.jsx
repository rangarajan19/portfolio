function Flow({ steps }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-[0.78rem]">
      {steps.map((step, i) => (
        <span key={step} className="flex items-center gap-2">
          <span className="step-chip step-chip--play border px-2 py-1" style={{ "--i": i }}>
            {step}
          </span>
          {i < steps.length - 1 && (
            <span aria-hidden="true" className="text-[var(--ink-faint)]">
              →
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

export default function ProjectCard({ project }) {
  return (
    <article className="flex flex-col justify-between border border-[var(--mist)] p-6">
      <div>
        <h3 className="font-display text-lg font-bold">{project.name}</h3>
        <p className="mt-2.5 text-[0.95rem] leading-relaxed text-[var(--ink-soft)]">
          {project.description}
        </p>
      </div>
      <div className="mt-5">
        <Flow steps={project.flow} />
        <p className="mt-4 border-t border-[var(--mist)] pt-3 text-sm font-medium text-[var(--ink)]">
          {project.impact}
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-[var(--ink-faint)]">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
