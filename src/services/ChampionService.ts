import { Champion } from '@/models/Champion'
import { ChampionAPI as ChampionApi } from '@/models/ChampionItem'

import {
  championItemToChampion,
  championsToChampionSummaries
} from '../helpers/mappers/champions'
import { ChampionListApi } from '../models/ChampionList'
import { ChampionSummary } from '../models/ChampionSummary'

interface IChampionService {
  getAll(): Promise<Array<ChampionSummary>>
  getById(id: string): Promise<Champion | null>
}

class ChampionService implements IChampionService {
  // Esta função é chamada no carregamento da página Home
  async getAll(): Promise<Array<ChampionSummary>> {
    const response = await fetch(
      'https://ddragon.leagueoflegends.com/cdn/13.13.1/data/en_US/champion.json'
    )
    const data = (await response.json()) as ChampionListApi
    const champions = Object.values(data.data)
    return championsToChampionSummaries(champions)
  }

  // Esta função é chamada no carregamento da página Champion
  async getById(id: string): Promise<Champion | null> {
    try {
      const response = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/13.13.1/data/en_US/champion/${id}.json`
      )
      const data = (await response.json()) as ChampionApi
      const champions = Object.values(data.data)
      if (champions.length === 0) return null
      return championItemToChampion(champions[0])
    } catch (error) {
      return Promise.resolve(null)
    }
  }
}
export const championService = new ChampionService()
