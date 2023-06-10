import Markdown from '@/components/Markdown'
import { getMarkdownFile } from '@/service/markdown'
import { getOneProject } from '@/service/projects'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

type ProjectDetailPageProps = {
  params: {
    slug: string
  }
}

export default async function ProjectDetail({ params: { slug } }: ProjectDetailPageProps) {
  const project = await getOneProject(slug)
  if (!project) {
    redirect('/projects')
  }
  const markdown = await getMarkdownFile(project.id)

  return (
    <section>
      <h1 className="mb-8 font-serif text-3xl font-bold text-black dark:text-white">{project.title}</h1>
      <article className="overflow-hidden rounded-2xl bg-neutral-100 p-2 shadow-lg">
        <Image src={`/images/${project.image}`} alt={`${project.title}`} width={800} height={500} className="my-4 rounded-xl shadow-lg" />
        <Markdown markdown={markdown} />
      </article>
    </section>
  )
}
