import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './skeleton'

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Skeleton style={{ width: 40, height: 40, borderRadius: 9999 }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Skeleton style={{ width: 160, height: 16, borderRadius: 4 }} />
        <Skeleton style={{ width: 120, height: 16, borderRadius: 4 }} />
      </div>
    </div>
  ),
}
