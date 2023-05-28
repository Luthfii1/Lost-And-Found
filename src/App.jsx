import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import React from 'react'
import Register from './pages/Register'
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'
import Login from './pages/Login'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App