import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from '@/views/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])

export const AppRouter = () => {
  return <RouterProvider router={router} />
}