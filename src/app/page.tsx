import Caraousel from '@/components/Caraousel'
import { getProjects } from '@/service/projects'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const mainProjects = (await getProjects()).filter((i) => i.main)

  return (
    <section>
      <h1 className="mb-8 font-serif text-3xl font-bold tracking-tight text-black dark:text-white">{'Kody Kim'}</h1>
      <p className="mt-5 w-full text-lg text-neutral-800 dark:text-neutral-200 ">
        <span>{'안녕하세요. '}</span>
        <b>{'프론트엔드 개발자 김동성(Kody)'}</b>
        <span>{'입니다.'}</span>
      </p>
      <br />
      <ul className="prose prose-neutral dark:prose-invert flex flex-col gap-2 text-neutral-800 dark:text-neutral-200">
        <li className="flex">
          <div className="mr-2">{'•'}</div>
          <div>
            {'주로'} <b>{'리액트와 타입스크립트'}</b>를 기반으로 개발하며, 다양한 사람들과 함께 소통하며 작업하는 것을 좋아합니다.
          </div>
        </li>
        <li className="flex">
          <div className="mr-2">{'•'}</div>
          <div>
            주변의 다양한 문제를 능동적으로 해결하고 싶은 마음에 개발자가 되었습니다. 아이디어만 있다면 생각하는 모든것을 펼칠 수 있는 이곳에서, 언젠가 저만의 세상을 그려내고 싶습니다. <b>좋은 기술로서 사람이 서로 돕는 문화를 만들어가는 것</b>이 제가 꿈꾸는 개발자로서의 삶입니다.
          </div>
        </li>
        <li className="flex">
          <div className="mr-2">{'•'}</div>
          <div>꾸준한 개발과 성장 습관을 만들기 위해 알고리즘, 프로젝트 등 스터디를 운영 및 참여하며 학습 해야하는 환경과 성장할 수 있는 기회를 스스로 만들어갑니다.</div>
        </li>
        <li className="flex">
          <div className="mr-2">{'•'}</div>
          <div>사용자에게 좋은 가치와 경험을 전달하는 일에 큰 보람을 느낍니다. 항상 사용자 경험에대해 중요히 생각하고, 더 나아가 그것이 우리의 일상에 미칠 영향력까지 고려할 줄 아는 개발자가 되고자합니다.</div>
        </li>
      </ul>
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
