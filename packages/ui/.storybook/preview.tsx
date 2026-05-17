import type { Preview } from '@storybook/react'
import React, { useEffect } from 'react'
import { Toaster } from '../src/components/toast'
import './preview.css'

function ThemeShell({
  theme,
  children,
}: {
  theme: string
  children: React.ReactNode
}) {
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: 24,
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      {children}
      <Toaster />
    </div>
  )
}

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Color scheme',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, { globals }) => (
      <ThemeShell theme={globals.theme ?? 'light'}>
        <Story />
      </ThemeShell>
    ),
  ],
}

export default preview
