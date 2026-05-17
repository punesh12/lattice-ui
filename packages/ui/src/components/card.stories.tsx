import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card'
import { withMaxWidth } from '../stories/decorators'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  decorators: [withMaxWidth(360)],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>Card description</CardDescription>
      </CardHeader>
      <CardContent>
        <p style={{ margin: 0, fontSize: 14, color: 'var(--muted-foreground)' }}>
          Card content goes here.
        </p>
        <Button size="sm" style={{ marginTop: 16 }}>
          Action
        </Button>
      </CardContent>
    </Card>
  ),
}
