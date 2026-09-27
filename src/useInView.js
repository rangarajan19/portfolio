// Animations are intentionally always on for this site, regardless of the
// OS-level "reduce motion" preference — the owner wants the designed
// motion to play for every visitor rather than degrade to static.
export function prefersReducedMotion() {
  return false;
}
