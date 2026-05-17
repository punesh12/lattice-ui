import type { Meta, StoryObj } from '@storybook/react'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarNav,
  SidebarNavItem,
  SidebarProvider,
} from './sidebar'

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar style={{ height: 160, width: 192, borderRadius: 8, border: '1px solid var(--border)' }}>
        <SidebarHeader style={{ padding: 12, fontSize: 14, fontWeight: 600 }}>Lattice</SidebarHeader>
        <SidebarContent>
          <SidebarNav>
            <SidebarNavItem active>Dashboard</SidebarNavItem>
            <SidebarNavItem>Projects</SidebarNavItem>
          </SidebarNav>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  ),
}
