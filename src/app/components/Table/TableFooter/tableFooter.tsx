import { TableFooterProps } from './tableFooter.types'
import styled from 'styled-components'

const StyledTableFooter = styled.tfoot<Omit<TableFooterProps, 'content'>>`
  display: table-footer-group;
  border-top: 2px solid #e5e7eb;
  padding: 1rem;
  text-align: center;
  background-color: ${({ $backgroundColor }) => $backgroundColor || '#f0f0f0'};

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

  /* Disabled state */
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`

export const TableFooter = ({
  $size = 'medium',
  $backgroundColor,
  $weight = 'normal',
  children,
  ...props
}: TableFooterProps) => {
  return (
    <StyledTableFooter
      $size={$size}
      $backgroundColor={$backgroundColor}
      $weight={$weight}
      {...props}
      data-testid={props.testID}
    >
      {children}
    </StyledTableFooter>
  )
}
