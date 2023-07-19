import { useState } from 'react'

import { useLoaderData } from 'react-router-dom'

import { ChampionCard } from '../component/ChampionCard'
import { SearchComponent } from '../component/SearchComponent'
import { ChampionSummary } from '../models/ChampionSummary'

import '../global.css'

export default function HomePage() {
  const champions = useLoaderData() as ChampionSummary[]
  const [filteredChampions, setFilteredChampions] =
    useState<ChampionSummary[]>(champions)

  function handleFilter(filteredChampions: ChampionSummary[]) {
    setFilteredChampions(filteredChampions)
  }

  return (
    <div>
      <div className='px-[20rem] flex items-left justify-left bg-[#1E2323] shadow-md'>
        <img
          className=' mr-16 h-[150px] p-0 bg-[#1E2323]'
          src='https://www.metasrc.com/assets/v/3.24.2/images/games/lol/lol_logo.png'
          alt='logo'
        />
        <div className='flex items-center justify-right gap-10 bg-[#1E2323]'>
          <SearchComponent
            championsData={champions}
            onFilter={handleFilter}
          />
        </div>
      </div>
      <div className='flex flex-wrap gap-2 items-center justify-center px-16 py-4'>
        {filteredChampions.map((champion) => {
          return (
            <ChampionCard
              champion={champion}
              key={champion.id}
            />
          )
        })}
      </div>
    </div>
  )
}
