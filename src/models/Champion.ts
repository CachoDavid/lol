import { ChampionItem } from "./ChampionItem";

export type Champion = Pick<ChampionItem, 'stats' | 'info' | 'id' | 'title' | 'name' | 'tags' | 'lore' | 'passive' | 'spells' | 'skins'> & {
  image: string
}

