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
    <div className="relative h-36 w-36 rounded-xl overflow-hidden
                    border border-gray-200 dark:border-gray-700 shadow-sm">
      {/* Initials fallback — always rendered beneath the photo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center
                   bg-gradient-to-br from-blue-400 to-indigo-500
                   text-white text-4xl font-bold select-none"
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
