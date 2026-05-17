import type { Meta, StoryObj } from '@storybook/react'
import { NotificationItem } from './notification-item'
import { withMaxWidth } from '../stories/decorators'

const meta = {
  title: 'Components/NotificationItem',
  component: NotificationItem,
  tags: ['autodocs'],
  decorators: [withMaxWidth(360)],
} satisfies Meta<typeof NotificationItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'New comment',
    description: 'Alex left a comment on your post.',
    time: '2m ago',
  },
}
