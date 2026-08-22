import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Projects',
}

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-14 pb-16 sm:pt-20">
      {/* Header */}
      <div className="mb-10">
        <p className="text-sm font-medium text-accent-700 dark:text-accent-400 tracking-wide">Selected work</p>
        <h1 className="mt-2 font-serif text-4xl text-stone-900 dark:text-stone-50 tracking-tight">
          Projects
        </h1>
        <p className="mt-3 text-stone-500 dark:text-stone-400">
          Research and open-source projects.
        </p>
      </div>

      {/* Grid */}
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-stone-400 dark:text-stone-600">
          <p className="text-4xl mb-3">🚀</p>
          <p>No projects yet. Add yours in <code className="text-sm">data/projects.ts</code>.</p>
        </div>
      )}
    </div>
  )
}
