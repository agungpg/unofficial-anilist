import './globals.css'
import { Inter } from 'next/font/google'
import ApolloClientProvider from '@/layouts/ApolloClientProvider';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <body className={inter.className}>
        <ApolloClientProvider>{children}</ApolloClientProvider>
      </body>
    </html>
  )
}
