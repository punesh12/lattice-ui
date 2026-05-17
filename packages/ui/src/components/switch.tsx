/** Radix Switch with fixed track/thumb dimensions via inline styles. */
import * as React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cn } from '../lib/utils'

/** Props for {@link Switch}. */
export interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {}

const SWITCH_WIDTH = 44
const SWITCH_THUMB_SIZE = 20
const SWITCH_PADDING_START = 2
const SWITCH_PADDING_END = 4
const switchTrackStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  flexShrink: 0,
  width: SWITCH_WIDTH,
  height: 24,
  minWidth: SWITCH_WIDTH,
  minHeight: 24,
  paddingTop: 2,
  paddingBottom: 2,
  paddingLeft: SWITCH_PADDING_START,
  paddingRight: SWITCH_PADDING_END,
  borderRadius: 9999,
  border: '2px solid transparent',
  boxSizing: 'border-box',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
  WebkitAppearance: 'none',
  appearance: 'none',
}

const switchThumbStyle: React.CSSProperties = {
  display: 'block',
  width: SWITCH_THUMB_SIZE,
  height: SWITCH_THUMB_SIZE,
  minWidth: SWITCH_THUMB_SIZE,
  minHeight: SWITCH_THUMB_SIZE,
  borderRadius: '50%',
  backgroundColor: '#ffffff',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.08)',
  pointerEvents: 'none',
  transition: 'transform 0.2s ease',
  willChange: 'transform',
}

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitive.Root>, SwitchProps>(
  ({ className, style, ...props }, ref) => (
    <SwitchPrimitive.Root
      data-slot="switch"
      ref={ref}
      className={cn(className)}
      style={{ ...switchTrackStyle, ...style }}
      {...props}
    >
      <SwitchPrimitive.Thumb data-slot="switch-thumb" style={switchThumbStyle} />
    </SwitchPrimitive.Root>
  ),
)
Switch.displayName = SwitchPrimitive.Root.displayName

export { Switch }
