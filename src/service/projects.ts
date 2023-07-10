import path from 'path'
import { promises as fs } from 'fs'
import postcss from 'postcss'

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

export type ProjectAdditionalType = ProjectType & {
  prev: ProjectType | null
  next: ProjectType | null
}

export async function getProjects(): Promise<ProjectType[]> {
  const filePath = path.join(process.cwd(), 'data', 'projects.json')
  const data = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(data)
}

// params 값 받아서, 해당 아이템 값만 골라주기
export async function getOneProject(id: string): Promise<ProjectAdditionalType> {
  const projects = await getProjects()
  const project = projects.find((item) => item.id === id)
  if (!project) throw new Error(`${id} 에 해당하는 포스트를 찾을 수 없음`)

  const index = projects.indexOf(project)
  const next = index > 0 ? projects[index - 1] : null
  const prev = index < projects.length - 1 ? projects[index + 1] : null
  return { ...project, prev, next }
}
