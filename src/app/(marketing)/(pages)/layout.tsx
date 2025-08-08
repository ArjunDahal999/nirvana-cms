import React from 'react'
import Navbar from '../_components/navbar'
import Footer from '../_components/footer'
import '@/app/global.css' // Ensure global styles are imported

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { siteConfig, webPageSchemaOrg } from '../_config/seo.config'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Nirvana Physiotherapy and Wellness Center',
    template: `%s | NPWC`,
  },
  description:
    'Nirvana Physiotherapy and Wellness Center offers a range of services including physiotherapy, rehabilitation, and holistic wellness programs. We are dedicated to helping you achieve optimal health and well-being.',
  keywords: [
    'Nirvana Physiotherapy',
    'Wellness Center',
    'Kathmandu Physiotherapy',
    'Physical Therapy Nepal',
    'Rehabilitation Center',
    'Sports Injury',
    'Pain Management',
    'Holistic Health',
    'Wellness Programs',
    'Physiotherapy in Nepal',
  ],
  authors: [
    {
      name: 'Nirvana Physiotherapy and Wellness Center',
      url: '${siteConfig.url}',
    },
  ],
  creator: 'Nirvana Physiotherapy and Wellness Center',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteConfig.url}`,
    title: 'Nirvana Physiotherapy and Wellness Center',
    description:
      'Nirvana Physiotherapy and Wellness Center offers a range of services including physiotherapy, rehabilitation, and holistic wellness programs. We are dedicated to helping you achieve optimal health and well-being.',
    siteName: 'Nirvana Physiotherapy and Wellness Center',
    images: [
      {
        url: `${siteConfig.url}/opengraph-image.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Nirvana Physiotherapy and Wellness Center',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nirvana Physiotherapy and Wellness Center',
    description:
      'Nirvana Physiotherapy and Wellness Center offers a range of services including physiotherapy, rehabilitation, and holistic wellness programs. We are dedicated to helping you achieve optimal health and well-being.',
    images: [`${siteConfig.url}/opengraph-image.jpeg`],
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: 'index, follow',
  alternates: {
    canonical: `${siteConfig.url}`,
  },
  publisher: 'Nirvana Physiotherapy and Wellness Center',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webPageSchemaOrg).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`} suppressHydrationWarning={true}>
        <Navbar />
        <main className=" bg-gradient-to-b from-primary/10 to-gray-50">
          <div className="pt-20">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  )
}
