import Register from './routes/register/register'
import Login from './routes/login/login'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path='/login/login' element={<Login />} />
    </Routes>
    </>
  )
}

export default App
