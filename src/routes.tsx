// export const router = createBrowserRouter([
//   {
//     path: '/',
//     loader: async () => {
//       return fetch(
//         'http://ddragon.leagueoflegends.com/cdn/13.13.1/data/en_US/champion.json'
//       )
//     },
//     element: <HomePage />
//   },

import { Navigate, createBrowserRouter } from 'react-router-dom'

import ChampionPage from './pages/Champion'
import HomePage from './pages/Home'
import { championService } from './services/ChampionService'

export const router = createBrowserRouter([
  {
    path: '/',
    loader: () => championService.getAll(),
    element: <HomePage />
  },
  {
    path: '/champions/:name',
    element: <ChampionPage />
    // loader: async ({ params }) => {
    //   const championName = params.name as string
    //   const championId = await getChampionIdByName(championName)

    //   if (championId) {
    //     return { id: championId }
    //   }

    //   return redirect('/')
    // },
    // errorElement: (
    //   <Navigate
    //     to='/'
    //     replace
    //   />
    // )
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
