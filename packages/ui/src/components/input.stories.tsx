import type { Meta, StoryObj } from '@storybook/react'
import { DollarSign, Mail, Search } from 'lucide-react'
import { Input, InputGroup, InputPrefix, InputSuffix } from './input'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'default', 'lg'] },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  args: {
    placeholder: 'Email address',
    size: 'default',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 360 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360 }}>
      <Input size="sm" placeholder="Small" />
      <Input size="default" placeholder="Default" />
      <Input size="lg" placeholder="Large" />
    </div>
  ),
}

export const WithPrefix: Story = {
  render: () => (
    <InputGroup>
      <InputPrefix>
        <Mail size={16} aria-hidden />
      </InputPrefix>
      <Input placeholder="name@example.com" />
    </InputGroup>
  ),
}

export const WithSuffix: Story = {
  render: () => (
    <InputGroup>
      <Input placeholder="Search" />
      <InputSuffix>
        <Search size={16} aria-hidden />
      </InputSuffix>
    </InputGroup>
  ),
}

export const WithPrefixAndSuffix: Story = {
  render: () => (
    <InputGroup>
      <InputPrefix>
        <DollarSign size={16} aria-hidden />
      </InputPrefix>
      <Input placeholder="0.00" type="number" />
      <InputSuffix style={{ fontSize: 12 }}>USD</InputSuffix>
    </InputGroup>
  ),
}

export const Error: Story = {
  args: {
    error: true,
    defaultValue: 'invalid@',
  },
}
