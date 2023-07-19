// ChampionCard.tsx

import { ChampionSummary } from '@/models/ChampionSummary'

interface ChampionCardProps {
  champion: ChampionSummary
}

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const tagImages: { [tag: string]: string } = {
  Fighter:
    'https://static.wikia.nocookie.net/leagueoflegends/images/8/8f/Fighter_icon.png',
  Tank: 'https://static.wikia.nocookie.net/leagueoflegends/images/5/5a/Tank_icon.png',
  Mage: 'https://static.wikia.nocookie.net/leagueoflegends/images/2/28/Mage_icon.png',
  Assassin:
    'https://static.wikia.nocookie.net/leagueoflegends/images/2/28/Slayer_icon.png',
  Marksman:
    'https://static.wikia.nocookie.net/leagueoflegends/images/7/7f/Marksman_icon.png',
  Support:
    'https://static.wikia.nocookie.net/leagueoflegends/images/5/58/Controller_icon.png'
}

export function ChampionCard({ champion }: ChampionCardProps) {
  const formattedTitle = champion.title
    ? capitalizeFirstLetter(champion.title)
    : ''

  return (
    <div className='relative'>
      <a href={`/champions/${champion.id}`}>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
          alt={champion.name}
          className='flex rounded-xl mt-4 w-80 border-4 border-[#1E2323]'
        />

        <div className='absolute bottom-0 left-0 transform -translate-x-0 text-lg text-center font-bold shadow-md bg-[#1E2323] bg-opacity-80 backdrop-blur-md text-[#f2922c] rounded-t-md w-80 p-2'>
          {capitalizeFirstLetter(champion.name)}
        </div>

        <div className='absolute top-0 left-0 transform -translate-x-0 text-lg text-center font-bold bg-[#1E2323] bg-opacity-80 backdrop-blur-md text-[#f2922c] rounded-xl w-80 p-2'>
          {formattedTitle}
        </div>

        <div className='absolute bottom-10 left-0 transform -translate-x-0 text-lg text-left font-bold bg-[#1E2323] bg-opacity-80 backdrop-blur-md text-[#f2922c] w-46 p-2 flex flex-col gap-2 rounded-tr-3xl'>
          <div className='bg-transparent'>Attack:</div>
          <div className='bg-[#101313] bg-opacity-80 backdrop-blur-md h-3 w-40 rounded-md'>
            <div
              className='bg-[#f59e0b] h-full rounded-md'
              style={{ width: `${champion.info.attack * 10}%` }}
            />
          </div>
          <div className='bg-transparent'>Defense:</div>
          <div className='bg-[#101313] bg-opacity-80 backdrop-blur-md h-3 w-40 rounded-md'>
            <div
              className='bg-[#f59e0b] h-full rounded-md'
              style={{ width: `${champion.info.defense * 10}%` }}
            />
          </div>
          <div className='bg-transparent'>Magic:</div>
          <div className='bg-[#101313] bg-opacity-80 backdrop-blur-md h-3 w-40 rounded-md'>
            <div
              className='bg-[#f59e0b] h-full rounded-md'
              style={{ width: `${champion.info.magic * 10}%` }}
            />
          </div>
          <div className='bg-transparent'>Difficulty:</div>
          <div className='bg-[#101313] bg-opacity-80 backdrop-blur-md h-3 w-40 rounded-md'>
            <div
              className='bg-[#f59e0b] h-full rounded-md'
              style={{ width: `${champion.info.difficulty * 10}%` }}
            />
          </div>
        </div>

        <div className='absolute top-12 right-0 transform -translate-x-0 text-lg text-left font-bold bg-transparent text-[#f2922c] w-46 p-2 flex flex-col gap-2 rounded-tr-3xl'>
          <div className='flex gap-1 bg-transparent'>
            {champion.tags.map((tag) => (
              <img
                key={tag}
                src={tagImages[tag]}
                alt={tag}
                className='w-12 bg-transparent'
              />
            ))}
          </div>
        </div>
      </a>
    </div>
  )
}
