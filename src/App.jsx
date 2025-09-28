import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/home/signup/Signup'


function App() {
 
  return (
    <div className='app'>
      <BrowserRouter>
          <Routes>
            <Route path = "/" element={<Home/>}/>
            <Route path = "/login" element={<Login/>}/>
            <Route path = "/signup" element={<Signup/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
