import { CardProps } from './card.types'
import { CardContentProps } from './card.types'
import styled from 'styled-components'

const Card = styled.div<CardProps>`
  background: white;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  transition: box-shadow 0.3s ease;

  /* Shadow variants */
  box-shadow: ${({ shadow }) => {
    switch (shadow) {
      case 'none':
        return 'none'
      case 'small':
        return '0 1px 3px rgba(0, 0, 0, 0.1)'
      case 'large':
        return '0 10px 25px rgba(0, 0, 0, 0.15)'
      default:
        return '0 4px 6px rgba(0, 0, 0, 0.1)' // medium
    }
  }};

  /* Disabled */

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  /* Hover effects */
  ${({ hover }) =>
    hover &&
    `
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
  `}
  /* Prevent hover effects when disabled */
    ${({ disabled }) =>
    disabled &&
    `
        &:hover {
        transform: none;
        box-shadow: none;
        }
    `}

  /* Mobile adjustments */
  @media (max-width: 768px) {
    border-radius: 6px;

    ${({ hover }) =>
      hover &&
      `
      &:hover {
        transform: translateY(-1px);
      }
    `}
  }
`

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
  display: block;

  @media (max-width: 768px) {
    height: 180px;
  }
`

const CardContent = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 8px 0;
  line-height: 1.3;
  font-family:
    system-ui,
    -apple-system,
    sans-serif;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`

const CardDescription = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0 0 16px 0;
  line-height: 1.5;
  font-family:
    system-ui,
    -apple-system,
    sans-serif;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 12px;
  }
`

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }
`

export const CardComponent = ({
  shadow = 'medium',
  hover = true,
  disabled = false,
  src,
  alt = 'Card Image',
  title,
  description,
  footer,
  ...props
}: CardContentProps) => {
  return (
    <Card
      data-testid={props.testID}
      shadow={shadow}
      hover={hover}
      disabled={disabled}
      {...props}
    >
      {src && <CardImage src={src} alt={alt} />}
      <CardContent>
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
        {footer && <CardFooter>{footer}</CardFooter>}
      </CardContent>
    </Card>
  )
}
