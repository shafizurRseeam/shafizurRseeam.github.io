import type { Metadata } from 'next'
import { publications } from '@/data/publications'
import { PublicationCard } from '@/components/PublicationCard'

export const metadata: Metadata = {
  title: 'Publications',
}

export default function PublicationsPage() {
  // Group publications by year, descending
  const byYear = publications.reduce<Record<number, typeof publications>>((acc, pub) => {
    ;(acc[pub.year] ??= []).push(pub)
    return acc
  }, {})

  const years = Object.keys(byYear)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
          Publications
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          {publications.length} paper{publications.length !== 1 ? 's' : ''} total.
          {' '}Authors marked in <strong className="text-gray-700 dark:text-gray-300">bold</strong> are me.
        </p>
      </div>

      {/* Papers grouped by year */}
      {years.map(year => (
        <section key={year}>
          <h2 className="text-lg font-semibold text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-3">
            {year}
            <span className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
          </h2>
          <div className="space-y-4">
            {byYear[year].map((pub, i) => (
              <PublicationCard key={i} pub={pub} />
            ))}
          </div>
        </section>
      ))}

      {publications.length === 0 && (
        <div className="text-center py-20 text-gray-400 dark:text-gray-600">
          <p className="text-4xl mb-3">📄</p>
          <p>No publications yet. Add yours in <code className="text-sm">data/publications.ts</code>.</p>
        </div>
      )}
    </div>
  )
}
