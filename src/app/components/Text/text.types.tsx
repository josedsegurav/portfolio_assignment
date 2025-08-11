export interface TextProps {
  content: string
  /** The text color */
  $color?: string
  /** The font size */
  $size?: 'small' | 'medium' | 'large'
  /** The font weight */
  $weight?: 'normal' | 'bold' | 'bolder'
  /** Is the text disabled? */
  disabled?: boolean
}
