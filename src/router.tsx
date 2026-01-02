import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from '@/views/Home'
import { WaveVault } from '@/views/WaveVault'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/wavevault",
    element: <WaveVault />
  }
])

export const AppRouter = () => {
  return <RouterProvider router={router} />
}