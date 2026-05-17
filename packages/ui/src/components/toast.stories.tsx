import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import { toast } from './toast'

const meta = {
  title: 'Components/Toast',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      <Button variant="outline" onClick={() => toast('Default toast')}>
        Default
      </Button>
      <Button variant="outline" onClick={() => toast.success('Changes saved')}>
        Success
      </Button>
      <Button variant="outline" onClick={() => toast.info('New update available')}>
        Info
      </Button>
      <Button variant="outline" onClick={() => toast.warning('Storage almost full')}>
        Warning
      </Button>
      <Button variant="outline" onClick={() => toast.error('Could not save')}>
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.promise(
            new Promise((resolve) => {
              setTimeout(resolve, 1500)
            }),
            {
              loading: 'Saving…',
              success: 'Saved',
              error: 'Failed',
            },
          )
        }
      >
        Promise
      </Button>
    </div>
  ),
}
