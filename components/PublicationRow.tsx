import type { Publication } from '@/data/publications'
import { profile } from '@/data/profile'

interface Props {
  pub: Publication
  index?: number
}

export function PublicationRow({ pub }: Props) {
  const authorVariants = profile.authorVariants.map(v => v.toLowerCase())

  return (
    <div className="group py-4 border-b border-gray-100 dark:border-gray-800 last:border-0">

      {/* ── Title line ── */}
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
        {/* If there's a primary link (first link or arXiv), make title a link */}
        {pub.links && pub.links.length > 0 ? (
          <a
            href={pub.links[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.95rem] font-semibold text-blue-600 dark:text-blue-400
                       hover:underline underline-offset-2 leading-snug"
          >
            {pub.title}
          </a>
        ) : (
          <span className="text-[0.95rem] font-semibold text-gray-900 dark:text-gray-100 leading-snug">
            {pub.title}
          </span>
        )}

        {/* Optional release note */}
        {pub.note && (
          <span className="text-sm text-gray-500 dark:text-gray-400 italic">
            {pub.note}
          </span>
        )}


      </div>

      {/* ── Badge / pill links ── */}
      {pub.links && pub.links.length > 0 && (
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {pub.links.map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded
                         border border-gray-300 dark:border-gray-600
                         text-gray-600 dark:text-gray-400
                         hover:border-blue-400 dark:hover:border-blue-500
                         hover:text-blue-600 dark:hover:text-blue-400
                         transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* ── Authors ── */}
      <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-400">
        {pub.authors.map((author, i) => {
          const isMe = authorVariants.includes(author.toLowerCase())
          return (
            <span key={i}>
              {i > 0 && ', '}
              <span className={isMe ? 'font-semibold text-gray-900 dark:text-gray-200' : ''}>
                {author}
              </span>
            </span>
          )
        })}
      </p>

      {/* ── Venue ── */}
      <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-500">
        <span className="font-semibold text-gray-700 dark:text-gray-300">{pub.venue}:</span>
        {pub.venueFull && <span className="ml-1 italic">{pub.venueFull}</span>}
        {/* Award badge inline after venue */}
        {(pub as any).award && (
          <span className="ml-2 text-yellow-600 dark:text-yellow-400 text-xs font-medium not-italic">
            ✦ {(pub as any).award}
          </span>
        )}
      </p>
    </div>
  )
}
