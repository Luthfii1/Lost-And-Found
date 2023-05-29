import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import React from 'react'
import Register from './pages/Register'
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Search from './pages/Search'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/homepage' element={<Homepage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/search' element={<Search />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App