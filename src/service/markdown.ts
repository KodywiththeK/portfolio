import path from 'path'
import { promises as fs } from 'fs'

export async function getMarkdownFile(params: string) {
  const filePath = path.join(process.cwd(), 'public', 'posts', `${params}.md`)
  const data = await fs.readFile(filePath, 'utf-8')

  // Process the MD file content here
  return String(data)
}
