import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './textarea'
import { withMaxWidth } from '../stories/decorators'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  decorators: [withMaxWidth(400)],
  args: { placeholder: 'Write a message…' },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithError: Story = { args: { error: true, defaultValue: 'Invalid content' } }
