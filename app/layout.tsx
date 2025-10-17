import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navigation } from '@/components/Navigation'
import { FloatingDownloadButton } from '@/components/DownloadResumeButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'W.G.M. Welikumbura - Mechanical & Process Engineer',
  description: 'Professional portfolio of W.G.M. Welikumbura, showcasing expertise in mechanical design, process engineering, industrial automation, and maintenance.',
  keywords: 'mechanical engineer, process engineer, industrial automation, maintenance, product design, CAD, engineering portfolio',
  authors: [{ name: 'W.G.M. Welikumbura' }],
  openGraph: {
    title: 'W.G.M. Welikumbura - Mechanical & Process Engineer',
    description: 'Professional portfolio showcasing mechanical design, process engineering, and industrial automation expertise.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <FloatingDownloadButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
