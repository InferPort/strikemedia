import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Home } from '@/views/Home'
import { Artists } from '@/views/Artists'
import { Archive } from '@/views/Archive'
import { Contact } from '@/views/Contact'

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "artists",
        element: <Artists />
      },
      {
        path: "archive",
        element: <Archive />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
])

export const AppRouter = () => {
  return <RouterProvider router={router} />
}