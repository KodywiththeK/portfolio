'use client'
import { formatTimestamp } from '@/util/formatTimestamp'
import React from 'react'

export default function CommentList({ comments }: { comments: any }) {
  return (
    <ul>
      {comments.map((comment: { [key: string]: string }) => (
        <li key={comment._id} className="my-4 flex items-center gap-2">
          <p className="text-sm text-neutral-600">{`${comment.author}:`}</p>
          <p>{comment.text}</p>
          <p className="text-xs text-neutral-500">{formatTimestamp(comment.createdAt)}</p>
        </li>
      ))}
    </ul>
  )
}
