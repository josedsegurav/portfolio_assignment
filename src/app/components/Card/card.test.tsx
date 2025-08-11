import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { CardComponent } from './card'
import { CardContentProps } from './card.types'

describe('CardComponent', () => {
  const defaultProps: CardContentProps = {
    src: 'https://placehold.co/300x200',
    alt: 'Card Image Placeholder',
    title: 'Card Title',
    description: 'This is a description of the card.',
    footer: 'Card Footer',
    shadow: 'medium',
    hover: true,
    disabled: false,
    testID: 'card-container',
  }

  it('renders with default props', () => {
    render(<CardComponent {...defaultProps} />)
    const cardImage = screen.getByRole('img')
    expect(cardImage).toBeInTheDocument()
    expect(cardImage).toHaveAttribute('src', defaultProps.src)
    expect(cardImage).toHaveAttribute('alt', defaultProps.alt)
  })

  it('displays title, description, and footer', () => {
    render(<CardComponent {...defaultProps} />)
    expect(screen.getByText(defaultProps.title!)).toBeInTheDocument()
    expect(screen.getByText(defaultProps.description!)).toBeInTheDocument()
    expect(screen.getByText(defaultProps.footer!)).toBeInTheDocument()
  })

  it('applies shadow styles based on shadow prop', () => {
    render(<CardComponent {...defaultProps} shadow="large" />)
    const card = screen.getByTestId('card-container')
    expect(card).toHaveStyle({ boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)' })
  })

  it('applies hover styles when hover is true', () => {
    render(<CardComponent {...defaultProps} hover={true} />)
    const card = screen.getByTestId('card-container')
    expect(card).toHaveStyle({ transition: 'box-shadow 0.3s ease' })
  })

  it('is disabled when disabled is true', () => {
    render(<CardComponent {...defaultProps} disabled={true} />)
    const card = screen.getByTestId('card-container')
    expect(card).toHaveStyle({ opacity: '0.5', cursor: 'not-allowed' })
  })

  it('handles empty src gracefully', () => {
    render(<CardComponent {...defaultProps} src="" />)
    const cardImage = screen.queryByRole('img')
    expect(cardImage).not.toBeInTheDocument()
  })
})
