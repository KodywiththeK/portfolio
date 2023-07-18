import React from 'react'

export default function AboutPage() {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="font-serif text-3xl font-bold text-black dark:text-white">About Me</h1>
      <h2 className="text-xl font-semibold">안녕하세요, 프론트엔드 개발자 김동성입니다.</h2>
      <ul className="prose prose-neutral dark:prose-invert flex flex-col gap-2 text-neutral-800 dark:text-neutral-200">
        <li className="flex">
          <div className="mr-2">{'•'}</div>
          <div>
            {'주로'} <b>{'리액트와 타입스크립트'}</b>를 기반으로 개발하며, 다양한 사람들과 함께 <b>소통하며 작업하는 것</b>을 좋아합니다.
          </div>
        </li>
        <li className="flex">
          <div className="mr-2">{'•'}</div>
          <div>
            <b>주변의 다양한 문제를 능동적으로 해결하고 싶은 마음</b>에 개발자가 되었습니다. 아이디어만 있다면 생각하는 모든것을 펼칠 수 있는 이곳에서, 언젠가 저만의 세상을 그려내고 싶습니다. <b>좋은 기술로서 사람이 서로 돕는 문화를 만들어가는 것</b>이 제가 꿈꾸는 개발자로서의 삶입니다.
          </div>
        </li>
        <li className="flex">
          <div className="mr-2">{'•'}</div>
          <div>
            꾸준한 개발과 성장 습관을 만들기 위해 알고리즘, 프로젝트 등 스터디를 운영 및 참여하며 <b>학습 해야하는 환경과 성장할 수 있는 기회를 스스로 만들어갑니다.</b>
          </div>
        </li>
        <li className="flex">
          <div className="mr-2">{'•'}</div>
          <div>
            <b>사용자에게 좋은 가치와 경험을 전달하는 일에 큰 보람을 느낍니다.</b> 항상 사용자 경험에대해 중요히 생각하고, 더 나아가 그것이 우리의 일상에 미칠 영향력까지 고려할 줄 아는 개발자가 되고자합니다.
          </div>
        </li>
      </ul>
      <div className="flex flex-col gap-3">
        <h2 className="font-serif text-[22px] font-bold text-black dark:text-white">⚒️ Dev Skills</h2>
        <hr />
        <ul className="prose prose-neutral dark:prose-invert flex flex-col gap-1 text-neutral-800 dark:text-neutral-200">
          <li className="flex">
            <div className="mr-2">{'•'}</div>
            <div>
              <b>Javascript ES6+, TypeScript</b>
            </div>
          </li>
          <li className="flex">
            <div className="mr-2">{'•'}</div>
            <div>
              <b>React</b>
            </div>
          </li>
          <li className="flex">
            <div className="mr-2">{'•'}</div>
            <div>
              <b>Next.js</b>
            </div>
          </li>
          <li className="flex">
            <div className="mr-2">{'•'}</div>
            <div>Redux, Recoil</div>
          </li>
          <li className="flex">
            <div className="mr-2">{'•'}</div>
            <div>Tanstack-query, SWR</div>
          </li>
          <li className="flex">
            <div className="mr-2">{'•'}</div>
            <div>SCSS, StyledComponent, TailwindCSS</div>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="font-serif text-[22px] font-bold text-black dark:text-white">🙋🏻‍♂️ Who am I?</h2>
        <hr />
        <h3 className="inline-block rounded-lg bg-slate-200 p-1 text-[18px] font-semibold text-black">적극적인 자세로 문제를 해결하는 개발자입니다.</h3>
        <div className="flex flex-col gap-2">
          <p>최근 협업 프로젝트에서 Github Oauth 및 JWT 토큰 발행을 담당하던 백엔드 동료 파트의 기능 문제로 일정이 지연되고 있었습니다. 다들 본인의 파트가 아닌 탓에 도움이되지 못했고 나서는 사람도 없었습니다. 저는 더이상 지체되어서는 안될것 같다는 마음에, 자진해서 나서서 담당 동료분과 온라인으로 회의하며 함께 방법을 모색했습니다. </p>
          <p>물론 백엔드에 대한 이해는 부족했지만, 유튜브나 블로그를 검색하며 함께 고민했습니다. node.js로된 한 솔루션을 찾아, 무작정 따라해보며 Oauth를 구현했고, github API를 받는 로직 구현에 성공했습니다. 동료에게 해당 방법이 Spring에서도 적용 가능할지 물어보며 방법을 제안했고, 가능하다는 결론과 함께, 결국 문제를 기한 내에 해결하고 프로젝트를 잘 마무리할 수 있었던 경험이 있습니다.</p>
          <p className="mb-3">
            그 과정에서 백엔드단에서 Oauth가 구현되는 과정과 흐름에 대해서 조금이나마 경험해볼 수 있었고, 시야를 넓히고, 스스로 더 발전할 수 있는 기회를 만들었습니다. 이렇게 <b>저는 환경이 꾸려지기만을 기다리는 것이 아닌, 제 기회와 환경을 스스로 만들어갑니다. 가만히 서있기보다는 적극적인 자세로, 처한 위치나 환경에 상관없이 계속 한걸음씩이라도 앞으로 나아가려고 노력하는 개발자</b>입니다.
          </p>
        </div>
        <h3 className="inline-block rounded-lg bg-slate-200 p-1 text-[18px] font-semibold text-black">인문학적 사고를 겸비한 개발자입니다.</h3>
        <p>
          저는 공연예술기획자로서, 예술가로서 관객에게 다가가본 경험이 있습니다. 공연을 기획하고 만들어갈 때 관객에게 더 다가가기 위해 어떤 마음으로 임했는지, 어떻게 노력했는지 기억합니다. 작품의 가치가 관객과 함께 어떻게 완성되는지, 각자의 고유한 해석, 감정, 경험이 작품 안에서 만나 그 깊이와 의미를 만들어가는지 경험을 통해 배웠습니다. 그 경험들이 개발자로서 가져야하는 올바른 인문학적 소양,
          사용자에게 다가가고자 하는 마음과 크게 다르지 않다고 생각합니다.{' '}
        </p>
        <p>
          개발자로서 인문학적 사고가 중요한 이유는, <b>개발자가 만드는 가치를 완성시키는 것은 곧 사람이기 때문</b>입니다. 개발자가 다루는 것이 비록 0과 1, 그리고 직선의 이성적인 것들일지라 해도, 우리가 만나야하는 사람은 결국 감정으로 뭉친 곡선의 존재입니다. 인문학적 사고는 기술 개발에 사람 중심의 관점을 가져오고, 사회적으로 책임있는 기술을 만들게 해주기 때문에 개발자로서 중요한 소양이라
          생각합니다.
        </p>
        <p>
          저의 습관처럼 자리잡은 이러한 관점을 개발자로서 저만의 장점으로 만들어 적용해보려 합니다. <b>기술적인 사고와 더불어 더 깊고 의미있는 수준에서 사용자와 공감할 수 있는 기술을 만드는 개발자로서 성장하고 싶습니다.</b>
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="font-serif text-[22px] font-bold text-black dark:text-white">🔥 Experience</h2>
        <hr />
        <h3 className="text-[18px] font-semibold">제로베이스 프론트엔드 스쿨 9기</h3>
        <p className="text-[14px] leading-4 text-slate-500 dark:text-slate-400">2022.11.01 ~ 2023.05.03</p>
        <ul className="prose prose-neutral dark:prose-invert flex flex-col gap-1 text-neutral-800 dark:text-neutral-200">
          <li className="flex">
            <div className="mr-2">{'•'}</div>
            <div>
              주도적으로 <b>스터디를 만들고 리더의 역할로 3개월동안 알고리즘 스터디</b> 진행. 모든 팀원들의 코딩 테스트 점수가 평균 150% 상승
            </div>
          </li>
          <li className="flex">
            <div className="mr-2">{'•'}</div>
            <div>
              상위 5% 성적을 거두어 <b>우수 수강생 선정</b>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="font-serif text-[22px] font-bold text-black dark:text-white">🎓 Education</h2>
        <hr />
        <ul className="prose prose-neutral dark:prose-invert flex flex-col gap-1 text-neutral-800 dark:text-neutral-200">
          <li className="flex">
            <div className="mr-2">{'•'}</div>
            <div>
              2016.03 - 2018.02 <b>단국대학교 음악대학, 중퇴.</b>
            </div>
          </li>
          <li className="flex">
            <div className="mr-2">{'•'}</div>
            <div>
              2018.03 - 2023.02 <b>서울예술대학교 커뮤니케이션학부, 졸업.</b>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
