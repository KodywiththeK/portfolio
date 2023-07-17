import { client } from './sanity'

export async function addComment(username: string, comment: string) {
  return client.create(
    {
      _type: 'comment',
      author: username,
      text: comment,
    },
    { autoGenerateArrayKeys: true }
  )
}

export async function getComments() {
  return client.fetch(
    `*[_type == "comment"] {
      ...,
      "createdAt":_createdAt
    }| order(_createdAt desc)`
  )
}

export async function deleteComment(id: string) {
  return client
    .delete({ query: `*[_type == "comment" && _id == "${id}"][0]` })
    .then(() => {
      console.log(`${id} deleted`)
    })
    .catch((err) => {
      console.error('Delete failed: ', err.message)
    })
}
