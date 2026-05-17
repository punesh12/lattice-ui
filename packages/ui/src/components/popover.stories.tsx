import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

const meta = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" type="button">
          Open popover
        </Button>
      </PopoverTrigger>
      <PopoverContent style={{ width: 256 }}>
        <p style={{ margin: 0, fontSize: 14 }}>Place content for the popover here.</p>
      </PopoverContent>
    </Popover>
  ),
}
