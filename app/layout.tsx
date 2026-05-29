import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { profile } from '@/data/profile'

// next/font handles download, subsetting, and self-hosting automatically
// No Google Fonts request is made at runtime — it's baked into the build
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
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
    <html lang="en" className={dmSans.variable} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900
                       text-gray-900 dark:text-gray-100 font-sans antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-8">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
