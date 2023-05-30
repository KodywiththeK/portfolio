import Markdown from '@/components/Markdown'
import { getMarkdownFile } from '@/service/markdown'
import { getOneProject } from '@/service/projects'
import { redirect } from 'next/navigation'
import React from 'react'
import ReactMarkdown from 'react-markdown'

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
      <Markdown markdown={markdown} />
    </section>
  )
}
