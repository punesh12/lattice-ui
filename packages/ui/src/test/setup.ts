import '@testing-library/jest-dom/vitest'
import '@punesh12/lattice-ui-tokens/globals.css'
import { cleanup } from '@testing-library/react'
import type { ReactNode } from 'react'
import { afterEach, vi } from 'vitest'

afterEach(() => {
  cleanup()
})

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

vi.stubGlobal('ResizeObserver', ResizeObserverMock)

Element.prototype.scrollIntoView = vi.fn()

vi.mock('@radix-ui/react-popover', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@radix-ui/react-popover')>()
  return {
    ...actual,
    Portal: ({ children }: { children: ReactNode }) => children,
  }
})
