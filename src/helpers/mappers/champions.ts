import { Champion } from "@/models/Champion"
import { ChampionItem } from "@/models/ChampionItem"
import { ChampionListItem } from "@/models/ChampionList"
import { ChampionSummary } from "@/models/ChampionSummary"

export function championsToChampionSummaries(arr: ChampionListItem[]): ChampionSummary[]{
  return arr.map(
    ({ id, name, title, info, tags, image}) => ({
      id,
      name,
      title,
      info: {
        attack: info.attack,
        defense: info.defense,
        magic: info.magic,
        difficulty: info.difficulty
      },
      image: `http://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/${image.full}`,
      tags
    })
  )
}

export function championItemToChampion(api: ChampionItem): Champion{
  const champion: Champion = {
    id: api.id,
    name: api.name,
    title: api.title,
    stats: api.stats,
    info: {
      attack: api.info.attack,
      defense: api.info.defense,
      magic: api.info.magic,
      difficulty: api.info.difficulty,
    },
    lore: api.lore,
    passive: api.passive,
    spells: api.spells,
    skins: api.skins,
    image: `http://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/${api.image.full}`,
    tags: api.tags
  }
  return champion }