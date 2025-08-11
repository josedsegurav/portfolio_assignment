export interface HeroContainerProps {
  height?: 'small' | 'medium' | 'large' | 'full'
  centered?: boolean
  testID?: string
  disabled?: boolean
}

export interface HeroImageProps extends HeroContainerProps {
  /** The source URL of the hero image */
  src: string

  /** Alternative text for the hero image */
  alt?: string

  /** Height of the hero image */
  height?: 'small' | 'medium' | 'large' | 'full'

  /** Whether to show an overlay on the hero image */
  overlay?: boolean

  /** Whether the content should be centered */
  centered?: boolean
}
