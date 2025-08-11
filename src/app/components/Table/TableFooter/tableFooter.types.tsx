import React from 'react'
export interface TableFooterProps {
  children: React.ReactNode
  /** The background color of the header */
  $backgroundColor?: string
  /** The size of the header */
  $size?: 'small' | 'medium' | 'large'
  /** The font weight of the header */
  $weight?: 'normal' | 'bold'
  /** Is the header disabled? */
  disabled?: boolean

  testID?: string
}
