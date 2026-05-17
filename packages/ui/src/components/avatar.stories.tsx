import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from './avatar'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'default', 'lg', 'xl'],
    },
    status: {
      control: 'select',
      options: [undefined, 'online', 'offline', 'busy', 'away'],
    },
  },
  args: {
    size: 'default',
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://api.dicebear.com/9.x/avataaars/svg?seed=Lattice" alt="User" />
      <AvatarFallback>LT</AvatarFallback>
    </Avatar>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      {(['xs', 'sm', 'default', 'lg', 'xl'] as const).map((size) => (
        <Avatar key={size} size={size}>
          <AvatarFallback>{size.toUpperCase()}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  ),
}

export const WithStatus: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <Avatar status="online">
        <AvatarFallback>ON</AvatarFallback>
      </Avatar>
      <Avatar status="away">
        <AvatarFallback>AW</AvatarFallback>
      </Avatar>
      <Avatar status="busy">
        <AvatarFallback>BS</AvatarFallback>
      </Avatar>
      <Avatar status="offline">
        <AvatarFallback>OF</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const Group: Story = {
  render: () => (
    <AvatarGroup max={3}>
      <Avatar>
        <AvatarFallback>A</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>B</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>C</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>D</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>E</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  ),
}
