import React from 'react'
export interface DropdownProps {
  $size?: 'small' | 'medium' | 'large'
  $backgroundColor?: string
  disabled?: boolean
  children: React.ReactNode
  $weight?: 'normal' | 'bold'
}
