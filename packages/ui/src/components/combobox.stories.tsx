import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Combobox } from './combobox'
import { withMaxWidth } from '../stories/decorators'

const options = [
  { value: 'react', label: 'React' },
  { value: 'next', label: 'Next.js' },
  { value: 'vue', label: 'Vue' },
]

const meta = {
  title: 'Components/Combobox',
  component: Combobox,
  tags: ['autodocs'],
  decorators: [withMaxWidth(320)],
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: function ComboboxDemo() {
    const [value, setValue] = useState('')
    return (
      <Combobox
        options={options}
        value={value}
        onValueChange={setValue}
        placeholder="Select framework…"
      />
    )
  },
}
