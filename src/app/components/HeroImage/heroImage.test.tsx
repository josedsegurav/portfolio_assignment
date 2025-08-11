import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { HeroImageComponent } from './heroImage'
import { HeroImageProps } from './heroImage.types'

describe('HeroImageComponent', () => {
  const defaultProps: HeroImageProps = {
    src: 'https://placehold.co/1200x600',
    alt: 'Hero Image Placeholder',
    height: 'medium',
    centered: true,
    testID: 'hero-container',
  }

  it('renders with default props', () => {
    render(<HeroImageComponent {...defaultProps} />)
    const heroImage = screen.getByRole('img')
    expect(heroImage).toBeInTheDocument()
    expect(heroImage).toHaveAttribute('src', defaultProps.src)
    expect(heroImage).toHaveAttribute('alt', defaultProps.alt)
  })

  it('applies correct height styles', () => {
    render(<HeroImageComponent {...defaultProps} height="large" />)
    const heroContainer = screen.getByTestId('hero-container')
    expect(heroContainer).toHaveStyle({ height: 'clamp(600px, 80vh, 800px)' })
  })

  it('centers content when centered is true', () => {
    render(<HeroImageComponent {...defaultProps} centered={true} />)
    const heroContainer = screen.getByTestId('hero-container')
    expect(heroContainer).toHaveStyle({ justifyContent: 'center' })
  })

  it('does not center content when centered is false', () => {
    render(<HeroImageComponent {...defaultProps} centered={false} />)
    const heroContainer = screen.getByTestId('hero-container')
    expect(heroContainer).toHaveStyle({ justifyContent: 'flex-start' })
  })

  it('is disabled when disabled is true', () => {
    render(<HeroImageComponent {...defaultProps} disabled={true} />)
    const heroContainer = screen.getByTestId('hero-container')
    expect(heroContainer).toHaveStyle({
      opacity: '0.5',
      cursor: 'not-allowed',
    })
  })

  it('handles empty src gracefully', () => {
    render(<HeroImageComponent {...defaultProps} src="" />)
    const heroImage = screen.queryByRole('img')
    expect(heroImage).not.toBeInTheDocument()
  })
})
