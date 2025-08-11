import { TextProps } from './text.types'
import styled from 'styled-components'

const StyledText = styled.p<Omit<TextProps, 'content'>>`
  display: inline-block;
  margin-bottom: 0.5rem;
  letter-spacing: 0.025em;
  position: relative;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;

  /* Size variants */
  font-size: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return '12px'
      case 'large':
        return '16px'
      default:
        return '14px' // medium
    }
  }};

  padding: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return '10px 16px'
      case 'large':
        return '12px 24px'
      default:
        return '11px 20px' // medium
    }
  }};

  font-weight: ${({ $weight }) => {
    switch ($weight) {
      case 'bold':
        return '600'
      default:
        return '100' // normal
    }
  }};

  color: ${({ $color }) => $color || '#374151'};

  /* Disabled state */
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`

export const Text = ({
  $size = 'medium',
  $color,
  $weight = 'normal',
  content,
  ...props
}: TextProps) => {
  return (
    <>
      <StyledText $size={$size} $color={$color} $weight={$weight} {...props}>
        {content}
      </StyledText>
    </>
  )
}
