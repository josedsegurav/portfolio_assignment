import { TableCellProps } from './tableCell.types'
import styled from 'styled-components'

const StyledTableCell = styled.td<Omit<TableCellProps, 'content'>>`
  padding: 1rem;
  border-bottom: 1px solid #f3f4f6;
  color: #6b7280;
  text-align: center;

  background-color: ${({ $backgroundColor }) => $backgroundColor || '#f0f0f0'};

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

  /* Disabled state */
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`

export const TableCell = ({
  $size = 'medium',
  $backgroundColor,
  $weight = 'normal',
  content,
  ...props
}: TableCellProps) => {
  return (
    <StyledTableCell
      $size={$size}
      $backgroundColor={$backgroundColor}
      $weight={$weight}
      colSpan={props.colSpan}
      rowSpan={props.rowSpan}
      {...props}
    >
      {content}
    </StyledTableCell>
  )
}
