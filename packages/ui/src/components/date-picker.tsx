'use client'

import * as React from 'react'
import { Calendar as CalendarIcon } from 'lucide-react'
import { DayPicker } from 'react-day-picker'
import { cn } from '../lib/utils'
import { Button } from './button'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

export interface DatePickerProps {
  date?: Date
  onDateChange?: (date: Date | undefined) => void
  placeholder?: string
  className?: string
  disabled?: boolean
}

function DatePicker({ date, onDateChange, placeholder = 'Pick a date', className, disabled }: DatePickerProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          data-slot="date-picker-trigger"
          variant="outline"
          size="default"
          disabled={disabled}
          className={cn('w-full justify-start text-left font-normal', !date && 'text-muted-foreground', className)}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? date.toLocaleDateString(undefined, { dateStyle: 'long' }) : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent data-slot="date-picker-content" className="w-auto p-0" align="start">
        <DayPicker
          mode="single"
          selected={date}
          onSelect={(d) => {
            onDateChange?.(d)
            setOpen(false)
          }}
          className="p-3"
          classNames={{
            months: 'flex flex-col',
            month_caption: 'flex justify-center pt-1 relative items-center',
            nav: 'flex items-center gap-1',
            button_previous: 'absolute left-1 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
            button_next: 'absolute right-1 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
            month_grid: 'w-full border-collapse',
            weekdays: 'flex',
            weekday: 'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',
            week: 'flex w-full mt-2',
            day: 'h-9 w-9 text-center text-sm p-0 relative',
            day_button: 'h-9 w-9 p-0 font-normal rounded-md hover:bg-accent',
            selected: 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground rounded-md',
            today: 'bg-accent text-accent-foreground rounded-md',
            outside: 'text-muted-foreground opacity-50',
            disabled: 'text-muted-foreground opacity-50',
          }}
        />
      </PopoverContent>
    </Popover>
  )
}

export { DatePicker }
