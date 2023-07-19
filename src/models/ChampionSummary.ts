import { Trait } from './Trait'

export type ChampionSummary = {
  id: string
  name: string
  title: string
  info: {
    attack: number
    defense: number
    magic: number
    difficulty: number
  }
  image: string

  tags: Trait[]
}
