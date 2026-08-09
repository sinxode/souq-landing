import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '@/constants/site';
import { ClarityAnalytics } from '@/components/analytics/clarity';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'SOUQ — Curated Commerce & Premium Marketplace',
    template: '%s | SOUQ',
  },
  description: SITE_CONFIG.description,
  keywords: [
    'SOUQ',
    'SOUQ online',
    'premium marketplace',
    'curated commerce',
    'verified local business',
    'luxury shopping India',
    'exclusive waitlist',
  ],
  authors: [{ name: 'SOUQ Online', url: SITE_CONFIG.domain }],
  metadataBase: new URL(SITE_CONFIG.domain),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.domain,
    title: 'SOUQ — Curated Commerce & Premium Marketplace',
    description: 'Connecting discerning patrons with India’s finest verified businesses. Request inaugural cohort access.',
    siteName: 'SOUQ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SOUQ — Curated Commerce. Uncompromising Quality.',
    description: 'An upcoming marketplace for verified businesses and discerning patrons. Request early access.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}>
      <body className="bg-[#050505] text-[#F4F4F6] font-sans antialiased selection:bg-white/20 selection:text-white overflow-x-hidden">
        <ClarityAnalytics />
        {children}
      </body>
    </html>
  );
}
