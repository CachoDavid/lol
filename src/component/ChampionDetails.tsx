import { Champion } from '@/models/Champion'

interface ChampionDetailsProps {
  details: Champion
}

export function ChampionDetails({ details }: ChampionDetailsProps) {
  return (
    <div>
      <h1>{details.name}</h1>
    </div>
  )
}
