import { ChampionSummary } from '@/models/ChampionSummary'

interface ChampionCardProps {
  champion: ChampionSummary
}

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function ChampionCard({ champion }: ChampionCardProps) {
  const formattedTitle = champion.title
    ? capitalizeFirstLetter(champion.title)
    : ''

  return (
    <div className='relative'>
      <a href={`/champions/${champion.id}`}>
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
          alt={champion.name}
          className='flex rounded-xl mt-4 w-80 border-4 border-[#1E2323]'
        />

        <p className='absolute bottom-0 left-0 transform -translate-x-0 text-lg text-center font-bold shadow-md bg-[#1E2323] text-[#f2922c] rounded-t-md w-80 p-2'>
          {capitalizeFirstLetter(champion.name)}
        </p>

        <p className='absolute top-0 left-0 transform -translate-x-0 text-lg text-center font-bold shadow-md bg-[#1E2323] text-[#f2922c] rounded-md w-80 p-2'>
          {formattedTitle}
        </p>
      </a>
    </div>
  )
}
