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

      {/* ── Title line ── */}
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
        {pub.href ? (
          <a
            href={pub.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold leading-snug text-accent-700 dark:text-accent-400
                       hover:underline underline-offset-2 transition-colors"
          >
            {pub.title}
          </a>
        ) : (
          <span className="text-lg font-semibold leading-snug text-stone-900 dark:text-stone-100">
            {pub.title}
          </span>
        )}

        {pub.note && (
          <span className="text-sm text-stone-500 dark:text-stone-400 italic">
            {pub.note}
          </span>
        )}
      </div>

      {/* ── Authors ── */}
      <p className="mt-1 text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
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

      {/* ── Venue ── */}
      {(pub.venue || pub.award) && (
        <p className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-stone-500 dark:text-stone-500">
          {pub.venue && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full
                             bg-accent-50 dark:bg-accent-950/40 text-accent-700 dark:text-accent-400">
              {pub.venue}
            </span>
          )}
          {pub.venueFull && <span>{pub.venueFull}</span>}
          {pub.award && (
            <span className="text-amber-600 dark:text-amber-400 text-xs font-semibold">
              ✦ {pub.award}
            </span>
          )}
        </p>
      )}

      {/* ── Code / Slides buttons ── */}
      {(pub.code || pub.slides) && (
        <div className="mt-2.5 flex flex-wrap gap-2">
          {pub.code && (
            <a
              href={pub.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full
                         bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300
                         hover:bg-accent-100 dark:hover:bg-accent-900/40
                         hover:text-accent-700 dark:hover:text-accent-400
                         transition-colors"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
                     0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
                     -.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832
                     .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688
                     -.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115
                     2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595
                     1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012
                     2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              Code
            </a>
          )}
          {pub.slides && (
            <a
              href={pub.slides}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full
                         bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300
                         hover:bg-accent-100 dark:hover:bg-accent-900/40
                         hover:text-accent-700 dark:hover:text-accent-400
                         transition-colors"
            >
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 5h16M4 12h16M4 19h10" />
              </svg>
              Slides
            </a>
          )}
        </div>
      )}
    </div>
  )
}
