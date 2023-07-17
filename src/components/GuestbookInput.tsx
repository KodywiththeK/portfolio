'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState, useTransition } from 'react'

export default function GuestbookInput() {
  const { data } = useSession()
  const user = data?.user
  const router = useRouter()

  const [comment, setComment] = useState('')
  const [isPending, startTransition] = useTransition()
  const [isLoading, setIsLoading] = useState(false)
  const loading = isPending || isLoading
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement | HTMLInputElement>) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      setIsLoading(true)
      await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
          username: user?.name,
          comment: comment,
        }),
      })
      setIsLoading(false)
      startTransition(() => {
        router.refresh()
      })
    } catch (err) {
      console.error(err)
    } finally {
      setComment('')
    }
  }

  return (
    <form className="my-4 flex w-full gap-2" onSubmit={(e) => handleSubmit(e)}>
      <input value={comment} required onChange={(e) => setComment(e.target.value)} className="w-1/2 min-w-[300px] rounded p-2 outline-none" placeholder="Add comment..." />
      <button disabled={loading} type="submit" className="rounded bg-slate-300 px-3 py-1 disabled:bg-slate-200">
        Post
      </button>
    </form>
  )
}
