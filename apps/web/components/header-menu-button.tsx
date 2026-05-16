'use client'

import { Menu, X } from 'lucide-react'
import { Button } from '@lattice-ui/ui'

type HeaderMenuButtonProps = {
  open: boolean
  onToggle: () => void
  controlsId: string
}

export function HeaderMenuButton({ open, onToggle, controlsId }: HeaderMenuButtonProps) {
  return (
    <Button
      type="button"
      variant="outline"
      size="icon-sm"
      className="marketing-header-menu-btn"
      aria-expanded={open}
      aria-controls={controlsId}
      aria-label={open ? 'Close menu' : 'Open menu'}
      onClick={onToggle}
    >
      {open ? (
        <X style={{ width: 20, height: 20, flexShrink: 0 }} aria-hidden />
      ) : (
        <Menu style={{ width: 20, height: 20, flexShrink: 0 }} aria-hidden />
      )}
    </Button>
  )
}
