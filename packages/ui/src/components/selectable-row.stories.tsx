import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { SelectableRow } from './selectable-row'
import { withMaxWidth } from '../stories/decorators'

const meta = {
  title: 'Components/SelectableRow',
  component: SelectableRow,
  tags: ['autodocs'],
  decorators: [withMaxWidth(320)],
} satisfies Meta<typeof SelectableRow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: function SelectableRowDemo() {
    const [selected, setSelected] = useState('a')
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <SelectableRow
          state={selected === 'a' ? 'selected' : 'default'}
          onClick={() => setSelected('a')}
        >
          <span style={{ fontWeight: 500 }}>Option A</span>
          <span style={{ display: 'block', fontSize: 12, color: 'var(--muted-foreground)' }}>
            First choice
          </span>
        </SelectableRow>
        <SelectableRow
          state={selected === 'b' ? 'selected' : 'default'}
          onClick={() => setSelected('b')}
        >
          <span style={{ fontWeight: 500 }}>Option B</span>
          <span style={{ display: 'block', fontSize: 12, color: 'var(--muted-foreground)' }}>
            Second choice
          </span>
        </SelectableRow>
      </div>
    )
  },
}
