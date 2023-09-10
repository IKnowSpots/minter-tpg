import './globals.css'
import type { Metadata } from 'next'
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "./providers";

import { Inter } from 'next/font/google'
import { Blinker } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] })
const blinker = Blinker({
  subsets: ['latin'],
  weight: ['600'],
})
export const metadata: Metadata = {
  title: 'I Know Spots',
  description: 'Seamless granular events hosting with NFT tickets.  ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={blinker.className}>
        <Providers>
        {children}


        </Providers>
      
      </body>
    </html>
  )
}
