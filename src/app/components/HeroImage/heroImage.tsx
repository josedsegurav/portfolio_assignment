import { HeroContainerProps, HeroImageProps } from './heroImage.types'
import { Button } from '../Button/button'
import styled from 'styled-components'

const HeroContainer = styled.div<HeroContainerProps>`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ centered }) => (centered ? 'center' : 'flex-start')};
  overflow: hidden;

  /* Responsive height */
  height: ${({ height }) => {
    switch (height) {
      case 'small':
        return 'clamp(300px, 40vh, 400px)'
      case 'large':
        return 'clamp(600px, 80vh, 800px)'
      case 'full':
        return '100vh'
      default:
        return 'clamp(400px, 60vh, 600px)' // medium
    }
  }};

  /* Mobile adjustments */
  @media (max-width: 768px) {
    height: ${({ height }) => {
      switch (height) {
        case 'small':
          return '300px'
        case 'large':
          return '70vh'
        case 'full':
          return '100vh'
        default:
          return '50vh' // medium
      }
    }};
  }

  /* Disabled state */
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 1;

  /* Smooth loading */
  transition: opacity 0.5s ease;

  /* Loading state */
  &[data-loading='true'] {
    opacity: 0.3;
  }
`

const HeroOverlay = styled.div<{ $show?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 2;
  display: ${({ $show }) => ($show ? 'block' : 'none')};
`

const HeroContent = styled.div<HeroContainerProps>`
  position: relative;
  z-index: 3;
  color: white;
  padding: 20px;
  text-align: ${({ centered }) => (centered ? 'center' : 'left')};
  max-width: 800px;
  width: 100%;

  /* Mobile padding */
  @media (max-width: 768px) {
    padding: 16px;
  }
`

const HeroTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  margin: 0 0 16px 0;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-family:
    system-ui,
    -apple-system,
    sans-serif;

  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`

const HeroSubtitle = styled.p`
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-weight: 400;
  margin: 0 0 24px 0;
  line-height: 1.4;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  font-family:
    system-ui,
    -apple-system,
    sans-serif;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`

const HeroPlaceholder = styled.div<HeroContainerProps>`
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;

  height: ${({ height }) => {
    switch (height) {
      case 'small':
        return 'clamp(300px, 40vh, 400px)'
      case 'large':
        return 'clamp(600px, 80vh, 800px)'
      case 'full':
        return '100vh'
      default:
        return 'clamp(400px, 60vh, 600px)'
    }
  }};

  &::before {
    content: '🖼️ Hero Image';
  }
`

export const HeroImageComponent = ({
  src,
  alt,
  height = 'medium',
  overlay = false,
  centered = false,
  testID = 'hero-container',
  disabled = false,
}: HeroImageProps) => {
  return (
    <HeroContainer
      disabled={disabled}
      data-testid={testID}
      height={height}
      centered={centered}
    >
      {src ? (
        <>
          <HeroImage src={src} alt={alt} data-loading={!src} />
          {overlay && <HeroOverlay $show={overlay} />}
          <HeroContent centered={centered}>
            <HeroTitle>Hero Title</HeroTitle>
            <HeroSubtitle>Subtitle goes here</HeroSubtitle>
            <Button
              disabled={disabled}
              label="Call to Action"
              $size="large"
              $primary={true}
            />
          </HeroContent>
        </>
      ) : (
        <HeroPlaceholder height={height}>Loading...</HeroPlaceholder>
      )}
    </HeroContainer>
  )
}
