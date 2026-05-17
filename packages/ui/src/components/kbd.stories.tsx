import type { Meta, StoryObj } from '@storybook/react'
import { Kbd } from './kbd'

const meta = {
  title: 'Components/Kbd',
  component: Kbd,
  tags: ['autodocs'],
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const Shortcut: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 4 }}>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </div>
  ),
}
