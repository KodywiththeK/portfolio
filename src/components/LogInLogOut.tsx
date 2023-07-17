'use client'
import React from 'react'
import { ClientSafeProvider, useSession, signIn, signOut } from 'next-auth/react'
import SignInButton from './SignInButton'
import { RiLogoutCircleRLine } from 'react-icons/ri'

export default function LogInLogOut({ providers }: { providers: Record<string, ClientSafeProvider> }) {
  const { data: session } = useSession()
  return (
    <>
      {session ? (
        <button className="flex w-[100px] items-center justify-center gap-1 rounded bg-neutral-200 py-1" onClick={() => signOut()}>
          LogOut
          <RiLogoutCircleRLine size={20} />
        </button>
      ) : (
        <div className="flex items-center justify-center">
          <SignInButton providers={providers} callbackUrl={'/guestbook'} />
        </div>
      )}
    </>
  )
}
