'use client'

import Image from 'next/image'
import { useState } from 'react'

interface Props {
  src: string
  name: string
}

export function ProfilePhoto({ src, name }: Props) {
  const [imgError, setImgError] = useState(false)

  // Derive initials (up to 2 letters) from the full name
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className="relative h-32 w-32 sm:h-44 sm:w-44 rounded-2xl overflow-hidden
                    ring-1 ring-stone-200 dark:ring-stone-800 shadow-sm shrink-0">
      {/* Initials fallback — always rendered beneath the photo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center
                   bg-gradient-to-br from-accent-400 to-accent-700
                   text-white text-4xl font-serif select-none"
      >
        {initials}
      </div>

      {/* Photo — sits on top; hidden if it fails to load */}
      {!imgError && (
        <Image
          src={src}
          alt={name}
          fill
          className="object-cover"
          priority
          onError={() => setImgError(true)}
        />
      )}
    </div>
  )
}
