import type { CSSProperties } from 'react'

export const inlineFlexCenter: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
}

export const flexRowCenter: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}

export const flexRowWrapCenter: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
}

export const flexColCenter: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}

export const listReset: CSSProperties = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
}

export const visuallyHidden: CSSProperties = {
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
}
