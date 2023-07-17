import GuestbookInput from '@/components/GuestbookInput'
import LogInLogOut from '@/components/LogInLogOut'
import SignInButton from '@/components/SignInButton'
import { getProviders } from 'next-auth/react'
import React from 'react'

export default async function GuestPage() {
  const providers = (await getProviders()) ?? {}
  console.log(providers)
  return (
    <>
      <h1 className="mb-8 font-serif text-3xl font-bold">Sign my guestbook</h1>
      <LogInLogOut providers={providers} />
      <GuestbookInput />
    </>
  )
}
