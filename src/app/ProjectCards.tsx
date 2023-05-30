import { ProjectType } from '@/service/projects'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ProjectCardsPropsType {
  project: ProjectType
}

export default function ProjectCards({ project }: ProjectCardsPropsType) {
  return (
    <Link href={`/projects/${project.id}`} className="m-2 mb-8 max-w-[400px] rounded-xl border-[0.8px] bg-white text-center drop-shadow-xl transition-all hover:scale-[1.03] dark:border-neutral-200 dark:bg-neutral-800">
      <div className="flex flex-col overflow-hidden">
        <Image src={`/images/${project.image}`} alt={project.title} width={450} height={450} className="aspect-video rounded-xl object-cover" />
        <div className="dark:text-neutral-200] p-2 text-[14px]">
          <div className="text-right opacity-60">{`${project.started} ~ ${project.ended}`}</div>
          <h3 className="text-[18px] font-semibold">{`${project.title} (${project.cooperate ? '협업' : '개인'})`}</h3>
          <div className="font-semibold">{project.description}</div>
          <div className="flex flex-wrap justify-center gap-2 p-2">
            {project.tools.map((tool) => (
              <div key={tool} className="py-.5 rounded-xl bg-neutral-200 px-2 dark:bg-neutral-700">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
