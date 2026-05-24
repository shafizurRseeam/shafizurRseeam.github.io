'use client'

import { useState } from 'react'
import type { Publication } from '@/data/publications'
import { profile } from '@/data/profile'

interface Props {
  pub: Publication
}

function Badge({ children, color = 'gray' }: { children: React.ReactNode; color?: string }) {
  const colors: Record<string, string> = {
    gray:   'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
    blue:   'bg-blue-50  text-blue-700  dark:bg-blue-950/50 dark:text-blue-300',
    yellow: 'bg-yellow-50 text-yellow-700 dark:bg-yellow-950/50 dark:text-yellow-300',
  }
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${colors[color]}`}>
      {children}
    </span>
  )
}

export function PublicationCard({ pub }: Props) {
  const [expanded, setExpanded] = useState(false)

  // Bold the user's own name in the author list
  const authorVariants = profile.authorVariants.map(v => v.toLowerCase())

  return (
    <article className={`group relative rounded-xl border transition-all
      ${pub.highlight
        ? 'border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/10'
        : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40'
      }
      hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md p-5`}>

      {/* Highlight star */}
      {pub.highlight && (
        <span className="absolute top-4 right-4 text-blue-400 dark:text-blue-500" title="Selected paper">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969
                     0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54
                     1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1
                     1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </span>
      )}

      {/* Title */}
      <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 leading-snug pr-8">
        {pub.title}
      </h3>

      {/* Authors */}
      <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-400">
        {pub.authors.map((author, i) => {
          const isMe = authorVariants.includes(author.toLowerCase())
          return (
            <span key={i}>
              {i > 0 && ', '}
              <span className={isMe ? 'font-semibold text-gray-900 dark:text-gray-100' : ''}>
                {author}
              </span>
            </span>
          )
        })}
      </p>

      {/* Venue + award */}
      <div className="mt-1.5 flex flex-wrap items-center gap-2">
        <span className="text-sm italic text-gray-500 dark:text-gray-400">{pub.venue}</span>
        {pub.award && <Badge color="yellow">🏆 {pub.award}</Badge>}
      </div>

      {/* Action links */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {pub.arxiv && (
          <a href={pub.arxiv} target="_blank" rel="noopener noreferrer">
            <Badge color="blue">arXiv</Badge>
          </a>
        )}
        {pub.pdf && (
          <a href={pub.pdf} target="_blank" rel="noopener noreferrer">
            <Badge color="gray">PDF</Badge>
          </a>
        )}
        {pub.code && (
          <a href={pub.code} target="_blank" rel="noopener noreferrer">
            <Badge color="gray">Code</Badge>
          </a>
        )}
        {pub.project && (
          <a href={pub.project} target="_blank" rel="noopener noreferrer">
            <Badge color="gray">Project Page</Badge>
          </a>
        )}
        {pub.abstract && (
          <button onClick={() => setExpanded(e => !e)}
            className="text-xs text-blue-600 dark:text-blue-400 hover:underline transition-colors">
            {expanded ? 'Hide abstract ↑' : 'Abstract ↓'}
          </button>
        )}
      </div>

      {/* Abstract (collapsible) */}
      {expanded && pub.abstract && (
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed
                      border-t border-gray-200 dark:border-gray-700 pt-3">
          {pub.abstract}
        </p>
      )}
    </article>
  )
}
