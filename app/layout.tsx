import Navbar from '@/layout/navbar';
import ProfilePic from '@/ui/profile-pic';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './layout/footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '700'],
});

import { ME } from '@/data';

export const metadata: Metadata = {
  metadataBase: new URL('https://dito-hafizh.github.io'),
  title: {
    default: `${ME.name} | ${ME.profession}`,
    template: `%s | ${ME.name}`,
  },
  description: ME.description,
  keywords: [
    'Software Engineer',
    'Mobile Developer',
    'Backend Engineer',
    'Kotlin',
    'Java',
    'Flutter',
    'Golang',
    'Elixir',
    'GCP',
    'AWS',
    'Data Mining',
    'Surabaya',
    'Indonesia',
  ],
  authors: [{ name: ME.name, url: ME.github }],
  creator: ME.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dito-hafizh.github.io',
    title: `${ME.name} | ${ME.profession}`,
    description: ME.description,
    siteName: `${ME.name} Portfolio`,
    images: [
      {
        url: '/image_metadata.webp',
        width: 1200,
        height: 630,
        alt: `${ME.name} - ${ME.profession}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${ME.name} | ${ME.profession}`,
    description: ME.description,
    images: ['/image_metadata.webp'],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} items-center justify-center antialiased`}
      >
        <Navbar />
        <div className="mt-section md:mt-section-md px-content-sm mx-auto w-full md:w-9/10 md:px-0">
          {/* Navbar placeholder removed */}
          <div className="p-desktop flex flex-col items-center justify-center md:hidden">
            <ProfilePic
              className="h-40 w-40 rounded-full object-contain"
              width={160}
              height={160}
            />
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
