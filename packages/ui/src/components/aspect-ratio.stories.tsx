import type { Meta, StoryObj } from '@storybook/react'
import { AspectRatio } from './aspect-ratio'
import { withMaxWidth } from '../stories/decorators'

const meta = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  decorators: [withMaxWidth(280)],
} satisfies Meta<typeof AspectRatio>

export default meta
type Story = StoryObj<typeof meta>

const variants = ['square', 'video', 'portrait', 'photo', 'cinema', 'ultrawide'] as const

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {variants.map((variant) => (
        <div key={variant}>
          <p
            style={{
              margin: '0 0 8px',
              fontSize: 12,
              fontWeight: 500,
              color: 'var(--muted-foreground)',
              textTransform: 'capitalize',
            }}
          >
            {variant}
          </p>
          <AspectRatio
            variant={variant}
            style={{ width: '100%', borderRadius: 8, backgroundColor: 'var(--muted)' }}
          >
            <div
              style={{
                display: 'flex',
                height: '100%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 11,
                color: 'var(--muted-foreground)',
              }}
            >
              {variant}
            </div>
          </AspectRatio>
        </div>
      ))}
    </div>
  ),
}
