import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import { raleway } from '@/config/fonts'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'

export const metadata: Metadata = {
  title: 'Digit NFT',
  description: 'See the NFT new world'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='no-scrollbar max-w-vw overflow-x-hidden'>
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
