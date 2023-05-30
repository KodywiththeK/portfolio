import path from 'path'
import { promises as fs } from 'fs'

export type ProjectType = {
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

export async function getProjects(): Promise<ProjectType[]> {
  const filePath = path.join(process.cwd(), 'data', 'projects.json')
  const data = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(data)
}

// params 값 받아서, 해당 아이템 값만 골라주기
export async function getOneProject(id: string): Promise<ProjectType | undefined> {
  const projects = await getProjects()
  return projects.find((item) => item.id === id)
}
