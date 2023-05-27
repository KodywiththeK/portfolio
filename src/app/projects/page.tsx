// 'use client'
import FilteredProjects from '@/components/FilteredProjects'
import { getProjects } from '@/service/projects'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <section>
      <h1 className="mb-8 font-serif text-3xl font-bold tracking-tight text-black dark:text-white">{'Projects'}</h1>
      <FilteredProjects projects={projects} />
    </section>
  )
}
