/** Screen-reader-only and dialog accessibility helpers shared by overlays. */
import type { CSSProperties } from 'react'

/** Visually hidden but available to screen readers (Radix DialogTitle pattern). */
export const visuallyHiddenStyle: CSSProperties = {
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  borderWidth: 0,
}
