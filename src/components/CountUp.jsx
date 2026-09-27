import { useEffect, useState } from "react";
import { prefersReducedMotion } from "../useInView";

// Parses "70%" -> {number: 70, suffix: "%"}, "~35%" -> {number: 35, prefix: "~", suffix: "%"}
function parseValue(raw) {
  const match = raw.match(/^(~?)(\d+)(.*)$/);
  if (!match) return { prefix: "", number: null, suffix: raw };
  const [, prefix, number, suffix] = match;
  return { prefix, number: Number(number), suffix };
}

export default function CountUp({ value, duration = 900, startDelay = 250 }) {
  const { prefix, number, suffix } = parseValue(value);
  const [display, setDisplay] = useState(number === null || prefersReducedMotion() ? number : 0);

  useEffect(() => {
    if (number === null || prefersReducedMotion()) return;
    let frame;
    const startTimer = setTimeout(() => {
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(eased * number));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, startDelay);
    return () => {
      clearTimeout(startTimer);
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number, duration]);

  return (
    <span>
      {prefix}
      {number === null ? suffix : display}
      {number !== null ? suffix : ""}
    </span>
  );
}
