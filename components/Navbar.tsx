'use client'

import { useEffect, useState } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { profile } from '@/data/profile'

const sections = [
  { id: 'news',         label: 'News'         },
  { id: 'publications', label: 'Publications' },
  { id: 'research',     label: 'Research'     },
  { id: 'teaching',     label: 'Teaching'     },
  { id: 'professional', label: 'Professional' },
  { id: 'awards',       label: 'Awards'       },
  { id: 'service',      label: 'Service'      },
]

export function Navbar() {
  const [activeId, setActiveId] = useState('about')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-15% 0px -70% 0px' }
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const linkClass = (isActive: boolean) =>
    `relative px-0.5 py-1.5 text-sm font-medium tracking-wide whitespace-nowrap transition-colors ${
      isActive
        ? 'text-stone-900 dark:text-stone-100'
        : 'text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
    }`

  return (
    <header className="sticky top-0 z-50 bg-stone-50/85 dark:bg-stone-950/85 backdrop-blur-md
                       border-b border-stone-200 dark:border-stone-800">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">

        {/* Brand */}
        <a href="#about"
           className="font-serif text-base sm:text-lg italic text-stone-900 dark:text-stone-100
                      hover:text-accent-700 dark:hover:text-accent-400 transition-colors shrink-0">
          {profile.name}
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-5">
          {sections.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={linkClass(activeId === id)}>
              {label}
              <span className={`absolute -bottom-1 left-0 right-0 h-px transition-opacity ${
                activeId === id ? 'bg-accent-600 dark:bg-accent-400 opacity-100' : 'opacity-0'
              }`} />
            </a>
          ))}
          <div className="ml-1 pl-4 border-l border-stone-200 dark:border-stone-700 shrink-0">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-1 shrink-0">
          <ThemeToggle />
          <button onClick={() => setMobileOpen(o => !o)} aria-label="Toggle menu"
            className="p-2 rounded-lg text-stone-500 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors">
            {mobileOpen ? (
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-stone-200 dark:border-stone-800
                        bg-stone-50 dark:bg-stone-950 px-6 pb-4 grid grid-cols-3 gap-1 pt-3">
          {sections.map(({ id, label }) => (
            <a key={id} href={`#${id}`}
               onClick={() => setMobileOpen(false)}
               className={`text-center py-1.5 rounded-lg ${linkClass(activeId === id)}`}>
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
