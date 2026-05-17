import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { OtpInput } from './otp-input'

const meta = {
  title: 'Components/OtpInput',
  component: OtpInput,
  tags: ['autodocs'],
} satisfies Meta<typeof OtpInput>

export default meta
type Story = StoryObj<typeof meta>

export const SixDigits: Story = {
  render: function OtpDemo() {
    const [value, setValue] = useState('')
    return <OtpInput value={value} onChange={setValue} />
  },
}

export const FourDigits: Story = {
  render: function OtpDemo() {
    const [value, setValue] = useState('')
    return <OtpInput length={4} value={value} onChange={setValue} />
  },
}
