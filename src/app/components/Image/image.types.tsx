export interface ImageProps {
  /** The source URL of the image */
  src: string

  /** Alternative text for the image */
  alt?: string

  /** Width of the image */
  width?: number | string

  /** Height of the image */
  height?: number | string
  /** Object fit property for the image */
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  /** Whether the image should have rounded corners */
  rounded?: boolean
  /** Whether the image should have a shadow */
  shadow?: boolean
  disabled?: boolean
}
