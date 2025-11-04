import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ user, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/reservation?destination=${destination}&date=${date}`);
  };

  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">TravelGo</Link>

      {/* Barre de recherche */}
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Rechercher</button>
      </form>

      <div className="nav-links">
        <Link to="/" className="link">Accueil</Link>
        <Link to="/reservation" className="link">Réserver</Link>

        {user ? (
          <>
            <Link to="/history" className="link">Historique</Link>
            <button onClick={onLogout} className="link button-link">Déconnexion</button>
          </>
        ) : (
          <>
            <Link to="/login" className="link">Connexion</Link>
            <Link to="/signup" className="link">Créer un compte</Link>
          </>
        )}
      </div>

      <button
        className="hamburger"
        aria-label="Menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        &#9776;
      </button>

      {/* Mobile */}
      <div className={`nav-links-mobile${menuOpen ? ' show' : ''}`}>
        <form className="search-bar-mobile" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <button type="submit">Rechercher</button>
        </form>

        <Link to="/" className="link" onClick={() => setMenuOpen(false)}>Accueil</Link>
        <Link to="/reservation" className="link" onClick={() => setMenuOpen(false)}>Réserver</Link>

        {user ? (
          <>
            <Link to="/history" className="link" onClick={() => setMenuOpen(false)}>Historique</Link>
            <button onClick={() => { setMenuOpen(false); onLogout(); }} className="link button-link">Déconnexion</button>
          </>
        ) : (
          <>
            <Link to="/login" className="link" onClick={() => setMenuOpen(false)}>Connexion</Link>
            <Link to="/signup" className="link" onClick={() => setMenuOpen(false)}>Créer un compte</Link>
          </>
        )}
      </div>
    </nav>
  );
}
