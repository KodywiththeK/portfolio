import CommentList from '@/components/CommentList'
import GuestbookInput from '@/components/GuestbookInput'
import LogInLogOut from '@/components/LogInLogOut'
import SignInButton from '@/components/SignInButton'
import { getComments } from '@/service/comments'
import { getServerSession } from 'next-auth'
import { getProviders } from 'next-auth/react'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'

export const dynamic = 'force-dynamic'

export default async function GuestPage() {
  const providers = (await getProviders()) ?? {}
  const commentList = await getComments()
  const session = await getServerSession(authOptions)
  return (
    <>
      <h1 className="mb-8 font-serif text-3xl font-bold">Sign my guestbook</h1>
      <LogInLogOut providers={providers} />
      {session?.user && <GuestbookInput />}
      <CommentList comments={commentList} />
    </>
  )
}
