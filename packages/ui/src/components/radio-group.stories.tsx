import type { Meta, StoryObj } from '@storybook/react'
import { Label } from './label'
import { RadioGroup, RadioGroupItem } from './radio-group'

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <RadioGroup defaultValue="comfortable" {...args}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <RadioGroupItem value="default" id="rg-default" />
        <Label htmlFor="rg-default">Default</Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <RadioGroupItem value="comfortable" id="rg-comfortable" />
        <Label htmlFor="rg-comfortable">Comfortable</Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <RadioGroupItem value="compact" id="rg-compact" />
        <Label htmlFor="rg-compact">Compact</Label>
      </div>
    </RadioGroup>
  ),
}

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="a" disabled>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <RadioGroupItem value="a" id="rg-a" />
        <Label htmlFor="rg-a">Option A</Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <RadioGroupItem value="b" id="rg-b" />
        <Label htmlFor="rg-b">Option B</Label>
      </div>
    </RadioGroup>
  ),
}
