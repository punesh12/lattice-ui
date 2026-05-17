import type { Meta, StoryObj } from '@storybook/react'
import { LatticeLogo } from './lattice-logo'

const meta = {
  title: 'Components/LatticeLogo',
  component: LatticeLogo,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'default', 'lg'] },
    showWordmark: { control: 'boolean' },
  },
  args: {
    size: 'default',
    showWordmark: true,
  },
} satisfies Meta<typeof LatticeLogo>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 24 }}>
      {(['xs', 'sm', 'default', 'lg'] as const).map((size) => (
        <LatticeLogo key={size} size={size} showWordmark />
      ))}
    </div>
  ),
}

export const MarkOnly: Story = {
  args: {
    showWordmark: false,
  },
}
