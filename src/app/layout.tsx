import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import { raleway } from '@/config/fonts'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'

const baseUrl = process.env.APP_URL

export const metadata: Metadata = {
  title: 'Digit NFT',
  description: 'See the NFT new world',
  keywords: ['nft', 'nft landing'],
  metadataBase: baseUrl ? new URL(baseUrl) : null
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='max-w-vw overflow-x-hidden'>
      <body
        className={cn(raleway.className, 'space-y-24 hover:[&_a]:underline')}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
