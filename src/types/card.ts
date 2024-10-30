import * as LucideIcons from "lucide-react"

export interface SmallProfileProps {
  src: string
  alt: string
  name: string
  description: string
  isAelluminateVerified: boolean
  gender: string
}

export interface PassiveCardProps {
  icon: keyof typeof LucideIcons
  name: string
  description: string
  link: string
}

export interface ActiveCardProps {
  name: string
  description: string
  link: string
  contributors: {
    name: string
    link: string
  }[]
}
