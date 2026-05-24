import { profile } from '@/data/profile'
import { publications } from '@/data/publications'
import { ProfilePhoto } from '@/components/ProfilePhoto'
import { SocialLinks } from '@/components/SocialLinks'
import { PublicationRow } from '@/components/PublicationRow'

// ── White card block ──────────────────────────────────────────────────────────
function Card({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <div id={id}
      className="bg-white dark:bg-gray-950 rounded-xl shadow-sm
                 border border-gray-200 dark:border-gray-800 p-6 scroll-mt-20">
      {children}
    </div>
  )
}

// ── Card section heading ──────────────────────────────────────────────────────
function CardHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
      {children}
    </h2>
  )
}

// ── Scrollable box (caps height, adds inner scroll) ──────────────────────────
function ScrollBox({ children, maxH = 'max-h-72' }: { children: React.ReactNode; maxH?: string }) {
  return (
    <div className={`${maxH} overflow-y-auto pr-1`}>
      {children}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const p = profile as any   // allows accessing extra fields without TS complaints

  // Group publications by year
  const byYear = publications.reduce<Record<number, typeof publications>>((acc, pub) => {
    ;(acc[pub.year] ??= []).push(pub)
    return acc
  }, {})
  const years = Object.keys(byYear).map(Number).sort((a, b) => b - a)

  return (
    <div className="space-y-4">

      {/* ══════════════════════════════════════════════════════ ABOUT ══
          Compact style — position · institution · advisor · interests · links  */}
      <Card id="about">
        {/* Photo floats top-right */}
        <div className="float-right ml-5 mb-2 hidden sm:block">
          <ProfilePhoto src="/prof_pic.jpg" name={profile.name} />
        </div>

        {/* Name */}
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 leading-snug">
          {profile.name}
        </h1>

        {/* Compact identity rows */}
        <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">

          {/* Position */}
          <div className="flex items-start gap-2">
            <span className="mt-0.5 text-gray-400 shrink-0">🎓</span>
            <span>
              {profile.title}
              {profile.department && <> in <span className="text-gray-700 dark:text-gray-300">{profile.department}</span></>}
            </span>
          </div>

          {/* Institution */}
          <div className="flex items-start gap-2">
            <span className="mt-0.5 text-gray-400 shrink-0">🏛</span>
            <span>
              {p.affiliationUrl ? (
                <a href={p.affiliationUrl} target="_blank" rel="noopener noreferrer"
                   className="font-semibold text-gray-900 dark:text-gray-100
                              hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {profile.affiliation}
                </a>
              ) : (
                <strong className="text-gray-900 dark:text-gray-100">{profile.affiliation}</strong>
              )}
              {p.college && (
                <span className="text-xs text-gray-400 dark:text-gray-500 block">{p.college}</span>
              )}
            </span>
          </div>

          {/* Advisor */}
          {p.advisor?.name && (
            <div className="flex items-start gap-2 pl-6">
              <span className="text-gray-400 shrink-0">↳</span>
              <span>
                Advisor:{' '}
                {p.advisor.url ? (
                  <a href={p.advisor.url} target="_blank" rel="noopener noreferrer"
                     className="text-blue-600 dark:text-blue-400 hover:underline">
                    {p.advisor.name}
                  </a>
                ) : (
                  <span className="text-blue-600 dark:text-blue-400">{p.advisor.name}</span>
                )}
              </span>
            </div>
          )}

          {/* Location */}
          {profile.location && (
            <div className="flex items-start gap-2">
              <span className="mt-0.5 text-gray-400 shrink-0">📍</span>
              <span>{profile.location}</span>
            </div>
          )}
        </div>

        {/* Photo on mobile */}
        <div className="my-4 sm:hidden">
          <ProfilePhoto src="/prof_pic.jpg" name={profile.name} />
        </div>

        {/* Research interests */}
        {profile.interests.length > 0 && (
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium text-gray-800 dark:text-gray-200">Research interests: </span>
            {profile.interests.map((interest, i) => (
              <span key={interest}>
                {i > 0 && i < profile.interests.length - 1 && ', '}
                {i > 0 && i === profile.interests.length - 1 && ', and '}
                <strong className="font-medium text-gray-800 dark:text-gray-200">{interest}</strong>
              </span>
            ))}
          </p>
        )}

        {/* Social links — only filled-in links appear */}
        <SocialLinks className="mt-3" />

        <div className="clear-both" />
      </Card>

      {/* ══════════════════════════════════════════════════════ NEWS ══ */}
      <Card id="news">
        <CardHeading>News</CardHeading>
        {profile.news.length > 0 ? (
          <ScrollBox maxH="max-h-64">
            <ul className="space-y-3">
              {profile.news.map((item: any, i: number) => (
                <li key={i} className="flex gap-4">
                  <span className="shrink-0 text-xs font-mono text-gray-400 dark:text-gray-500 w-20 pt-0.5">
                    {item.date}
                  </span>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.bold && (
                      <strong className="font-semibold text-gray-900 dark:text-gray-100 mr-1">
                        {item.bold}
                      </strong>
                    )}
                    {item.text}
                    {item.link?.href && item.link?.label && (
                      <> <a href={item.link.href} target="_blank" rel="noopener noreferrer"
                           className="text-blue-600 dark:text-blue-400 hover:underline">
                        {item.link.label} →
                      </a></>
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </ScrollBox>
        ) : (
          <p className="text-sm text-gray-400 dark:text-gray-600 italic">
            Add news items in <code>data/profile.ts</code> under <code>news:</code>
          </p>
        )}
      </Card>

      {/* ══════════════════════════════════════════════════ PUBLICATIONS ══ */}
      <Card id="publications">
        <CardHeading>Publications</CardHeading>

        {publications.length > 0 ? (
          <ScrollBox maxH="max-h-[32rem]">
            <div className="space-y-6">
              {years.map(year => (
                <div key={year}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold text-gray-400 dark:text-gray-500">{year}</span>
                    <span className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
                  </div>
                  {byYear[year].map((pub, i) => (
                    <PublicationRow key={i} pub={pub} />
                  ))}
                </div>
              ))}
            </div>
          </ScrollBox>
        ) : (
          <p className="text-sm text-gray-400 dark:text-gray-600 italic">
            Add papers in <code>data/publications.ts</code>
          </p>
        )}
      </Card>

      {/* ══════════════════════════════════════════════════ BIOGRAPHY ══ */}
      <Card id="biography">
        <CardHeading>Biography</CardHeading>
        {p.biography?.length > 0 ? (
          <div className="space-y-5">
            {p.biography.map((entry: any, i: number) => (
              <div key={i}>
                <p className="text-sm">
                  {entry.institutionUrl ? (
                    <a href={entry.institutionUrl} target="_blank" rel="noopener noreferrer"
                       className="font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                      {entry.institution}
                    </a>
                  ) : (
                    <span className="font-semibold text-gray-800 dark:text-gray-200">{entry.institution}</span>
                  )}
                  {entry.period && (
                    <span className="ml-2 text-blue-500 dark:text-blue-400">({entry.period})</span>
                  )}
                </p>
                <ul className="mt-1.5 ml-1 space-y-1">
                  {entry.items.map((item: any, j: number) => (
                    <li key={j} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="text-gray-300 dark:text-gray-600 shrink-0 mt-0.5">•</span>
                      <span>
                        {item.text}
                        {item.link?.label && (
                          item.link.href
                            ? <a href={item.link.href} target="_blank" rel="noopener noreferrer"
                                 className="text-blue-600 dark:text-blue-400 hover:underline">
                                {item.link.label}
                              </a>
                            : <span className="text-blue-600 dark:text-blue-400">{item.link.label}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-400 dark:text-gray-600 italic">
            Add education history in <code>data/profile.ts</code> under <code>biography:</code>
          </p>
        )}
      </Card>

      {/* ══════════════════════════════════════════════════════ AWARDS ══ */}
      <Card id="awards">
        <CardHeading>Awards &amp; Honors</CardHeading>
        {p.awards?.length > 0 ? (
          <ul className="space-y-4">
            {p.awards.map((award: any, i: number) => (
              <li key={i} className="flex gap-3">
                <span className="text-yellow-500 shrink-0 mt-0.5">🏆</span>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {award.link
                      ? <a href={award.link} target="_blank" rel="noopener noreferrer"
                           className="text-blue-600 dark:text-blue-400 hover:underline">{award.title}</a>
                      : award.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 italic">{award.venue}</p>
                  {award.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">{award.description}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-400 dark:text-gray-600 italic">
            Add awards in <code>data/profile.ts</code> under <code>awards:</code>
          </p>
        )}
      </Card>

      {/* ══════════════════════════════════════════════════════ TEACHING ══ */}
      <Card id="teaching">
        <CardHeading>Teaching</CardHeading>
        {p.teaching?.length > 0 ? (
          <div className="space-y-5">
            {p.teaching.map((entry: any, i: number) => (
              <div key={i}>
                {/* Role + period */}
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{entry.role}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 shrink-0">{entry.period}</p>
                </div>
                {/* Institution + location */}
                <p className="text-sm text-gray-500 dark:text-gray-500 italic">
                  {entry.institution}{entry.location && `, ${entry.location}`}
                </p>
                {/* Items */}
                <ul className="mt-1.5 ml-1 space-y-1">
                  {entry.items.map((item: string, j: number) => (
                    <li key={j} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="text-gray-300 dark:text-gray-600 shrink-0 mt-0.5">◦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-400 dark:text-gray-600 italic">
            Add teaching entries in <code>data/profile.ts</code> under <code>teaching:</code>
          </p>
        )}
      </Card>

      {/* ════════════════════════════════════════════════════════ MISC ══ */}
      <Card id="misc">
        <CardHeading>Misc</CardHeading>
        {p.misc?.some((g: any) => g.items.length > 0) ? (
          <ScrollBox maxH="max-h-64">
            <div className="space-y-5">
              {p.misc.filter((g: any) => g.items.length > 0).map((group: any, i: number) => (
                <div key={i}>
                  <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1.5">
                    {group.title}
                  </h3>
                  <ul className="space-y-1">
                    {group.items.map((item: string, j: number) => (
                      <li key={j} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-gray-300 dark:text-gray-600 shrink-0 mt-0.5">–</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollBox>
        ) : (
          <p className="text-sm text-gray-400 dark:text-gray-600 italic">
            Add teaching, service, and talks in <code>data/profile.ts</code> under <code>misc:</code>
          </p>
        )}
      </Card>

    </div>
  )
}
