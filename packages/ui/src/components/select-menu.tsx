'use client'

/**
 * Prop-driven Select (`options` API) built on Popover + Command.
 * Re-exports {@link Select} which delegates here or to compositional {@link SelectRoot} in select.tsx.
 */
import * as React from 'react'
import { Check, ChevronDown, X } from 'lucide-react'
import { controlSizeStyle } from '../lib/control-sizes'
import { flexRowCenter } from '../lib/layout-styles'
import { cn } from '../lib/utils'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './command'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { SelectRoot } from './select'

/** Single option for the prop-driven {@link SelectMenu}. */
export type SelectOption = {
  value: string
  label: string
  disabled?: boolean
}

type SelectSize = 'sm' | 'default' | 'lg'

const triggerStyleSizes = {
  sm: 'sm' as const,
  default: 'default' as const,
  lg: 'lg' as const,
}

/** Props for {@link SelectMenu} — use `<Select options={...} />` or import SelectMenu directly. */
export interface SelectMenuProps {
  options: SelectOption[]
  value?: string | string[]
  defaultValue?: string | string[]
  onValueChange?: (value: string | string[]) => void
  /** Allow selecting more than one option */
  multiple?: boolean
  /** Show a search field to filter options */
  searchable?: boolean
  searchPlaceholder?: string
  placeholder?: string
  emptyText?: string
  disabled?: boolean
  size?: SelectSize
  className?: string
  /** Max labels shown in the trigger before collapsing to "N selected" (multi only) */
  maxDisplayed?: number
}

function normalizeMultiple(value: string | string[] | undefined): string[] {
  if (value == null) return []
  return Array.isArray(value) ? value : [value]
}

function normalizeSingle(value: string | string[] | undefined): string | undefined {
  if (value == null) return undefined
  return Array.isArray(value) ? value[0] : value
}

function useControllableSelectValue(
  valueProp: string | string[] | undefined,
  defaultValue: string | string[] | undefined,
  multiple: boolean,
  onValueChange?: (value: string | string[]) => void,
) {
  const [uncontrolled, setUncontrolled] = React.useState<string | string[] | undefined>(
    defaultValue ?? (multiple ? [] : undefined),
  )
  const isControlled = valueProp !== undefined
  const value = isControlled ? valueProp : uncontrolled

  const setValue = React.useCallback(
    (next: string | string[]) => {
      if (!isControlled) setUncontrolled(next)
      onValueChange?.(next)
    },
    [isControlled, onValueChange],
  )

  return { value, setValue }
}

