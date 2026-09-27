import { profile } from "../data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="slide border-t border-[var(--mist)] bg-[var(--paper-raised)]"
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-[1.9rem]">
          Building an agent that needs to work in production, not just in a demo?
        </h2>
        <p className="measure mt-3 text-[1.02rem] leading-relaxed text-[var(--ink-soft)]">
          I'm open to roles and collaborations in agentic AI, LLM orchestration and RAG systems.
          The fastest way to reach me is email.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-sm">
          <a href={`mailto:${profile.email}`} className="hover:text-[var(--steel)]">
            {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-[var(--steel)]">
            {profile.phone}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--steel)]">
            linkedin.com/in/rangarajan19
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-[var(--steel)]">
            github.com/rangarajan19
          </a>
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download="Rangarajan G - Resume.pdf"
            className="hover:text-[var(--steel)]"
          >
            Download resume
          </a>
        </div>
      </div>
      <div className="mx-auto mt-16 w-full max-w-5xl px-6 text-xs text-[var(--ink-faint)]">
        © {new Date().getFullYear()} {profile.name}. Built with React, Vite and Tailwind.
      </div>
    </section>
  );
}
