'use client'
import { useEffect, useState } from 'react'
import { HeroImageComponent as HeroImage } from '../components/HeroImage'
import type { HeroImageProps } from '../components/HeroImage/heroImage.types'

export function HeroImageWithHydration(props: HeroImageProps) {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) {
    // Render a placeholder div matching the expected height to prevent layout shift
    // Adjust styles here to match your Hero's size and layout
    return (
      <div
        style={{
          height: props.height === 'full' ? '100vh' : props.height,
          width: '100%',
          backgroundColor: '#f3f4f6', // Tailwind gray-100 as subtle placeholder
        }}
      />
    )
  }

  return <HeroImage {...props} />
}
