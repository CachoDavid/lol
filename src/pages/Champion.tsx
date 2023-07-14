import { useLoaderData } from 'react-router-dom'

export default function ChampionPage() {
  const data = useLoaderData()
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h1>Champion</h1>
    </>
  )
}
