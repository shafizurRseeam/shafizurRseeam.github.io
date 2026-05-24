'use client'

import { useEffect, useState } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { profile } from '@/data/profile'

const sections = [
  { id: 'news',         label: 'News'         },
  { id: 'publications', label: 'Publications' },
  { id: 'biography',    label: 'Biography'    },
  { id: 'awards',       label: 'Awards'       },
  { id: 'teaching',     label: 'Teaching'     },
  { id: 'misc',         label: 'Misc'         },
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

  const linkClass = (id: string) =>
    `px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
      activeId === id
        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50'
        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800'
    }`

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm
                       border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-2xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">

        {/* Brand */}
        <a href="#about"
           className="text-sm font-semibold text-gray-900 dark:text-gray-100
                      hover:text-blue-600 dark:hover:text-blue-400 transition-colors shrink-0">
          {profile.name}
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-0.5">
          {sections.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={linkClass(id)}>
              {label}
            </a>
          ))}
          <div className="ml-2 pl-2 border-l border-gray-200 dark:border-gray-700">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-1">
          <ThemeToggle />
          <button onClick={() => setMobileOpen(o => !o)} aria-label="Toggle menu"
            className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
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
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800
                        bg-white dark:bg-gray-950 px-4 pb-3 grid grid-cols-3 gap-1 pt-2">
          {sections.map(({ id, label }) => (
            <a key={id} href={`#${id}`}
               onClick={() => setMobileOpen(false)}
               className={`text-center ${linkClass(id)}`}>
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
