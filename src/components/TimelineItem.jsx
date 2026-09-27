export default function TimelineItem({ job }) {
  return (
    <li className="relative pb-12 last:pb-0">
      <span className="timeline-dot absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[var(--paper)]" />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-display text-lg font-bold">{job.role}</h3>
        <span className="font-mono text-sm text-[var(--ink-faint)]">
          {job.start} – {job.end}
        </span>
      </div>
      <p className="mt-0.5 text-[var(--ink-soft)]">
        {job.company} · {job.location}
      </p>
      <ul className="measure mt-4 space-y-2.5 text-[0.97rem] leading-relaxed text-[var(--ink)]">
        {job.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[var(--ink-faint)]" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </li>
  );
}
