'use client'
import React, { useState } from 'react'

export default function GuestbookInput() {
  const [comment, setComment] = useState('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement | HTMLInputElement>) => {
    e.preventDefault()
    console.log(comment)
  }

  return (
    <form className="my-4 flex w-full gap-2" onSubmit={(e) => handleSubmit(e)}>
      <input onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)} value={comment} required onChange={(e) => setComment(e.target.value)} className="w-1/2 min-w-[300px] rounded p-2 outline-none" placeholder="Add comment..." />
      <button type="submit" className="rounded bg-slate-300 px-3 py-1">
        Post
      </button>
    </form>
  )
}
