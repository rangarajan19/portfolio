import { useEffect, useState } from "react";
import { trace } from "../data";
import { prefersReducedMotion } from "../useInView";

const toneColor = {
  cmd: "text-[var(--console-text)]",
  info: "text-[#8fa6b3]",
  ok: "text-[#8fa6b3]",
  done: "text-[var(--amber)]",
};

export default function TraceConsole() {
  const [visibleCount, setVisibleCount] = useState(prefersReducedMotion() ? trace.length : 0);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const timers = trace.map((_, i) =>
      setTimeout(() => setVisibleCount((c) => Math.max(c, i + 1)), 400 + i * 260)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full border border-[var(--console-line)] bg-[var(--console)] p-5 font-mono text-[0.82rem] leading-relaxed text-[var(--console-text)] sm:p-6">
      <div className="mb-4 flex items-center gap-1.5 opacity-90">
        <span className="pulse-dot h-2.5 w-2.5 rounded-full" style={{ "--i": 0, "--dot-color": "var(--dot-amber)" }} />
        <span className="pulse-dot h-2.5 w-2.5 rounded-full" style={{ "--i": 1, "--dot-color": "var(--dot-blue)" }} />
        <span className="pulse-dot h-2.5 w-2.5 rounded-full" style={{ "--i": 2, "--dot-color": "var(--dot-green)" }} />
        <span className="pulse-dot h-2.5 w-2.5 rounded-full" style={{ "--i": 3, "--dot-color": "var(--dot-rose)" }} />
        <span className="ml-2 text-[0.72rem] uppercase tracking-wide">trace</span>
      </div>
      <div className="space-y-1.5">
        {trace.slice(0, visibleCount).map((line, i) => (
          <div key={i} className="trace-line flex gap-3">
            <span className="shrink-0 text-[#5a6b78] select-none">[{line.tag}]</span>
            <span className={toneColor[line.tone]}>{line.text}</span>
          </div>
        ))}
        {visibleCount < trace.length && visibleCount > 0 && (
          <span className="blink-caret" aria-hidden="true" />
        )}
      </div>
    </div>
  );
}
