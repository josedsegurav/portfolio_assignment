import React from 'react'
export interface LabelProps {
  /** What background color to use */
  $backgroundColor?: string
  /** How large should the button be? */
  $size?: 'small' | 'medium' | 'large'
  /** Button contents */
  label: string
  for: string
  children?: React.ReactNode
  /** Is the button disabled? */
  disabled?: boolean
}
