import { profile } from '@/data/profile'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-stone-200 dark:border-stone-800">
      <div className="max-w-3xl mx-auto px-6 py-8 text-center text-sm text-stone-400 dark:text-stone-500">
        © {new Date().getFullYear()} {profile.name}
      </div>
    </footer>
  )
}
