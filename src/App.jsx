import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Register from './pages/Register';
import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Search from './pages/Search';
import Chat from './pages/Chat';
import DetailChat from './pages/DetailChat';
import Profile from './pages/Profile';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  // Set the refresh token
  async function isAuth() {
    try {
      const response = await fetch('https://lost-and-found-be.vercel.app/auth/is-verify', {
        method: 'GET',
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    isAuth();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/homepage" /> : <Login setAuth={setAuth} />}
        />
        <Route
          path="/homepage"
          element={
            isAuthenticated ? (
              <Homepage setAuth={setAuth} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/register"
          element={isAuthenticated ? <Navigate to="/homepage" /> : <Register />}
        />
        <Route
          path="/search"
          element={isAuthenticated ? <Search /> : <Navigate to="/login" />}
        />
        <Route
          path="/chat/:user_id"
          element={isAuthenticated ? <Chat /> : <Navigate to="/login" />}
        />
        <Route
          path="/detailedChat/:username_friend"
          element={isAuthenticated ? <DetailChat /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile/:user_id"
          element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
