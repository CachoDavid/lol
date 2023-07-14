import { Navigate, createBrowserRouter, redirect } from 'react-router-dom'

import { adjustChampionApi } from './helpers/utils'
import { ChampionApi } from './models/Champion'
import ChampionPage from './pages/Champion'
import HomePage from './pages/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    loader: async () => {
      return fetch(
        'http://ddragon.leagueoflegends.com/cdn/13.13.1/data/en_US/champion.json'
      )
    },
    element: <HomePage />
  },
  {
    path: '/champions/:id',
    element: <ChampionPage />,
    loader: async ({ params: { id } }) => {
      const response = await fetch(
        `http://ddragon.leagueoflegends.com/cdn/13.13.1/data/en_US/champion/${
          id as string
        }.json`
      )

      if (response.status !== 200) {
        return redirect('/')
      }

      const data = (await response.json()) as ChampionApi
      const champion = adjustChampionApi(data)

      return { id: champion.id, name: champion.name }
    },
    errorElement: (
      <Navigate
        to='/'
        replace
      />
    )
  },
  {
    path: '*',
    element: (
      <Navigate
        to='/'
        replace
      />
    )
  }
])
