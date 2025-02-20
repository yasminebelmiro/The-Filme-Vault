import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import SingUp from './pages/SingUp/SingUp'
import Home from './pages/Home/Home'

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/singup' element={<SingUp />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App