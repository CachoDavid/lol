import { Champion, ChampionApi } from "@/models/Champion";

interface IChampionService {
  getAll(): Promise<Array<Champion>>
  getById(id:string): Promise<ChampionApi | null>
}

class ChampionService implements IChampionService {
  async getAll(): Promise<Array<Champion>> {
    const response = await fetch(
      'http://ddragon.leagueoflegends.com/cdn/13.13.1/data/en_US/champion.json'
    );
    const data = await response.json() as ChampionApi;
    const champions = Object.values(data.data);

    return champions
  }
  getById(id: string): Promise<ChampionApi | null> {
    throw new Error("Method not implemented.");
  }

}

export const championService = new ChampionService();


export async function getChampionIdByName(name: string): Promise<string | null> {
  const response = await fetch(
    'http://ddragon.leagueoflegends.com/cdn/13.13.1/data/en_US/champion.json'
  );
  const data = await response.json() as ChampionApi;
  const champions = Object.keys(data.data);
  const champion = champions.find((champion) => {
    return data.data[champion].name.toLowerCase() === name.toLowerCase()
  })
  // const lowercaseName = name.toLowerCase();

  // for (const championId of champions) {
  //   const champion = data.data[championId];
  //   if (champion.name.toLowerCase() === lowercaseName) {
  //     console.log("🚀 ~ file: IServices.ts:18 ~ getChampionIdByName ~ champion: [ENTREI MOTHER FUCKER]", champion)
  //     return champion.id;
  //   }
  // }

  return champion ?? null // Se o valor da esquerda for valido retorna o valor da esquerda se não retorna o valor da direita que é null
}


// export async function championId(id: string, name: string) {
//   const response = await fetch(
//     `http://ddragon.leagueoflegends.com/cdn/13.13.1/data/en_US/champion/${
//       id 
//     }.json`
//   );  
//   if (response.status !== 200) {
//     return redirect('/')
//   }
  
//   const data = (await response.json()) as ChampionApi
//   const champion = adjustChampionApi(data)
//   return { id: champion.id, name: champion.name }
// }



