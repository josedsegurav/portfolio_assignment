export interface TableHeaderProps {
  /** The text content of the header */
  content: string
  /** The background color of the header */
  $backgroundColor?: string
  /** The size of the header */
  $size?: 'small' | 'medium' | 'large'
  /** The font weight of the header */
  $weight?: 'normal' | 'bold'
  /** Is the header disabled? */
  disabled?: boolean
}
