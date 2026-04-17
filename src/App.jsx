import LoginPage from './pages/LoginPage'
import RegistryPage from './pages/RegistryPage'
import HomePage from './pages/HomePage'
import { createBrowserRouter, BrowserRouter, RouterProvider, Routes, Route, Link, Outlet, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import LeftBar from './components/LeftBar'
import RightBar from './components/RightBar'
import ProfilePage from './pages/ProfilePage'

function App() {
  const currentUser = true
  const Layout = () => {
    return (
      <>
        <NavBar/>
        <div className='flex'>
          <LeftBar/>
          <div className='flex-6'>
            <Outlet/>
          </div>
          <RightBar/>
        </div>
      </>
    )
  }

  const ProtectedRoute = ({children}) => {
    if (!currentUser) {
      return <Navigate to='/login' />
    }

    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <HomePage/>,
        },
        {
          path: "/profile/:id",
          element: <ProfilePage/>,
        },
      ]
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/registry",
      element: <RegistryPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
