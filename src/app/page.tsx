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
            {'주로'} <b>{'리액트와 타입스크립트'}</b>를 활용해 개발을 진행합니다.
          </div>
        </li>
        <li className="flex">
          <div className="mr-2">{'•'}</div>
          <div>
            아이디어만 있다면 생각하는 모든것을 펼칠 수 있는 이곳에, 언젠가 그려낼 제 세상을 기대하고있습니다. <b>좋은 기술로서 사람이 서로 돕는 문화를 만들어가는 것</b>이 제가 꿈꾸는 개발자로서의 삶입니다.
          </div>
        </li>
        <li className="flex">
          <div className="mr-2">{'•'}</div>
          <div>더 좋은 생각과 가치들로 스스로를 채우기 위해 노력합니다. 변화하는 트렌드에 관심을 가지고, 적응하고 배우는 것을 즐깁니다.</div>
        </li>
        <li className="flex">
          <div className="mr-2">{'•'}</div>
          <div>긍정적인 에너지를 가지고 주도적으로 행동하며, 빠르고 유연한 의사결정을 통해 팀원들과 적극적으로 소통합니다.</div>
        </li>
        <li className="flex">
          <div className="mr-2">{'•'}</div>
          <div>
            결국 사람들의 마음을 움직이는 것은 <b>인문학의 옷을 입은 좋은 기술</b>이라 생각합니다. 단순히 기술적인 구현만을 고민하는 것이 아니라, 서비스와 유저에대해 생각하고, 더 나아가 그것이 우리의 일상에 미칠 영향력까지도 고려할 줄 아는 사람으로 성장하고자 합니다.
          </div>
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
