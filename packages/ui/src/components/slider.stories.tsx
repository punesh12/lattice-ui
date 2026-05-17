import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Slider } from './slider'
import { withMaxWidth } from '../stories/decorators'

const meta = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  decorators: [withMaxWidth(280)],
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: function SliderDemo() {
    const [value, setValue] = useState([50])
    return <Slider value={value} onValueChange={setValue} />
  },
}
