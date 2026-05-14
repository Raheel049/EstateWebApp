import Register from './routes/register/register'
import Login from './routes/login/login'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/homePage/home'
import ProfilePage from './routes/profilePage/profilePage'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/register/register" element={<Register />} />
      <Route path='/login/login' element={<Login />} />
      <Route path='/profilePage/profilePage' element={<ProfilePage />} />
    </Routes>
    </>
  )
}

export default App
