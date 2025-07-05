export interface Skill {
  name: string
  level: number
}

export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  liveDemo: string
}

export interface Experience {
  role: string
  company: string
  period: string
  achievements: string[]
}

export interface Education {
  degree: string
  institution: string
  period: string
  details: string
}