function SelectMenuTrigger({
  size = 'default',
  className,
  disabled,
  placeholder = 'Select…',
  multiple,
  options,
  value,
  maxDisplayed = 2,
  open,
}: {
  size?: SelectSize
  className?: string
  disabled?: boolean
  placeholder?: string
  multiple?: boolean
  options: SelectOption[]
  value?: string | string[]
  maxDisplayed?: number
  open?: boolean
}) {
  const selectedValues = multiple ? normalizeMultiple(value) : []
  const singleValue = multiple ? undefined : normalizeSingle(value)

  const selectedOptions = multiple
    ? options.filter((o) => selectedValues.includes(o.value))
    : options.filter((o) => o.value === singleValue)

  let label = placeholder
  if (multiple) {
    if (selectedOptions.length === 0) {
      label = placeholder
    } else if (selectedOptions.length <= maxDisplayed) {
      label = selectedOptions.map((o) => o.label).join(', ')
    } else {
      label = `${selectedOptions.length} selected`
    }
  } else if (selectedOptions[0]) {
    label = selectedOptions[0].label
  }

  const hasSelection = multiple ? selectedValues.length > 0 : Boolean(singleValue)

  return (
    <button
      type="button"
      role="combobox"
      data-slot="select-menu-trigger"
      aria-expanded={open}
      disabled={disabled}
      className={cn(
        'flex w-full items-center justify-between gap-2 rounded-md border border-input bg-background text-sm text-foreground shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      style={{
        ...flexRowCenter,
        justifyContent: 'space-between',
        width: '100%',
        gap: 8,
        ...controlSizeStyle(triggerStyleSizes[size]),
        color: hasSelection ? 'var(--foreground)' : 'var(--muted-foreground)',
        textAlign: 'left',
      }}
    >
      <span
        style={{
          flex: 1,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
      <ChevronDown
        aria-hidden
        style={{
          width: 16,
          height: 16,
          flexShrink: 0,
          color: 'var(--muted-foreground)',
          transform: open ? 'rotate(180deg)' : undefined,
          transition: 'transform 150ms ease',
        }}
      />
    </button>
  )
}

/** Searchable, single- or multi-select dropdown; client-only due to open state and filtering. */
function SelectMenu({
  options,
  value: valueProp,
  defaultValue,
  onValueChange,
  multiple = false,
  searchable = false,
  searchPlaceholder = 'Search…',
  placeholder = 'Select…',
  emptyText = 'No results found.',
  disabled,
  size = 'default',
  className,
  maxDisplayed = 2,
}: SelectMenuProps) {
  const [open, setOpen] = React.useState(false)
  const { value, setValue } = useControllableSelectValue(
    valueProp,
    defaultValue,
    multiple,
    onValueChange,
  )

  const selectedSet = React.useMemo(() => {
    if (multiple) return new Set(normalizeMultiple(value))
    const single = normalizeSingle(value)
    return single ? new Set([single]) : new Set<string>()
  }, [multiple, value])

  const handleSelect = (optionValue: string) => {
    if (multiple) {
      const current = normalizeMultiple(value)
      const next = current.includes(optionValue)
        ? current.filter((v) => v !== optionValue)
        : [...current, optionValue]
      setValue(next)
      return
    }
    const next = normalizeSingle(value) === optionValue ? '' : optionValue
    setValue(next)
    setOpen(false)
  }

  const clearSelection = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setValue(multiple ? [] : '')
  }

  const hasSelection = multiple ? selectedSet.size > 0 : Boolean(normalizeSingle(value))

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild disabled={disabled}>
        <div
          data-slot="select-menu"
          className={cn('relative w-full', className)}
          style={{ position: 'relative', width: '100%' }}
        >
          <SelectMenuTrigger
            size={size}
            disabled={disabled}
            placeholder={placeholder}
            multiple={multiple}
            options={options}
            value={value}
            maxDisplayed={maxDisplayed}
            open={open}
          />
          {hasSelection && !disabled ? (
            <button
              type="button"
              aria-label="Clear selection"
              data-slot="select-menu-clear"
              onClick={clearSelection}
              style={{
                position: 'absolute',
                right: 36,
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 20,
                height: 20,
                padding: 0,
                border: 'none',
                background: 'transparent',
                color: 'var(--muted-foreground)',
                cursor: 'pointer',
                borderRadius: 4,
              }}
            >
              <X style={{ width: 14, height: 14 }} aria-hidden />
            </button>
          ) : null}
        </div>
      </PopoverTrigger>
      <PopoverContent
        data-slot="select-menu-content"
        align="start"
        className="p-0"
        style={{
          width: 'var(--radix-popover-trigger-width)',
          minWidth: 'var(--radix-popover-trigger-width)',
          padding: 0,
          zIndex: 50,
        }}
      >
        <Command shouldFilter={searchable}>
          {searchable ? <CommandInput placeholder={searchPlaceholder} /> : null}
          <CommandList>
            <CommandEmpty>{emptyText}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = selectedSet.has(option.value)
                return (
                  <CommandItem
                    key={option.value}
                    value={option.label}
                    disabled={option.disabled}
                    onSelect={() => {
                      if (!option.disabled) handleSelect(option.value)
                    }}
                  >
                    <Check
                      aria-hidden
                      style={{
                        width: 16,
                        height: 16,
                        flexShrink: 0,
                        opacity: isSelected ? 1 : 0,
                        color: isSelected ? 'var(--primary)' : 'var(--muted-foreground)',
                      }}
                    />
                    {option.label}
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

/**
 * Union: pass `options` for SelectMenu, or Radix SelectRoot props for compositional usage.
 * Split keeps tree-shakeable primitives separate from the heavier Command-based menu.
 */
export type SelectProps =
  | (React.ComponentPropsWithoutRef<typeof SelectRoot> & {
      options?: never
      multiple?: never
      searchable?: never
    })
  | SelectMenuProps

function isSelectMenuProps(props: SelectProps): props is SelectMenuProps {
  return Array.isArray((props as SelectMenuProps).options)
}

/** Dispatches to SelectMenu when `options` is provided, otherwise to Radix {@link SelectRoot}. */
function Select(props: SelectProps) {
  if (isSelectMenuProps(props)) {
    return <SelectMenu {...props} />
  }
  return <SelectRoot {...props} />
}

export { Select, SelectMenu }
