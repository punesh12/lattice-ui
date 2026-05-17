import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './badge'
import { FilterBar } from './filter-bar'

const meta = {
  title: 'Components/FilterBar',
  component: FilterBar,
  tags: ['autodocs'],
} satisfies Meta<typeof FilterBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <FilterBar onClear={() => undefined}>
      <Badge variant="secondary">Status: Active</Badge>
      <Badge variant="secondary">Role: Admin</Badge>
    </FilterBar>
  ),
}
