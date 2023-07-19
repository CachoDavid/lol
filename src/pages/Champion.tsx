import { Champion } from '@/models/Champion'
import { useLoaderData } from 'react-router-dom'

export default function ChampionPage() {
  const champion = useLoaderData() as Champion // o useLoaderData é uma função (Custom Hook) que retorna a informação obtida no loader da chamada da API

  return <pre>{JSON.stringify(champion.stats, null, 2)}</pre>
}
