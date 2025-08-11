import React from 'react'
export interface TableRowProps {
  $backgroundColor?: string
  /** How large should the row be? */
  $size?: 'small' | 'medium' | 'large'
  /** Row contents */
  children: React.ReactNode
  /** Is the row disabled? */
  disabled?: boolean
}
