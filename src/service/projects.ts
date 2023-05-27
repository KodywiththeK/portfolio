import path from 'path'
import { promises as fs } from 'fs'

export type Project = {
  id: string
  title: string
  description: string
  started: string
  ended: string
  image: string
  tools: string[]
  cooperate: boolean
  main: boolean
}

export async function getProjects(): Promise<Project[]> {
  const filePath = path.join(process.cwd(), 'data', 'projects.json')
  const data = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(data)
}
