/** Shared animation class names (defined in globals.css). */
export const motion = {
  fadeInUp: 'lattice-fade-in-up',
  fadeIn: 'lattice-fade-in',
  hoverLift: 'lattice-hover-lift',
  stagger: (index: number) => `lattice-stagger-${Math.min(index + 1, 8)}` as const,
} as const
