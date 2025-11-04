import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Booking from './Components/BookingForm';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import History from './Pages/History';

export default function App() {
  const [user, setUser] = useState(null); // null = pas connecté

  const handleLogin = (userData) => setUser(userData);
  const handleLogout = () => setUser(null);

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/reservation"
          element={user ? <Booking /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onSignup={handleLogin} />} />
        <Route
          path="/history"
          element={user ? <History user={user} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}
