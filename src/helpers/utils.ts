import type { Champion, ChampionApi } from "@/models/Champion";

export function adjustChampionApi(championApi: ChampionApi): Champion {
  const championName = Object.keys(championApi.data)[0];
  const champion: Champion = championApi.data[championName];
  return champion;
}