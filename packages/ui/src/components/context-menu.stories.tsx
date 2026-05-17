import type { Meta, StoryObj } from '@storybook/react'
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from './context-menu'

const meta = {
  title: 'Components/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof ContextMenu>

export default meta
type Story = StoryObj<typeof meta>

const triggerStyle: React.CSSProperties = {
  display: 'flex',
  height: 100,
  width: 200,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  border: '1px dashed var(--border)',
  fontSize: 14,
  color: 'var(--muted-foreground)',
}

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger style={triggerStyle}>Right click</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Settings</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}
