import type { Meta, StoryObj } from '@storybook/react'
import { Field } from './field'
import { Input } from './input'
import { withMaxWidth } from '../stories/decorators'

const meta = {
  title: 'Components/Field',
  component: Field,
  tags: ['autodocs'],
  decorators: [withMaxWidth(360)],
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const WithDescription: Story = {
  render: () => (
    <Field label="Email" htmlFor="email" description="We'll never share your email.">
      <Input id="email" type="email" placeholder="you@example.com" />
    </Field>
  ),
}

export const WithError: Story = {
  render: () => (
    <Field label="Email" htmlFor="email-err" error="Please enter a valid email address.">
      <Input id="email-err" type="email" placeholder="you@example.com" />
    </Field>
  ),
}
