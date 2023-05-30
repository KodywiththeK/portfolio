'use client'
import ProjectCards from '@/app/ProjectCards'
import { ProjectType } from '@/service/projects'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

interface CaraouselPropsType {
  mainProjects: ProjectType[]
}

export default function Caraousel({ mainProjects }: CaraouselPropsType) {
  const responsive = {
    tablet: {
      breakpoint: { max: 3000, min: 768 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  }

  return (
    <Carousel swipeable={true} draggable={true} responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={5000} showDots={true}>
      {mainProjects.map((project: ProjectType) => (
        <div key={project.id} className="flex h-full justify-center">
          <ProjectCards key={project.id} project={project} />
        </div>
      ))}
    </Carousel>
  )
}
