import type { Meta, StoryObj } from '@storybook/react'
import { Link } from './link'

const meta = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  args: { href: '#', children: 'Learn more' },
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
