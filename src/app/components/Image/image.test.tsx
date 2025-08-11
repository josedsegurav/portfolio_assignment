import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Image } from './image'
import { ImageProps } from './image.types'

describe('Image Component', () => {
  const defaultProps: ImageProps = {
    src: 'https://placehold.co/600x400',
    alt: 'Placeholder Image',
    width: 150,
    height: 150,
    objectFit: 'cover',
    rounded: false,
    shadow: false,
    disabled: false,
  }

  it('renders with default props', () => {
    render(<Image {...defaultProps} alt={defaultProps.alt} />)
    const img = screen.getByRole('img')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', defaultProps.src)
    expect(img).toHaveAttribute('alt', defaultProps.alt)
  })

  it('applies custom width and height', () => {
    render(
      <Image
        {...defaultProps}
        width={300}
        height={200}
        alt={defaultProps.alt}
      />,
    )
    const img = screen.getByRole('img')
    expect(img).toHaveStyle({ width: '300px', height: '200px' })
  })

  it('applies object-fit styles correctly', () => {
    render(
      <Image {...defaultProps} objectFit="contain" alt={defaultProps.alt} />,
    )
    const img = screen.getByRole('img')
    expect(img).toHaveStyle({ objectFit: 'contain' })
  })

  it('applies rounded corners when rounded is true', () => {
    render(<Image {...defaultProps} rounded alt={defaultProps.alt} />)
    const img = screen.getByRole('img')
    expect(img).toHaveStyle({ borderRadius: '8px' })
  })

  it('applies shadow when shadow is true', () => {
    render(<Image {...defaultProps} shadow alt={defaultProps.alt} />)
    const img = screen.getByRole('img')
    expect(img).toHaveStyle({ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' })
  })

  it('applies disabled styles when disabled is true', () => {
    render(<Image {...defaultProps} disabled alt={defaultProps.alt} />)
    const img = screen.getByRole('img')
    expect(img).toHaveStyle({ opacity: '0.5', cursor: 'not-allowed' })
  })
})
