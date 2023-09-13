
import './App.css'
import Footer from './layouts/Footer'
import Navbar from './layouts/Navbar'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

const Layout = () => {
  return (
    <div className='main'>
      <Navbar />
      <div className='content'>
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
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
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
