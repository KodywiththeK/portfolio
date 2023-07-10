import { ProjectType } from '@/service/projects'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

interface AdjacentPostCardProps {
  post: ProjectType
  type: 'prev' | 'next'
}

const arrowIconClass = 'm-4 text-4xl text-yellow-300 transition-all group-hover:text-5xl'

export default function AdjacentPostCard({ post: { image: path, id, title, description }, type }: AdjacentPostCardProps) {
  return (
    <Link href={`/projects/${id}`} className="relative flex max-h-40 w-full items-center overflow-hidden rounded-lg bg-black">
      <Image src={`/images/${path}`} alt={title} width={150} height={100} className="w-full object-cover opacity-50" />
      <div className="group absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-around px-10 text-white">
        {type === 'prev' && <FaArrowLeft className={arrowIconClass} />}
        <div className="flex w-full flex-col gap-2 text-center">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="font-semibold">{description}</p>
        </div>
        {type === 'next' && <FaArrowRight className={arrowIconClass} />}
      </div>
    </Link>
  )
}
