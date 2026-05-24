import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Projects',
}

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
          Projects
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
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
        <div className="text-center py-20 text-gray-400 dark:text-gray-600">
          <p className="text-4xl mb-3">🚀</p>
          <p>No projects yet. Add yours in <code className="text-sm">data/projects.ts</code>.</p>
        </div>
      )}
    </div>
  )
}
