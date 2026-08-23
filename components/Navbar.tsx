'use client'

import { useEffect, useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

const sections = [
  { id: 'publications', label: 'Publications' },
  { id: 'research',     label: 'Research'     },
  { id: 'teaching',     label: 'Teaching'     },
  { id: 'professional', label: 'Experience'   },
]

export function Navbar() {
  const [activeId, setActiveId] = useState('about')

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
      <nav className="relative max-w-3xl mx-auto px-6 pr-16 py-3.5 min-h-16
                      flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
        {sections.map(({ id, label }) => (
          <a key={id} href={`#${id}`} className={linkClass(activeId === id)}>
            {label}
            <span className={`absolute -bottom-1 left-0 right-0 h-px transition-opacity ${
              activeId === id ? 'bg-accent-600 dark:bg-accent-400 opacity-100' : 'opacity-0'
            }`} />
          </a>
        ))}

        {/* Toggle: absolutely pinned to the true right edge, independent of link wrapping */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
