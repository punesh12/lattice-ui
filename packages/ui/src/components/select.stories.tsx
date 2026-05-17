import type { Meta, StoryObj } from '@storybook/react'
import { Select, type SelectMenuProps } from './select-menu'

const sampleOptions: SelectMenuProps['options'] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date', disabled: true },
  { value: 'elderberry', label: 'Elderberry' },
]

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'default', 'lg'] },
    disabled: { control: 'boolean' },
    searchable: { control: 'boolean' },
    multiple: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  args: {
    options: sampleOptions,
    placeholder: 'Select a fruit…',
    size: 'default',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Single: Story = {
  args: {
    options: sampleOptions,
    defaultValue: 'banana',
  },
}

export const Searchable: Story = {
  args: {
    options: sampleOptions,
    searchable: true,
    searchPlaceholder: 'Filter fruits…',
  },
}

export const Multiple: Story = {
  args: {
    options: sampleOptions,
    multiple: true,
    defaultValue: ['apple', 'cherry'],
    maxDisplayed: 2,
  },
}

export const SearchableMultiple: Story = {
  args: {
    options: sampleOptions,
    multiple: true,
    searchable: true,
    defaultValue: ['banana'],
  },
}
