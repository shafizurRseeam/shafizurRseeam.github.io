import { profile } from '@/data/profile'

export function Footer() {
  return (
    <footer className="mt-auto py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2
                      text-sm text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>
          Built with{' '}
          <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer"
             className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline underline-offset-2">
            Next.js
          </a>{' '}
          &{' '}
          <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer"
             className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline underline-offset-2">
            Tailwind CSS
          </a>
        </p>
      </div>
    </footer>
  )
}
