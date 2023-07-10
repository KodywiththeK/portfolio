import React from 'react'
import AdjacentPostCard from '@/components/AdjacentPostCard'
import Markdown from '@/components/Markdown'
import { getMarkdownFile } from '@/service/markdown'
import { getOneProject } from '@/service/projects'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { RiArrowGoBackLine } from 'react-icons/ri'
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
      <h1 className="mb-6 font-serif text-3xl font-bold text-black dark:text-white">{project.title}</h1>
      <Link href={'projects'} className="flex justify-end">
        <button className="flex items-center gap-2 p-2 font-semibold">
          <RiArrowGoBackLine /> back to list
        </button>
      </Link>
      <article className="overflow-hidden rounded-2xl bg-neutral-100 p-2 text-black shadow-lg">
        <Image src={`/images/${project.image}`} alt={`${project.title}`} width={800} height={500} className="my-4 rounded-xl shadow-lg" />
        <Markdown markdown={markdown} />
      </article>
      <div className="flex w-full flex-col justify-between pt-8 shadow-md md:flex-row">
        {project.prev && <AdjacentPostCard post={project.prev} type="prev" />}
        {project.next && <AdjacentPostCard post={project.next} type="next" />}
      </div>
    </section>
  )
}
