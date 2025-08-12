import { TableRowProps } from './tableRow.types'
import styled from 'styled-components'

const StyledTableRow = styled.tr<Omit<TableRowProps, 'children'>>`
  background-color: ${({ $backgroundColor }) => $backgroundColor || '#f0f0f0'};

  /* Size variants */

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
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : '')};
`

export const TableRow = ({
  $size = 'medium',
  $backgroundColor,
  children,
  ...props
}: TableRowProps) => {
  return (
    <StyledTableRow
      $size={$size}
      $backgroundColor={$backgroundColor}
      {...props}
    >
      {children}
    </StyledTableRow>
  )
}
