import { client } from './sanity'

export async function addComment(postId: string, comment: string) {
  return client
    .patch(postId)
    .setIfMissing({ comments: [] })
    .append('comments', [
      {
        _type: 'comment',
        author: {
          _type: 'reference',
        },
        comment: comment,
      },
    ])
    .commit({ autoGenerateArrayKeys: true })
}