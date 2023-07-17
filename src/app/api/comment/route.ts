import { addComment, deleteComment } from '@/service/comments'
import { getServerSession } from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'
import { authOptions } from '../auth/[...nextauth]/route'

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  const user = session?.user

  if (!user) {
    return new Response('Authentication Error', { status: 401 })
  }

  const { username, comment } = await req.json()
  if (comment === undefined && username === undefined) {
    return new Response('Bad Request', { status: 400 })
  }
  return addComment(username, comment)
    .then((res) => NextResponse.json(res))
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }))
}

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions)
  const user = session?.user

  if (!user) {
    return new Response('Authentication Error', { status: 401 })
  }

  const { id } = await req.json()
  if (id === undefined) {
    return new Response('Bad Request', { status: 400 })
  }
  return deleteComment(id)
    .then((res) => NextResponse.json(res))
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }))
}
