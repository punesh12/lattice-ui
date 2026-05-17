import type { Meta, StoryObj } from '@storybook/react'
import { ScrollArea } from './scroll-area'

const meta = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

const items = Array.from({ length: 12 }, (_, i) => `Item ${i + 1}`)

const boxStyle: React.CSSProperties = {
  height: 120,
  width: 200,
  borderRadius: 8,
  border: '1px solid var(--border)',
  overflow: 'hidden',
}

function ScrollList() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: 12, fontSize: 14 }}>
      {items.map((item) => (
        <p key={item} style={{ margin: 0 }}>
          {item}
        </p>
      ))}
    </div>
  )
}

export const ScrollbarVisible: Story = {
  render: () => (
    <div style={boxStyle}>
      <ScrollArea showScrollbar style={{ height: '100%', width: '100%' }}>
        <ScrollList />
      </ScrollArea>
    </div>
  ),
}

export const ScrollbarHidden: Story = {
  render: () => (
    <div style={boxStyle}>
      <ScrollArea showScrollbar={false} style={{ height: '100%', width: '100%' }}>
        <ScrollList />
      </ScrollArea>
    </div>
  ),
}
