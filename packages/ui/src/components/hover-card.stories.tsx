import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './hover-card'

const meta = {
  title: 'Components/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" type="button">
          @latticeui
        </Button>
      </HoverCardTrigger>
      <HoverCardContent style={{ width: 256 }}>
        <p style={{ margin: 0, fontSize: 14 }}>Structured components for modern interfaces.</p>
      </HoverCardContent>
    </HoverCard>
  ),
}
