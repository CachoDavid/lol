import { ChangeEvent, useState } from 'react'

import { ChampionSummary } from '@/models/ChampionSummary'
import { Trait } from '@/models/Trait'

interface SearchComponentProps {
  championsData: ChampionSummary[]
  onFilter: (filteredChampions: ChampionSummary[]) => void
}

export function SearchComponent({
  championsData,
  onFilter
}: SearchComponentProps) {
  const [search, setSearch] = useState<string>('')
  const [trait, setTrait] = useState<Trait | undefined>(undefined)

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setSearch(value)
    applyFilters()
  }

  function handleTrait(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value as Trait
    setTrait(value)
    applyFilters()
  }

  function applyFilters() {
    const filteredChampions = championsData.filter((champion) => {
      const matchesChampionName = champion.name
        .toLowerCase()
        .includes(search.toLowerCase())

      const matchesChampionId = champion.id
        .toLowerCase()
        .includes(search.toLowerCase())

      const matchesChampionTrait = trait
        ? champion.tags.find((tag) =>
            tag.toLowerCase().includes(trait.toLowerCase())
          )
        : true
      return (matchesChampionName || matchesChampionId) && matchesChampionTrait
    })

    onFilter(filteredChampions)
  }

  return (
    <>
      <div className='bg-[#1E2323]'>
        <legend className='text-2xl bg-[#1E2323]'>SEARCH</legend>
        <input
          className='block mt-2 border-4 border-[#f2922c] bg-[#1E2323] rounded px-4 py-4 text-2xl'
          type='search'
          name='search'
          id='search'
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div className='bg-[#1E2323]'>
        <legend className='text-2xl bg-[#1E2323]'>Tag</legend>
        <input
          className='block mt-2 border-4 border-[#f2922c] bg-[#1E2323] rounded px-4 py-4 text-2xl'
          type='search'
          name='trait'
          id='trait'
          value={trait}
          onChange={handleTrait}
        />
      </div>
    </>
  )
}
