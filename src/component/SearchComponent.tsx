import { ChangeEvent } from 'react'

import { Trait } from '@/models/Trait'
import { Filters } from '@/pages/Home'

interface SearchComponentProps {
  filters: Filters
  onFilter: (filters: Filters) => void
}

export function SearchComponent({ filters, onFilter }: SearchComponentProps) {
  // const [search, setSearch] = useState<string>('')
  // const [trait, setTrait] = useState<Trait | undefined>(undefined)

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value

    const updatedFilters = {
      ...filters,
      search: value.length > 0 ? value : null
    }
    onFilter(updatedFilters)
  }

  function handleTrait(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value as Trait
    const updatedFilters = { ...filters, tag: value.length > 0 ? value : null }
    onFilter(updatedFilters)
  }

  return (
    <div className='flex gap-6 flex-col pb-6 sm:flex-row sm:pb-0'>
      <div className='bg-transparent'>
        <legend className='text-2xl bg-transparent text-white text-md'>
          Search Champion Name
        </legend>
        <input
          className='block mt-2 border-4 border-[#f2922c] bg-[#1E2323] text-white rounded px-4 py-4 text-2xl'
          type='search'
          name='search'
          id='search'
          value={filters.search ?? ''}
          onChange={handleSearch}
        />
      </div>
      <div className='bg-transparent'>
        <legend className='text-2xl bg-transparent text-white text-md'>
          Champion Trait
        </legend>
        <input
          className='block mt-2 border-4 border-[#f2922c] bg-[#1E2323] text-white rounded px-4 py-4 text-2xl'
          type='search'
          name='trait'
          id='trait'
          value={filters.tag ?? ''}
          onChange={handleTrait}
        />
      </div>
    </div>
  )
}
