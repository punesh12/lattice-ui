import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from './separator'
import { withMaxWidth } from '../stories/decorators'

const meta = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
  decorators: [withMaxWidth(320)],
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = { render: () => <Separator /> }

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, height: 32 }}>
      <span style={{ fontSize: 14 }}>Blog</span>
      <Separator orientation="vertical" style={{ height: 24 }} />
      <span style={{ fontSize: 14 }}>Docs</span>
    </div>
  ),
}
