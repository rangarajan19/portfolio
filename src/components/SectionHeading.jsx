export default function SectionHeading({ title, note }) {
  return (
    <div className="reveal mb-8 flex items-baseline justify-between gap-4 border-b border-[var(--mist)] pb-3">
      <h2 className="font-display text-2xl font-bold tracking-tight sm:text-[1.65rem]">
        {title}
      </h2>
      {note && <p className="hidden text-sm text-[var(--ink-faint)] sm:block">{note}</p>}
    </div>
  );
}
