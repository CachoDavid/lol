import { Navigate, createBrowserRouter, redirect } from 'react-router-dom'

import ChampionPage from './pages/Champion'
import HomePage from './pages/Home'
import { championService } from './services/ChampionService'

export const router = createBrowserRouter([
  {
    path: '/lol/',
    loader: () => championService.getAll(), // Esta função serve para executar uma função no carregamento da página
    element: <HomePage />
  },
  {
    path: '/lol/champions/:id',
    loader: async ({ params }) => {
      if (!params.id) {
        return redirect('/')
      }
      const champion = await championService.getById(params.id) // Champion || Null

      return champion ? champion : redirect('/') // [condition] ? true : false
    }, // Champion || NULL, se for nulo ele tem de redirecionar para a home,
    element: <ChampionPage />
  },
  {
    path: '*',
    element: (
      <Navigate
        to='/lol'
        replace
      />
    )
  }
])
