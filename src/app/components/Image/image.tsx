import { ImageProps } from './image.types'
import styled from 'styled-components'

const StyledImage = styled.img<ImageProps>`
  max-width: 100%;
  display: block;
  /* Width and height */
  width: ${({ width }) =>
    typeof width === 'number' ? `${width}px` : width || 'auto'};
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : height || 'auto'};
  /* Object fit */
  object-fit: ${({ objectFit }) => objectFit || 'cover'};

  /* Rounded corners */
  border-radius: ${({ rounded }) => (rounded ? '8px' : '0')};

  /* Shadow */
  box-shadow: ${({ shadow }) =>
    shadow ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none'};

  /* Disabled state */
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`

export const Image = ({
  src,
  alt,
  width,
  height,
  objectFit,
  rounded = false,
  shadow = false,
  disabled = false,
}: ImageProps) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      objectFit={objectFit}
      rounded={rounded}
      shadow={shadow}
      disabled={disabled}
    />
  )
}
