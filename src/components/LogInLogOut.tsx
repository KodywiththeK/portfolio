'use client'
import React from 'react'
import { ClientSafeProvider, useSession, signIn, signOut } from 'next-auth/react'
import SignInButton from './SignInButton'

export default function LogInLogOut({ providers }: { providers: Record<string, ClientSafeProvider> }) {
  const { data: session } = useSession()
  return (
    <>
      {session ? (
        <button
          className="flex"
          onClick={() => {
            confirm('로그아웃 하시겠습니까?') && signOut()
          }}
        >
          LogOut
        </button>
      ) : (
        <div className="flex items-center justify-center">
          <SignInButton providers={providers} callbackUrl={'/guestbook'} />
        </div>
      )}
    </>
  )
}
