import type { Meta, StoryObj } from '@storybook/react'
import { FileUpload } from './file-upload'
import { withMaxWidth } from '../stories/decorators'

const meta = {
  title: 'Components/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  decorators: [withMaxWidth(360)],
} satisfies Meta<typeof FileUpload>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
