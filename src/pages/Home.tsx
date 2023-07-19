import { useState } from 'react'

import { useLoaderData } from 'react-router-dom'

import { ChampionCard } from '../component/ChampionCard'
import { SearchComponent } from '../component/SearchComponent'
import { ChampionSummary } from '../models/ChampionSummary'

import '../global.css'

export type Filters = {
  search: string | null
  tag: string | null
}

export default function HomePage() {
  const champions = useLoaderData() as ChampionSummary[]
  const [filters, setFilters] = useState<Filters>({ search: null, tag: null })

  function handleFilters(filters: Filters) {
    setFilters(filters)
  }

  const filteredChampions = champions.filter((champion) => {
    const matchesChampionName = filters.search
      ? champion.name.toLowerCase().includes(filters.search.toLowerCase())
      : true

    const matchesChampionId = filters.search
      ? champion.id.toLowerCase().includes(filters.search.toLowerCase())
      : true

    const matchesChampionTrait = filters.tag
      ? champion.tags.find((tag) =>
          tag.toLowerCase().includes(filters.tag!.toLowerCase())
        )
      : true
    return (matchesChampionName || matchesChampionId) && matchesChampionTrait
  })

  // const [filteredChampions, setFilteredChampions] =
  //   useState<ChampionSummary[]>(champions)

  // function handleFilter(filteredChampions: ChampionSummary[]) {
  //   setFilteredChampions(filteredChampions)
  // }

  return (
    <div>
      <div className='px-0 sm:px-16 flex flex-col md:flex-row items-center gap-4 sm:gap-16 w-full'>
        <img
          className='lg:pl-32 p-0 h-[150px] bg-transparent'
          src='https://www.metasrc.com/assets/v/3.24.2/images/games/lol/lol_logo.png'
          alt='logo'
        />
        <div className='flex-1'>
          <SearchComponent
            filters={filters}
            onFilter={handleFilters}
          />
        </div>
      </div>
      <div className='flex flex-wrap gap-10 items-center justify-center px-16 py-4'>
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
