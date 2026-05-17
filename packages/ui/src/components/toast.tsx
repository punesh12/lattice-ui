'use client'

/**
 * Sonner-based toast host and re-exports. Client boundary required for Sonner's portal and hooks.
 * Icons use inline token colors so variants stay on-brand without Tailwind scanning packages/ui.
 */
import { AlertCircle, AlertTriangle, CheckCircle2, Info, Loader2 } from 'lucide-react'
import {
  Toaster as Sonner,
  toast,
  type ExternalToast,
  type ToasterProps as SonnerToasterProps,
} from 'sonner'

/** Allowed viewport anchors for {@link Toaster}. */
export const TOAST_POSITIONS = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
] as const

export type ToastPosition = (typeof TOAST_POSITIONS)[number]

const iconStyle = (color: string): React.CSSProperties => ({
  width: 16,
  height: 16,
  minWidth: 16,
  minHeight: 16,
  flexShrink: 0,
  color,
})

export type ToasterProps = SonnerToasterProps

/** Renders the global toast viewport; mount once near the app root. */
const Toaster = ({ position = 'top-right', ...props }: ToasterProps) => (
  <Sonner
    data-slot="toaster"
    data-position={position}
    className="lattice-toaster"
    position={position}
    icons={{
      success: <CheckCircle2 style={iconStyle('var(--success)')} aria-hidden />,
      info: <Info style={iconStyle('var(--info)')} aria-hidden />,
      warning: <AlertTriangle style={iconStyle('var(--warning)')} aria-hidden />,
      error: <AlertCircle style={iconStyle('var(--error)')} aria-hidden />,
      loading: <Loader2 className="lattice-spin" style={iconStyle('var(--primary)')} aria-hidden />,
    }}
    {...props}
  />
)

export { Toaster, toast, type ExternalToast }
export type { ToastT } from 'sonner'
