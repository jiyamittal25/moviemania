import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { AuthContextProvider } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import ProtectedRoute from './components/ProtectedRoute';
import Upcoming from './pages/Upcoming';

function App() {
  return (
    <>
      {/* As we want the navbar in every page, routes are defined below it */}
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />                                                                                               
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
