
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from './stores/author/userAsyncSlice';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Layout from './layouts/Layout/Layout';
import Profile from './pages/Profile/Profile';
import VerifyEmail from './pages/VerifyEmai/VerifyEmail';
import Chat from './pages/Chat';


const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'profile',
        element: <Profile />
      }
    ]
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'register',
    element: <Register />
  },
  {
    path: 'forgot-password',
    element: <ForgotPassword />
  },
  {
    path: 'verify-email',
    element: <VerifyEmail />
  },
  {
    path: 'chat',
    element: <Chat />
  }

]);

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      dispatch(fetchUser())

    }
  }, [])
  return (
    <RouterProvider router={router} />
  )
}

export default App
