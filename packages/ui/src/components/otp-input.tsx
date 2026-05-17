/** Segmented one-time-code input with per-cell focus and paste handling. */
import * as React from 'react'
import { flexRowCenter } from '../lib/layout-styles'
import { cn } from '../lib/utils'

export const DEFAULT_OTP_LENGTH = 6
/** @deprecated Use `DEFAULT_OTP_LENGTH` or the `length` prop */
export const OTP_LENGTH = DEFAULT_OTP_LENGTH

const clampLength = (length: number) => Math.min(8, Math.max(4, Math.floor(length)))

/** Props for {@link OtpInput}. */
export interface OtpInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string
  onChange?: (value: string) => void
  /** Number of digit cells — default `6` (min 4, max 8) */
  length?: number
  error?: boolean
  disabled?: boolean
}

const OtpInput = React.forwardRef<HTMLDivElement, OtpInputProps>(
  (
    {
      className,
      style,
      value = '',
      onChange,
      length = DEFAULT_OTP_LENGTH,
      error,
      disabled,
      ...props
    },
    ref,
  ) => {
    const otpLength = clampLength(length)
    const inputsRef = React.useRef<(HTMLInputElement | null)[]>([])
    const digits = value.padEnd(otpLength, ' ').slice(0, otpLength).split('')

    const update = (next: string) => onChange?.(next.replace(/\s/g, '').slice(0, otpLength))

    const handleChange = (index: number, char: string) => {
      const cleaned = char.replace(/\D/g, '').slice(-1)
      const arr = digits.map((d) => (d === ' ' ? '' : d))
      arr[index] = cleaned
      const next = arr.join('').trimEnd()
      update(next)
      if (cleaned && index < otpLength - 1) inputsRef.current[index + 1]?.focus()
    }

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace' && !digits[index]?.trim() && index > 0) {
        inputsRef.current[index - 1]?.focus()
      }
    }

    const handlePaste = (e: React.ClipboardEvent) => {
      e.preventDefault()
      const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, otpLength)
      update(pasted)
      const focusIndex = Math.min(pasted.length, otpLength - 1)
      inputsRef.current[focusIndex]?.focus()
    }

    return (
      <div
        data-slot="otp-input"
        data-length={otpLength}
        ref={ref}
        role="group"
        aria-label="One-time password"
        className={cn('flex gap-2', className)}
        style={{ ...flexRowCenter, gap: 8, justifyContent: 'center', ...style }}
        onPaste={handlePaste}
        {...props}
      >
        {Array.from({ length: otpLength }).map((_, i) => (
          <input
            key={i}
            ref={(el) => {
              inputsRef.current[i] = el
            }}
            data-slot="otp-input-cell"
            type="text"
            inputMode="numeric"
            maxLength={1}
            disabled={disabled}
            aria-invalid={error || undefined}
            value={digits[i]?.trim() ? digits[i] : ''}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            className={cn(
              'h-11 w-11 min-h-11 rounded-md border border-input bg-background text-center text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 aria-invalid:border-error',
            )}
            style={{
              width: 44,
              height: 44,
              minHeight: 44,
              borderRadius: 'calc(var(--radius) - 2px)',
              border: error ? '1px solid var(--error)' : '1px solid var(--input)',
              backgroundColor: 'var(--background)',
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 500,
              lineHeight: 1,
              padding: 0,
              boxSizing: 'border-box',
            }}
          />
        ))}
      </div>
    )
  },
)
OtpInput.displayName = 'OtpInput'

export { OtpInput }
