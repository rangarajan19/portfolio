import { useState } from "react";
import { profile } from "../data";

export default function CopyEmail({ className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`relative border border-[var(--ink)] px-4 py-2 text-sm font-medium transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)] ${className}`}
      aria-live="polite"
    >
      {copied ? "Email copied" : "Email me"}
    </button>
  );
}
