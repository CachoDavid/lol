// export default function HomePage() {
//   const data = useLoaderData()
//   return <pre>{JSON.stringify(data, null, 2)}</pre>
// }

import { ChangeEvent, useState } from 'react'

import { Champion } from '@/models/Champion'
import { Trait } from '@/models/Trait'
import { useLoaderData } from 'react-router-dom'

export default function HomePage() {
  const championsData1API = useLoaderData() as Champion[]
  const [search, setSearch] = useState<string>('')
  const [trait, setTrait] = useState<Trait | null>(null)

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setSearch(value)
  }
  function handleTrait(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value as Trait

    setTrait(value ?? null)
  }

  const filteredChampions = championsData1API.filter((champion) => {
    // const exists =
    //   champion.id.localeCompare(search, undefined, {
    //     sensitivity: 'base'
    //   }) === 0 // Isto é igual a champion.id === search com a diferença de ignorar a letra maiúscula
    const matchesChampionId = champion.id
      .toLowerCase()
      .includes(search.toLowerCase())
    const matchesChampionTrait = trait
      ? champion.tags.find((tag) =>
          tag.toLowerCase().includes(trait.toLowerCase())
        )
      : true

    const exists = matchesChampionId && matchesChampionTrait
    return exists
  })

  // JSON.stringify(championsData1API, null, 2) - serve como forma de debug e mostra os valores existentes na variavel championsData1API // serve apenas para debug
  return (
    <>
      <div>
        <legend>SEARCH</legend>
        <input
          type='search'
          name='search'
          id='search'
          value={search}
          onChange={handleSearch}
        />
        <span>{search}</span>
      </div>
      <div>
        <legend>Tag</legend>
        <input
          type='search'
          name='trait'
          id='trait'
          value={trait}
          onChange={handleTrait}
        />
        <span>{trait}</span>
      </div>
      <pre>{JSON.stringify(filteredChampions, null, 2)}</pre>
    </>
  )

  // const [championName, setChampionName] = useState('')
  // const navigate = useNavigate()

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setChampionName(event.target.value)
  // }

  // const handleSearch = (event: React.FormEvent) => {
  //   event.preventDefault()
  //   if (championName) {
  //     navigate(`/champions/${championName}`)
  //   }
  // }

  // return (
  //   <div>
  //     <h1>Home Page</h1>
  //     <form onSubmit={handleSearch}>
  //       <input
  //         type='text'
  //         value={championName}
  //         onChange={handleInputChange}
  //         placeholder='Digite o nome do campeão'
  //       />
  //       <button type='submit'>Pesquisar</button>
  //     </form>
  //   </div>
  //)
}
