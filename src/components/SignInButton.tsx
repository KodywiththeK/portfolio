'use client'
import { ClientSafeProvider, signIn } from 'next-auth/react'
import { SiGoogle, SiGithub } from 'react-icons/si'

type IProps = {
  providers: Record<string, ClientSafeProvider>
  callbackUrl: string
}

export default function SignInButton({ providers, callbackUrl }: IProps) {
  console.log(providers)

  const handleSocialStyle = (color: string) => {
    if (color === 'GitHub') return { icon: <SiGithub />, color: 'bg-gray-200' }
    if (color === 'Google') return { icon: <SiGoogle />, color: 'bg-white' }
  }

  return (
    <div className="relative flex w-full flex-col overflow-hidden rounded-xl py-2 sm:flex-row sm:items-center">
      {Object.values(providers).map((provider) => (
        <div key={provider.name} className={`${handleSocialStyle(provider.name)?.color} relative z-10 m-2 w-full max-w-[300px] rounded-xl p-3 text-center text-gray-800 shadow-lg`}>
          <button onClick={() => signIn(provider.id, { callbackUrl })} className="flex w-full items-center justify-center gap-2">
            {handleSocialStyle(provider.name)?.icon}
            <span>{'Sign in with'}</span>
            <b>{provider.name}</b>
          </button>
        </div>
      ))}
    </div>
  )
}
