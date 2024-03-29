import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Girma Atlabachew',
  description: 'Girma Atlabachew - Sanitary and Mechanical Contractor',
  openGraph: {
    title: 'Girma Atlabachew',
    description: 'Girma Atlabachew - Sanitary and Mechanical Contractor',
    url: 'https://ebc.vercel.app/cards/girma',
    type: 'website',
    images: [
      {
        url: '/girma/images/seo-image/second-image.png',
        width: 1200,
        height: 630,
        alt: 'Girma Atlabachew - Sanitary and Mechanical Contractor'
      }
    ]
  }
}

export default function GirmaLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <link rel="icon" href="/girma/images/logo/logo.png" sizes="any" />
      <div>
        {children}
      </div>
    </>
  )
}
