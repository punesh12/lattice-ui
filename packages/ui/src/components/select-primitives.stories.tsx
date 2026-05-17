import type { Meta, StoryObj } from '@storybook/react'
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValue,
} from './select'
import { withMaxWidth } from '../stories/decorators'

const meta = {
  title: 'Components/Select (Primitives)',
  component: SelectRoot,
  tags: ['autodocs'],
  decorators: [withMaxWidth(320)],
} satisfies Meta<typeof SelectRoot>

export default meta
type Story = StoryObj<typeof meta>

export const Compositional: Story = {
  render: () => (
    <SelectRoot defaultValue="banana">
      <SelectTrigger>
        <SelectValue placeholder="Select a fruit…" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="cherry">Cherry</SelectItem>
      </SelectContent>
    </SelectRoot>
  ),
}
