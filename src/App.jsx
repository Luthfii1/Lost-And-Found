import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom' 
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Register from './pages/Register'
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Search from './pages/Search'
import Chat from './pages/Chat'
import DetailChat from './pages/DetailChat'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/login"
          element={isAuthenticated ? <Navigate to="/homepage" /> : <Login setAuth={setAuth} />}
        />
        <Route
          exact
          path="/homepage"
          element={
            isAuthenticated ? <Homepage setAuth={setAuth} /> : <Navigate to="/login" />
          }
        />
        <Route 
          exact 
          path='/register' 
          element={<Register />} 
        />
        <Route 
          exact 
          path='/search' 
          element={<Search />} 
        />
        <Route 
          exact 
          path='/chat' 
          element={<Chat />} 
        />
        <Route 
          exact 
          path='/detailedChat' 
          element={<DetailChat />} 
        />
        <Route 
          exact 
          path='*' 
          element={<NotFound />} 
        />
      </Routes>
    </Router>
  )
}

export default App