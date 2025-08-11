export interface TableCellProps {
  $backgroundColor?: string
  /** How large should the cell be? */
  $size?: 'small' | 'medium' | 'large'
  /** Font weight */
  $weight?: 'normal' | 'bold'
  /** Cell contents */
  content: string
  /** Is the cell disabled? */
  disabled?: boolean
  colSpan?: number
  rowSpan?: number
}
