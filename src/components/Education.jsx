import { certifications, education, publications } from "../data";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
      <SectionHeading title="Education & certifications" />
      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <h3 className="font-display text-base font-bold">{education.degree}</h3>
          <p className="mt-1 text-[var(--ink-soft)]">{education.school}</p>
          <p className="mt-1 font-mono text-sm text-[var(--ink-faint)]">
            {education.years} · {education.detail}
          </p>

          <h3 className="font-display mt-8 text-base font-bold">Publication</h3>
          {publications.map((pub) => (
            <p key={pub.title} className="mt-1 text-[var(--ink-soft)]">
              {pub.title} — {pub.venue}
            </p>
          ))}
        </div>
        <div>
          <h3 className="font-display text-base font-bold">Certifications</h3>
          <ul className="mt-3 space-y-2.5 text-[0.95rem] text-[var(--ink-soft)]">
            {certifications.map((cert) => (
              <li key={cert} className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--ink-faint)]" />
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
