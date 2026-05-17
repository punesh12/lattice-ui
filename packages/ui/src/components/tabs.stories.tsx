import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" style={{ width: 320 }}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="account" style={{ fontSize: 14, color: 'var(--muted-foreground)' }}>
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password" style={{ fontSize: 14, color: 'var(--muted-foreground)' }}>
        Change your password here.
      </TabsContent>
      <TabsContent value="notifications" style={{ fontSize: 14, color: 'var(--muted-foreground)' }}>
        Manage how you receive notifications.
      </TabsContent>
    </Tabs>
  ),
}
