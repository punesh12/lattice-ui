/**
 * Text input and InputGroup affix layout.
 * Inline padding insets prevent typed text from overlapping prefix/suffix icons.
 */
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import {
  controlBorderStyle,
  controlHeights,
  controlInvalidStyle,
  controlPaddingX,
} from '../lib/control-sizes'
import { cn } from '../lib/utils'

const AFFIX_ICON_SIZE = 16
const AFFIX_GAP = 8
const DEFAULT_AFFIX_CONTENT_WIDTH = AFFIX_ICON_SIZE + AFFIX_GAP

const inputSizeStyle = (
  size: keyof typeof controlHeights = 'default',
  affix?: { prefixInset?: number; suffixInset?: number },
): React.CSSProperties => {
  const h = controlHeights[size]
  const pad = controlPaddingX[size]

  return {
    height: h,
    minHeight: h,
    paddingLeft: affix?.prefixInset != null ? pad + affix.prefixInset : pad,
    paddingRight: affix?.suffixInset != null ? pad + affix.suffixInset : pad,
  }
}

const inputVariants = cva(
  'flex w-full rounded-md border border-input bg-background text-foreground shadow-sm transition-colors duration-150 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-error aria-invalid:ring-error/30',
  {
    variants: {
      size: {
        sm: 'h-9 px-3 text-sm min-h-9',
        default: 'h-11 px-3 text-sm min-h-11',
        lg: 'h-12 px-4 text-base min-h-12',
      },
    },
    defaultVariants: { size: 'default' },
  },
)

export type InputAffixProps = React.HTMLAttributes<HTMLSpanElement> & {
  /** Content width reserved inside the input (px), excluding horizontal padding. */
  inset?: number
}

/** Reads `inset` from InputPrefix/InputSuffix children to expand horizontal input padding. */
const getAffixInsets = (children: React.ReactNode) => {
  let prefixInset: number | undefined
  let suffixInset: number | undefined

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement<InputAffixProps>(child)) return
    const inset = child.props.inset ?? DEFAULT_AFFIX_CONTENT_WIDTH

    if (child.type === InputPrefix) prefixInset = inset
    if (child.type === InputSuffix) suffixInset = inset
  })

  return { prefixInset, suffixInset }
}

/** Props for {@link Input}. `size` is Lattice density, not the native HTML size attribute. */
export interface InputProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  /** Shows error border styling; also sets `aria-invalid` when true */
  error?: boolean
}

const isAriaInvalid = (value: InputProps['aria-invalid']) =>
  value === true || value === 'true' || value === 'grammar' || value === 'spelling'

/** Single-line text control with shared border/height tokens from control-sizes. */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, size, style, error, 'aria-invalid': ariaInvalid, ...props }, ref) => {
    const sizeKey = (size ?? 'default') as keyof typeof controlHeights
    const invalid = error === true || isAriaInvalid(ariaInvalid)

    return (
      <input
        data-slot="input"
        type={type}
        className={cn(inputVariants({ size, className }))}
        style={{
          width: '100%',
          ...controlBorderStyle,
          ...inputSizeStyle(sizeKey),
          ...(invalid ? controlInvalidStyle : undefined),
          ...style,
        }}
        ref={ref}
        aria-invalid={invalid || undefined}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

/**
 * Wraps one {@link Input} with optional {@link InputPrefix} / {@link InputSuffix}.
 * Clones the child input to add extra horizontal padding so text clears absolutely positioned affixes.
 */
const InputGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { prefixInset, suffixInset } = getAffixInsets(children)

    const enhancedChildren = React.Children.map(children, (child) => {
      if (!React.isValidElement(child) || child.type !== Input) return child

      const inputProps = child.props as InputProps
      const sizeKey = (inputProps.size ?? 'default') as keyof typeof controlHeights

      return React.cloneElement(child, {
        style: {
          ...inputSizeStyle(sizeKey, { prefixInset, suffixInset }),
          ...inputProps.style,
        },
      } as Partial<InputProps>)
    })

    return (
      <div
        data-slot="input-group"
        ref={ref}
        className={cn('relative w-full', className)}
        style={{ position: 'relative', width: '100%' }}
        {...props}
      >
        {enhancedChildren}
      </div>
    )
  },
)
InputGroup.displayName = 'InputGroup'

const affixStyle = (
  side: 'left' | 'right',
  size: keyof typeof controlPaddingX = 'default',
  contentWidth = AFFIX_ICON_SIZE,
): React.CSSProperties => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: side === 'right' ? 'flex-end' : 'flex-start',
  width: contentWidth,
  height: AFFIX_ICON_SIZE,
  zIndex: 1,
  pointerEvents: 'none',
  color: 'var(--muted-foreground)',
  ...(side === 'left' ? { left: controlPaddingX[size] } : { right: controlPaddingX[size] }),
})

/** Icon or label placed before the input; set `inset` if content is wider than the default icon slot. */
const InputPrefix = ({ className, style, inset, ...props }: InputAffixProps) => {
  const contentWidth = inset ?? DEFAULT_AFFIX_CONTENT_WIDTH
  return (
    <span
      data-slot="input-prefix"
      className={cn('pointer-events-none text-muted-foreground', className)}
      style={{ ...affixStyle('left', 'default', contentWidth), ...style }}
      {...props}
    />
  )
}
InputPrefix.displayName = 'LatticeInputPrefix'

/** Icon or control placed after the input; `inset` reserves matching padding on the right. */
const InputSuffix = ({ className, style, inset, ...props }: InputAffixProps) => {
  const contentWidth = inset ?? DEFAULT_AFFIX_CONTENT_WIDTH
  return (
    <span
      data-slot="input-suffix"
      className={cn('pointer-events-none text-muted-foreground', className)}
      style={{ ...affixStyle('right', 'default', contentWidth), ...style }}
      {...props}
    />
  )
}
InputSuffix.displayName = 'LatticeInputSuffix'

export { Input, InputGroup, InputPrefix, InputSuffix, inputVariants }
