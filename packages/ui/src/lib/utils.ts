/** Class name helper: clsx for conditional classes, tailwind-merge for conflicting utilities. */
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Merges Tailwind class strings used across all Lattice UI components. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
