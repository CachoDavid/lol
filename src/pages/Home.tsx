import { useLoaderData } from 'react-router-dom'

export default function HomePage() {
  const data = useLoaderData()
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
