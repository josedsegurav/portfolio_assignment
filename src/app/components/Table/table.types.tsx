import React from 'react'
export interface TableProps {
  /** How large should the table be? */
  $size?: 'small' | 'medium' | 'large'
  /** Table contents */
  children: React.ReactNode
  /** Is the table disabled? */
  disabled?: boolean
}
