import Caraousel from '@/components/Caraousel'
import { getProjects } from '@/service/projects'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const mainProjects = (await getProjects()).filter((i) => i.main)

  return (
    <section>
      <h1 className="mb-10 font-serif text-3xl font-bold tracking-tight text-black dark:text-white">{'Kody Kim'}</h1>
      <p className="mt-10 w-full text-lg text-neutral-800 dark:text-neutral-200 ">
        <p>{'안녕하세요. '}</p>
        <p>{'일상 속, 선한 영향력을 전하는 '}</p>
        <b>{'프론트엔드 개발자 김동성(Kody)'}</b>
        <span>{'입니다.'}</span>
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
      </div>
    </section>
  )
}
