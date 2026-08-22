import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { profile } from '@/data/profile'

// next/font handles download, subsetting, and self-hosting automatically
// No Google Fonts request is made at runtime — it's baked into the build
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default:  profile.name,
    template: `%s · ${profile.name}`,
  },
  description: `Personal academic website of ${profile.name} — ${profile.title} at ${profile.affiliation}.`,
  keywords: ['research', 'academic', 'publications', 'differential privacy'],
  authors: [{ name: profile.name }],
  openGraph: {
    title: profile.name,
    description: `${profile.title} at ${profile.affiliation}`,
    type: 'website',
    url: 'https://shafizurseeam.com',
  },
  verification: {
    google: 'R0cz2eCEHC2gMUrxql-cuh1QvmtScI-52xB62H8jycI',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-stone-50 dark:bg-stone-950
                       text-stone-800 dark:text-stone-200 font-sans antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 w-full">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
