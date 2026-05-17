import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from './divider'
import { withMaxWidth } from '../stories/decorators'

const meta = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  decorators: [withMaxWidth(240)],
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, textAlign: 'center', fontSize: 14 }}>
      <span>Above</span>
      <Divider />
      <span>Below</span>
    </div>
  ),
}
