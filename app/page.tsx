import { profile } from '@/data/profile'
import { publications } from '@/data/publications'
import { ProfilePhoto } from '@/components/ProfilePhoto'
import { SocialLinks } from '@/components/SocialLinks'
import { PublicationRow } from '@/components/PublicationRow'

// ── Raised card block ─────────────────────────────────────────────────────────
function Card({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <div id={id}
      className="bg-white dark:bg-stone-900 rounded-2xl
                 border border-stone-200 dark:border-stone-800
                 shadow-sm p-6 sm:p-8 scroll-mt-20">
      {children}
    </div>
  )
}

// ── Card section heading: serif title + full-width rule ───────────────────────
function CardHeading({ children, note }: { children: React.ReactNode; note?: string }) {
  return (
    <div className="mb-6">
      <h2 className="font-serif text-[1.6rem] text-stone-900 dark:text-stone-50">
        {children}
        {note && (
          <span className="ml-2 text-sm font-sans font-normal text-stone-400 dark:text-stone-500">
            {note}
          </span>
        )}
      </h2>
      <div className="mt-3 h-px bg-stone-200 dark:bg-stone-800" />
    </div>
  )
}

function Empty({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-stone-400 dark:text-stone-600 italic">{children}</p>
}

// ─────────────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const p = profile as any   // allows accessing extra fields without TS complaints

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 sm:py-14 space-y-6">

      {/* ══════════════════════════════════════════════════════ ABOUT ══ */}
      <Card id="about">
        <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start sm:justify-between gap-6">
          <div className="flex-1 min-w-0 text-center sm:text-left">
            <h1 className="font-serif text-3xl sm:text-4xl text-stone-900 dark:text-stone-50 leading-tight tracking-tight">
              {profile.name}
            </h1>
            <p className="mt-2 text-base font-bold text-accent-700 dark:text-accent-400 tracking-wide">
              {profile.title}{profile.department && ` · ${profile.department}`}
            </p>
            <p className="mt-3 text-base text-stone-500 dark:text-stone-400">
              {profile.affiliation && (
                p.affiliationUrl ? (
                  <a href={p.affiliationUrl} target="_blank" rel="noopener noreferrer"
                     className="font-semibold text-stone-700 dark:text-stone-300 hover:text-accent-700 dark:hover:text-accent-400 transition-colors">
                    {profile.affiliation}
                  </a>
                ) : profile.affiliation
              )}
              {profile.location && <span> · {profile.location}</span>}
            </p>

            <SocialLinks className="mt-5 justify-center sm:justify-start" />
          </div>

          <ProfilePhoto src="/prof_pic.jpg" name={profile.name} />
        </div>

        {/* Research interests — full card width so it doesn't compete with the photo */}
        {p.interests?.length > 0 && (
          <div className="mt-5 flex flex-wrap items-center gap-1.5">
            <span className="text-[15px] font-semibold text-stone-700 dark:text-stone-300 mr-0.5">
              Research interests:
            </span>
            {p.interests.map((interest: string) => (
              <span key={interest}
                className="text-xs font-semibold px-2.5 py-1 rounded-full
                           bg-accent-50 dark:bg-accent-950/40 text-accent-700 dark:text-accent-400">
                {interest}
              </span>
            ))}
          </div>
        )}

        {/* Education */}
        {p.biography?.length > 0 && (
          <div className="mt-10">
            <p className="text-xs font-bold uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-4">
              Education
            </p>
            <div>
              {p.biography.map((entry: any, i: number) => (
                <div key={i}
                  className="py-3.5 border-b border-dashed border-stone-200 dark:border-stone-800 last:border-0
                             flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-4 gap-y-0.5">
                  <div>
                    <p className="font-bold text-[15px] text-stone-900 dark:text-stone-100">{entry.degree}</p>
                    <p className="text-sm text-stone-500 dark:text-stone-400">
                      {entry.institutionUrl ? (
                        <a href={entry.institutionUrl} target="_blank" rel="noopener noreferrer"
                           className="font-medium hover:text-accent-700 dark:hover:text-accent-400 transition-colors">
                          {entry.institution}
                        </a>
                      ) : <span className="font-medium">{entry.institution}</span>}
                      {entry.advisor?.label && (
                        <span>
                          {' '}· Advisor:{' '}
                          <a href={entry.advisor.href} target="_blank" rel="noopener noreferrer"
                             className="text-accent-700 dark:text-accent-400 font-medium hover:underline">
                            {entry.advisor.label}
                          </a>
                        </span>
                      )}
                    </p>
                    {entry.dissertation && (
                      <p className="mt-0.5 text-sm text-stone-500 dark:text-stone-500 italic">
                        Dissertation: “{entry.dissertation}”
                      </p>
                    )}
                  </div>
                  {entry.period && (
                    <span className="text-sm text-stone-400 dark:text-stone-500 shrink-0 font-mono">{entry.period}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </Card>

      {/* ══════════════════════════════════════════════════════════ NEWS ══ */}
      <Card id="news">
        <CardHeading>News</CardHeading>
        {profile.news.length > 0 ? (
          <div className="max-h-64 overflow-y-auto pr-1 -mr-1">
            {profile.news.map((item: any, i: number) => (
              <div key={i}
                className="py-3.5 border-b border-dashed border-stone-200 dark:border-stone-800 last:border-0
                           flex flex-col sm:flex-row gap-1 sm:gap-4">
                <span className="shrink-0 text-xs font-bold font-mono text-stone-400 dark:text-stone-500 sm:w-20 sm:pt-0.5">
                  {item.date}
                </span>
                <p className="text-[15px] text-stone-600 dark:text-stone-400 leading-relaxed">
                  {item.bold && (
                    <strong className="font-bold text-stone-900 dark:text-stone-100">{item.bold} </strong>
                  )}
                  {item.text}
                  {item.link?.href && item.link?.label && (
                    <> <a href={item.link.href} target="_blank" rel="noopener noreferrer"
                         className="font-semibold text-accent-700 dark:text-accent-400 hover:underline underline-offset-2">
                      {item.link.label} →
                    </a></>
                  )}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <Empty>Add news items in <code>data/profile.ts</code> under <code>news:</code></Empty>
        )}
      </Card>

      {/* ══════════════════════════════════════════════════════ PUBLICATIONS ══ */}
      <Card id="publications">
        <CardHeading>Publications</CardHeading>

        {publications.length > 0 ? (
          <div>
            {publications.map((pub, i) => (
              <PublicationRow key={i} pub={pub} />
            ))}
          </div>
        ) : (
          <Empty>Add papers in <code>data/publications.ts</code></Empty>
        )}
      </Card>

      {/* ══════════════════════════════════════════════════════════ RESEARCH ══ */}
      <Card id="research">
        <CardHeading>Research Experience</CardHeading>
        {p.research?.length > 0 ? (
          <div className="space-y-6">
            {p.research.map((entry: any, i: number) => (
              <div key={i}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                  <p className="font-bold text-[15px] text-stone-900 dark:text-stone-100">{entry.role}</p>
                  <p className="text-sm text-stone-400 dark:text-stone-500 shrink-0 font-mono">{entry.period}</p>
                </div>
                <p className="text-sm text-stone-500 dark:text-stone-500">
                  <span className="font-medium">{entry.institution}</span>
                  {entry.advisor?.label && (
                    <span>
                      {' '}· Advisor:{' '}
                      <a href={entry.advisor.href} target="_blank" rel="noopener noreferrer"
                         className="text-accent-700 dark:text-accent-400 font-medium hover:underline">
                        {entry.advisor.label}
                      </a>
                    </span>
                  )}
                </p>
                <ul className="mt-2.5 space-y-2 list-disc list-outside pl-5 marker:text-accent-500">
                  {entry.items.map((item: any, j: number) => (
                    <li key={j} className="text-[15px] text-stone-600 dark:text-stone-400 leading-relaxed">
                      <span className="font-bold text-stone-800 dark:text-stone-200">{item.label}: </span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <Empty>Add research experience in <code>data/profile.ts</code> under <code>research:</code></Empty>
        )}
      </Card>

      {/* ══════════════════════════════════════════════════════════ TEACHING ══ */}
      <Card id="teaching">
        <CardHeading>Teaching</CardHeading>
        {p.teaching?.length > 0 ? (
          <div className="space-y-7">
            {p.teaching.map((entry: any, i: number) => (
              <div key={i}>
                {/* Role + period */}
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                  <p className="font-bold text-[15px] text-stone-900 dark:text-stone-100">
                    {entry.role}
                    {entry.upcoming && (
                      <span className="ml-2 align-middle text-[0.65rem] font-bold uppercase tracking-wider
                                       text-accent-700 dark:text-accent-400 bg-accent-50 dark:bg-accent-950/40
                                       px-1.5 py-0.5 rounded">
                        Upcoming
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-stone-400 dark:text-stone-500 shrink-0 font-mono">{entry.period}</p>
                </div>
                {/* Institution + location */}
                <p className="text-sm text-stone-500 dark:text-stone-500 italic">
                  {entry.institution}{entry.location && `, ${entry.location}`}
                </p>
                {/* Items */}
                <ul className="mt-2 space-y-1.5 list-disc list-outside pl-5 marker:text-accent-500">
                  {entry.items.map((item: string, j: number) => (
                    <li key={j} className="text-[15px] text-stone-600 dark:text-stone-400 leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <Empty>Add teaching entries in <code>data/profile.ts</code> under <code>teaching:</code></Empty>
        )}
      </Card>

      {/* ═══════════════════════════════════════════════════════ PROFESSIONAL ══ */}
      <Card id="professional">
        <CardHeading>Professional Experience</CardHeading>
        {p.professional?.length > 0 ? (
          <div className="space-y-7">
            {p.professional.map((entry: any, i: number) => (
              <div key={i}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                  <p className="font-bold text-[15px] text-stone-900 dark:text-stone-100">{entry.role}</p>
                  <p className="text-sm text-stone-400 dark:text-stone-500 shrink-0 font-mono">{entry.period}</p>
                </div>
                <p className="text-sm text-stone-500 dark:text-stone-500 italic">
                  {entry.institutionUrl ? (
                    <a href={entry.institutionUrl} target="_blank" rel="noopener noreferrer"
                       className="not-italic font-medium hover:text-accent-700 dark:hover:text-accent-400 transition-colors">
                      {entry.institution}
                    </a>
                  ) : entry.institution}
                  {entry.location && `, ${entry.location}`}
                </p>
                {entry.items?.length > 0 && (
                  <ul className="mt-2 space-y-1.5 list-disc list-outside pl-5 marker:text-accent-500">
                    {entry.items.map((item: string, j: number) => (
                      <li key={j} className="text-[15px] text-stone-600 dark:text-stone-400 leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ) : (
          <Empty>Add professional experience in <code>data/profile.ts</code> under <code>professional:</code></Empty>
        )}
      </Card>

      {/* ══════════════════════════════════════════════════════════ AWARDS ══ */}
      <Card id="awards">
        <CardHeading>Awards</CardHeading>
        {p.awards?.length > 0 ? (
          <div>
            {p.awards.map((award: any, i: number) => (
              <div key={i} className="py-2 border-b border-dashed border-stone-200 dark:border-stone-800 last:border-0">
                <p className="flex items-baseline gap-2 text-[15px] text-stone-800 dark:text-stone-200">
                  <span className="text-amber-500 shrink-0">✦</span>
                  <span>
                    <span className="font-bold text-stone-900 dark:text-stone-100">
                      {award.link
                        ? <a href={award.link} target="_blank" rel="noopener noreferrer"
                             className="hover:text-accent-700 dark:hover:text-accent-400 transition-colors">{award.title}</a>
                        : award.title}
                    </span>
                    {award.venue && <span className="text-stone-500 dark:text-stone-400">, {award.venue}</span>}
                  </span>
                </p>
                {award.description && (
                  <p className="ml-5 text-sm text-stone-500 dark:text-stone-400 mt-0.5">{award.description}</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <Empty>Add awards in <code>data/profile.ts</code> under <code>awards:</code></Empty>
        )}
      </Card>

      {/* ══════════════════════════════════════════════════════════════ MISC ══ */}
      <Card id="misc">
        <CardHeading>Misc</CardHeading>
        {p.misc?.some((g: any) => g.items.length > 0) ? (
          <div className="space-y-7">
            {p.misc.filter((g: any) => g.items.length > 0).map((group: any, i: number) => (
              <div key={i}>
                <h3 className="text-sm font-bold text-stone-800 dark:text-stone-200 mb-2">
                  {group.title}
                </h3>
                <ul className="space-y-1.5 list-disc list-outside pl-5 marker:text-accent-500">
                  {group.items.map((item: string, j: number) => (
                    <li key={j} className="text-[15px] text-stone-600 dark:text-stone-400 leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <Empty>Add items in <code>data/profile.ts</code> under <code>misc:</code></Empty>
        )}
      </Card>

    </div>
  )
}
