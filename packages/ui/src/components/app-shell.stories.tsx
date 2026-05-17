import type { Meta, StoryObj } from '@storybook/react'
import { AppShell } from './app-shell'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarNav,
  SidebarNavItem,
} from './sidebar'

const meta = {
  title: 'Components/AppShell',
  component: AppShell,
  tags: ['autodocs'],
} satisfies Meta<typeof AppShell>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <AppShell
      style={{
        height: 200,
        width: '100%',
        maxWidth: 400,
        overflow: 'hidden',
        borderRadius: 8,
        border: '1px solid var(--border)',
      }}
      header={
        <div style={{ borderBottom: '1px solid var(--border)', padding: '8px 16px', fontSize: 14, fontWeight: 500 }}>
          Dashboard
        </div>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader style={{ fontSize: 12, fontWeight: 600 }}>Nav</SidebarHeader>
          <SidebarContent>
            <SidebarNav>
              <SidebarNavItem active>Home</SidebarNavItem>
              <SidebarNavItem>Settings</SidebarNavItem>
            </SidebarNav>
          </SidebarContent>
        </Sidebar>
      }
    >
      <div style={{ padding: 16, fontSize: 14, color: 'var(--muted-foreground)' }}>Main content area</div>
    </AppShell>
  ),
}
