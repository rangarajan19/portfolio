import { experience } from "../data";
import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";

export default function Experience() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
      <SectionHeading title="Experience" note="Jul 2024 — Present" />
      <ol className="relative border-l border-[var(--mist)] pl-8">
        {experience.map((job) => (
          <TimelineItem key={job.role + job.company} job={job} />
        ))}
      </ol>
    </section>
  );
}
