import type { Decorator } from '@storybook/react'
import React from 'react'

/** Constrains story width for form controls and menus. */
export const withMaxWidth =
  (maxWidth = 360): Decorator =>
    (Story) => (
      <div style={{ maxWidth, width: '100%' }}>
        <Story />
      </div>
    )

/** Centers content in the preview canvas. */
export const withCentered: Decorator = (Story) => (
  <div
    style={{
      display: 'flex',
      minHeight: 120,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    }}
  >
    <Story />
  </div>
)