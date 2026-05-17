import type { Meta, StoryObj } from '@storybook/react'
import { SettingsRow } from './settings-row'
import { Switch } from './switch'
import { withMaxWidth } from '../stories/decorators'

const meta = {
  title: 'Components/SettingsRow',
  component: SettingsRow,
  tags: ['autodocs'],
  decorators: [withMaxWidth(360)],
} satisfies Meta<typeof SettingsRow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <SettingsRow
      label="Notifications"
      description="Email me about updates"
      control={<Switch defaultChecked aria-label="Notifications" />}
    />
  ),
}
