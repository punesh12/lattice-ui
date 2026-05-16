import type { CSSProperties } from 'react'

/** Shared overlay layout tokens (dialog, modal, sheet, alert-dialog). */
export const OVERLAY_Z_INDEX = 1000
export const CONTENT_Z_INDEX = 1001

export const OVERLAY_BACKDROP_CLASS =
  'fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-200 data-[state=closed]:opacity-0 data-[state=open]:opacity-100'

export const OVERLAY_CLOSE_CLASS =
  'absolute right-4 top-4 rounded-sm text-foreground opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'

export const CENTERED_PANEL_BASE_CLASS =
  'fixed left-1/2 grid w-full max-w-lg -translate-x-1/2 rounded-lg border border-border bg-background p-6 shadow-lg'

export const CENTERED_PANEL_POSITION_CLASS =
  'top-4 max-h-[calc(100vh-2rem)] overflow-y-auto sm:top-[50%] sm:-translate-y-1/2'

export const CENTERED_PANEL_MOTION_CLASS =
  'transition-opacity duration-200 data-[state=closed]:opacity-0 data-[state=open]:opacity-100'

export const centeredPanelClass = (gap: 'gap-4' | 'gap-5' = 'gap-5') =>
  [CENTERED_PANEL_BASE_CLASS, gap, CENTERED_PANEL_POSITION_CLASS, CENTERED_PANEL_MOTION_CLASS].join(
    ' ',
  )

/** Inline backdrop — reliable without Tailwind scan from consuming apps. */
export const overlayBackdropInlineStyle: CSSProperties = {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgb(0 0 0 / 0.5)',
  backdropFilter: 'blur(4px)',
  WebkitBackdropFilter: 'blur(4px)',
  opacity: 1,
}

/** Centered dialog/modal panel — inline positioning and surface styles. */
export const overlayCenteredPanelInlineStyle = (gapPx = 20): CSSProperties => ({
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'min(32rem, calc(100vw - 2rem))',
  boxSizing: 'border-box',
  maxHeight: 'calc(100vh - 2rem)',
  overflowY: 'auto',
  display: 'grid',
  gap: gapPx,
  borderRadius: 'var(--radius)',
  border: '1px solid var(--border)',
  backgroundColor: 'var(--background)',
  padding: 24,
  boxShadow:
    '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1), 0 0 0 1px rgb(0 0 0 / 0.03)',
  opacity: 1,
  pointerEvents: 'auto',
})

export const overlayFooterInlineStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
}

export const overlayCloseInlineStyle: CSSProperties = {
  position: 'absolute',
  right: 16,
  top: 16,
  borderRadius: 4,
  color: 'var(--foreground)',
  opacity: 0.7,
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 4,
  border: 'none',
  background: 'transparent',
}

export type SheetSide = 'left' | 'right' | 'bottom'

export const getSheetContentInlineStyle = (side: SheetSide = 'right'): CSSProperties => {
  const base: CSSProperties = {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    backgroundColor: 'var(--background)',
    padding: 24,
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  }

  switch (side) {
    case 'left':
      return {
        ...base,
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        maxWidth: 384,
        borderRight: '1px solid var(--border)',
      }
    case 'bottom':
      return {
        ...base,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        maxHeight: '85vh',
        overflowY: 'auto',
        borderTopLeftRadius: 'var(--radius)',
        borderTopRightRadius: 'var(--radius)',
        borderTop: '1px solid var(--border)',
      }
    case 'right':
    default:
      return {
        ...base,
        top: 0,
        right: 0,
        height: '100%',
        width: '100%',
        maxWidth: 384,
        borderLeft: '1px solid var(--border)',
      }
  }
}
