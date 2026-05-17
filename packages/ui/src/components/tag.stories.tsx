import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Tag, TagGroup } from './tag'

const meta = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { children: 'Design' } }
export const Selected: Story = { args: { children: 'Engineering', variant: 'selected' } }

export const TagGroupExample: Story = {
  render: function TagGroupDemo() {
    const [value, setValue] = useState('engineering')
    return (
      <TagGroup
        value={value}
        onValueChange={setValue}
        options={[
          { value: 'design', label: 'Design' },
          { value: 'engineering', label: 'Engineering' },
        ]}
      />
    )
  },
}
