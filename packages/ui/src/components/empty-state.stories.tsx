import type { Meta, StoryObj } from '@storybook/react'
import { Inbox } from 'lucide-react'
import { Button } from './button'
import { EmptyState } from './empty-state'

const meta = {
  title: 'Components/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
} satisfies Meta<typeof EmptyState>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <EmptyState
      style={{ maxWidth: 320 }}
      icon={<Inbox aria-hidden style={{ width: 32, height: 32 }} />}
      title="No messages"
      description="When you receive messages they will appear here."
      action={
        <Button size="sm" type="button">
          Compose
        </Button>
      }
    />
  ),
}
