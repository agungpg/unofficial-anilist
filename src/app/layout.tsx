import { Inter } from 'next/font/google'
import Head from 'next/head'

import './globals.css'

import LayoutProvider from './LayoutProvider'

const inter = Inter({ subsets: ['latin'] })
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Unofficial Anilist',
  description: 'Anime List',
  manifest: '/manifest.json',
  themeColor: '#fff',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Head>
        <link
          rel='icon'
          href='/icon.png'
        />
        <link
          rel='manifest'
          href='/manifest.json'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <meta
          name='theme-color'
          content='#ffffff'
        />
        <title>UNOFFICIAL ANILIST</title>
      </Head>
      <body className={inter.className}>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  )
}
