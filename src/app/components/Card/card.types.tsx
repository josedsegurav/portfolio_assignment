export interface CardProps {
  shadow?: 'none' | 'small' | 'medium' | 'large'
  hover?: boolean
  disabled?: boolean
  testID?: string
}

export interface CardContentProps extends CardProps {
  /** The source URL of the card image */
  src: string
  /** Alternative text for the card image */
  alt?: string

  title?: string
  description?: string
  footer?: string
}
