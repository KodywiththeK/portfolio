import Caraousel from '@/components/Caraousel'
import { getProjects, ProjectType } from '@/service/projects'
import Image from 'next/image'
import Link from 'next/link'
import ProjectCards from './ProjectCards'

export default async function Home() {
  const mainProjects = (await getProjects()).filter((i) => i.main)

  return (
    <section>
      <h1 className="mb-8 font-serif text-3xl font-bold tracking-tight text-black dark:text-white">{'Kody Kim'}</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        <span>{'안녕하세요. '}</span>
        <b>{'프론트엔드 개발자 김동성(Kody)'}</b>
        <span>{'입니다.'}</span>
        <br />
        <span>주로</span>
        <b>{' React, Typescript'}</b>
        <span>를 기반으로 개발하고 있습니다.</span>
        <br />
        <span>
          사람들의 일상속 스미는, <b>선한 영향력</b>을 만드는 개발자를 꿈꿉니다.
        </span>
      </p>
      <div className="my-8 flex flex-col items-start md:flex-row md:items-center">
        <Image src={'/images/profile.png'} alt={'profile'} width={120} height={120} className="rounded-full" />
        <div className="ml-0 mt-8 space-y-2 text-neutral-500 dark:text-neutral-400 md:ml-6 md:mt-0">
          <Link href={'https://github.com/KodywiththeK'} className="flex items-center gap-2 hover:underline">
            <b>{'Gihub: '}</b>
            <span>{'https://github.com/KodywiththeK'}</span>
          </Link>
          <Link href={'https://velog.io/@kodskm'} className="flex items-center gap-2 hover:underline">
            <b>{'Blog: '}</b>
            <span>{'https://velog.io/@kodskm'}</span>
          </Link>
          <button className="rounded-xl bg-neutral-200 px-3 py-1 font-semibold transition-all hover:bg-neutral-100 dark:bg-neutral-700 dark:hover:bg-neutral-800">
            <Link href={'/contact'} className="flex items-center gap-2">
              Contact
            </Link>
          </button>
        </div>
      </div>
      <div>
        <h2 className="mb-6 mt-10 font-serif text-2xl font-semibold">Main Projects</h2>
        <Caraousel mainProjects={mainProjects} />
        <div className="flex w-full bg-green-100">
          {/* {mainProjects.map((project: ProjectType) => (
            <ProjectCards key={project.id} project={project} />
          ))} */}
        </div>
      </div>
    </section>
  )
}
