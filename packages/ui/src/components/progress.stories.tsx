import type { Meta, StoryObj } from '@storybook/react'
import { CircularProgress, Progress } from './progress'
import { withMaxWidth } from '../stories/decorators'

const meta = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  decorators: [withMaxWidth(280)],
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Linear: Story = { args: { value: 66 } }
export const Indeterminate: Story = { args: { indeterminate: true, 'aria-label': 'Loading' } }

export const Circular: Story = {
  render: () => <CircularProgress value={72} />,
}
