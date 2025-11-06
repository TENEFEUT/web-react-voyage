import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Booking from "./Components/BookingForm";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import History from "./Pages/History";
import DestinationList from "./Admin/Destinations"; 
import Dashboard from "./Admin/Dashboard";
import LoginAdmin from "./Admin/LoginAdmin";

export default function App() {
  const [user, setUser] = useState(null);
  const [destinations, setDestinations] = useState([]);

  // Charger les destinations sauvegardées
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("destinations")) || [];
    setDestinations(saved);
  }, []);

  // Ajouter une nouvelle destination
  const addDestination = (dest) => {
    const updated = [...destinations, { ...dest, _id: Date.now() }];
    setDestinations(updated);
    localStorage.setItem("destinations", JSON.stringify(updated));
  };

  // Gestion de l'authentification
  const handleLogin = (userData) => setUser(userData);
  const handleLogout = () => setUser(null);

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />

      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<Home destinations={destinations} />} />

        {/* Réservation */}
        <Route
          path="/reservation"
          element={user ? <Booking /> : <Navigate to="/login" />}
        />

        {/* Authentification client */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onSignup={handleLogin} />} />
        <Route
          path="/history"
          element={user ? <History user={user} /> : <Navigate to="/login" />}
        />

        {/* Authentification administrateur */}
        <Route path="/admin/login" element={<LoginAdmin onLogin={handleLogin} />} />

        {/*  Tableau de bord admin */}
        <Route
          path="/admin/dashboard"
          element={
            user?.role === "admin" ? (
              <Dashboard />
            ) : (
              <Navigate to="/admin/login" />
            )
          }
        />

        {/*  Liste publique des destinations */}
        <Route
          path="/destinations"
          element={<DestinationList destinations={destinations} />}
        />
        <Route path="/admin/*" element={<Navigate to="/admin/dashboard" />} />
      </Routes>
    </Router>
  );
}
