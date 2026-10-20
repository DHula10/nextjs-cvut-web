import type { Metadata, Viewport } from 'next'
import './styles/globals.css'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.transfer.cvut.cz';

// SEO Metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Transfer Technologií ČVUT | Inovace a výzkum',
    template: '%s | Transfer Technologií ČVUT'
  },
  description: 'Transfer Technologií ČVUT spojuje vědecký výzkum s praktickými aplikacemi. Specializujeme se na přenos technologií z univerzitního prostředí do praxe a podporu inovací.',
  keywords: [
    'transfer technologií',
    'ČVUT',
    'inovace',
    'výzkum',
    'věda',
    'technologie',
    'univerzita',
    'startup',
    'spin-off',
    'intelektuální vlastnictví',
    'patent',
    'licence'
  ],
  authors: [{ name: 'Transfer Technologií ČVUT' }],
  creator: 'Transfer Technologií ČVUT',
  publisher: 'České vysoké učení technické v Praze',
  
  // Open Graph metadata
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    siteName: 'Transfer Technologií ČVUT',
    title: 'Transfer Technologií ČVUT | Inovace a výzkum',
    description: 'Spojujeme vědecký výzkum s praktickými aplikacemi. Specializujeme se na přenos technologií z univerzitního prostředí do praxe.',
    images: [
      {
        url: '/images/og-image.png', // You can create this later
        width: 1200,
        height: 630,
        alt: 'Transfer Technologií ČVUT',
      }
    ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Transfer Technologií ČVUT | Inovace a výzkum',
    description: 'Spojujeme vědecký výzkum s praktickými aplikacemi. Specializujeme se na přenos technologií z univerzitního prostředí do praxe.',
    images: ['/images/og-image.png'],
  },
  
  // Additional metadata
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <head>
        {/* Additional SEO tags */}
        <link rel="canonical" href={siteUrl} />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        
        {/* Manifest for PWA capabilities */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Additional meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Transfer Technologií ČVUT",
              "alternateName": "ČVUT Technology Transfer",
              "description": "Transfer Technologií ČVUT spojuje vědecký výzkum s praktickými aplikacemi.",
              "url": siteUrl,
              "logo": `${siteUrl}/logos/Logo.svg`,
              "parentOrganization": {
                "@type": "EducationalOrganization",
                "name": "České vysoké učení technické v Praze",
                "url": "https://www.cvut.cz"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "areaServed": "CZ",
                "availableLanguage": "Czech"
              }
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}