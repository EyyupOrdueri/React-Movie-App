import { useContext } from 'react'
import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Login from '../pages/Login'
import Main from '../pages/Main'
import MovieDetail from '../pages/MovieDetail'
import Register from '../pages/Register'
import { AuthContext } from '../context/AuthContext';

const AppRouter = () => {
  const { currentUser } = useContext(AuthContext)
  function PrivateRouter(){
    return currentUser ? <Outlet/> : <Navigate to="/login" replace />
  }


  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/details/:id' element={<PrivateRouter />}>
              <Route path='' element={<MovieDetail />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter