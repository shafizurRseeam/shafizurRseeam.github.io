import type { Publication } from '@/data/publications'
import { profile } from '@/data/profile'

interface Props {
  pub: Publication
  index?: number
}

export function PublicationRow({ pub }: Props) {
  const authorVariants = profile.authorVariants.map(v => v.toLowerCase())

  return (
    <div className="group py-4 border-b border-dashed border-stone-200 dark:border-stone-800 last:border-0">

      {/* ── Title line — Code/Slides flow inline right after the text, using leftover space ──
           Plain inline flow (not flex) so these sit at the end of the wrapped title text
           instead of being pushed to a whole new line. ── */}
      <p className="leading-snug">
        {pub.href ? (
          <a
            href={pub.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-accent-700 dark:text-accent-400
                       hover:underline underline-offset-2 transition-colors"
          >
            {pub.title}
          </a>
        ) : (
          <span className="text-lg font-semibold text-stone-900 dark:text-stone-100">
            {pub.title}
          </span>
        )}

        {pub.note && (
          <span className="ml-2 text-sm text-stone-500 dark:text-stone-400 italic">
            {pub.note}
          </span>
        )}

        {pub.code && (
          <a
            href={pub.code}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-block align-middle px-3 py-1 text-xs font-semibold rounded-full
                       bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300
                       hover:bg-accent-100 dark:hover:bg-accent-900/40
                       hover:text-accent-700 dark:hover:text-accent-400
                       transition-colors"
          >
            Code
          </a>
        )}
        {pub.slides && (
          <a
            href={pub.slides}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-block align-middle px-3 py-1 text-xs font-semibold rounded-full
                       bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300
                       hover:bg-accent-100 dark:hover:bg-accent-900/40
                       hover:text-accent-700 dark:hover:text-accent-400
                       transition-colors"
          >
            Slides
          </a>
        )}
      </p>

      {/* ── Authors ── */}
      <p className="mt-1.5 text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
        {pub.authors.map((author, i) => {
          const isMe = authorVariants.includes(author.toLowerCase())
          return (
            <span key={i}>
              {i > 0 && ', '}
              <span className={isMe ? 'font-semibold text-stone-800 dark:text-stone-200' : ''}>
                {author}
              </span>
            </span>
          )
        })}
      </p>

      {/* ── Venue — pill flows inline with the description, wraps naturally ── */}
      {(pub.venue || pub.award) && (
        <p className="mt-1 text-sm text-stone-500 dark:text-stone-500 leading-relaxed">
          {pub.venue && (
            <span className="inline-block align-middle mr-2 text-xs font-semibold px-2.5 py-1 rounded-full
                             bg-accent-50 dark:bg-accent-950/40 text-accent-700 dark:text-accent-400">
              {pub.venue}
            </span>
          )}
          {pub.venueFull}
          {pub.award && (
            <span className="ml-1.5 text-amber-600 dark:text-amber-400 text-xs font-semibold">
              ✦ {pub.award}
            </span>
          )}
        </p>
      )}
    </div>
  )
}
