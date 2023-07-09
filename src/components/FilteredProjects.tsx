'use client'
import ProjectCards from '@/app/ProjectCards'
import { ProjectType } from '@/service/projects'
import React, { useState } from 'react'

interface FilterPropsType {
  projects: ProjectType[]
}

export default function FilteredProjects({ projects }: FilterPropsType) {
  const categories = Array.from(new Set(projects.flatMap((project) => project.tools)))
  let result = [...projects]

  const [filter, setFilter] = useState<string[]>([])
  const onClickHandler = (category: string) => {
    if (filter.includes(category)) setFilter(filter.filter((i) => i !== category))
    else setFilter([...filter, category])
  }
  if (filter.length > 0) result = projects.filter((project) => filter.every((el) => project.tools.includes(el)))

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <button onClick={() => onClickHandler(category)} key={index} className={`${filter.includes(category) ? 'bg-neutral-400 dark:bg-neutral-400' : 'bg-neutral-200 dark:bg-neutral-700'} rounded-xl  px-3 py-1.5 font-semibold transition-all hover:bg-neutral-200  dark:hover:bg-neutral-700`}>
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {result.map((project: ProjectType) => (
          <ProjectCards key={project.id} project={project} />
        ))}
      </div>
    </>
  )
}
