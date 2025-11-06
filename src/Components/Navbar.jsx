// Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import './Navbar.css';

export default function Navbar({ user, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <nav className="nav">
      {/* Logo */}
      <Link to="/" className="nav-logo">TravelGo</Link>

      {/* Menu central */}
      <div className={`nav-links${menuOpen ? ' mobile-open' : ''}`}>
        <Link to="/">Accueil</Link>
        <Link to="/reservation">Réserver</Link>
        <Link to="/suivi">Suivi Trajet</Link>
        {user && <Link to="/history">Historique</Link>}


        {/* Lien Admin visible seulement si user.admin */}
        {user?.role === "admin" && (
          <Link to="/admin/dashboard">Admin</Link>
        )}
      </div>

      {/* Bouton utilisateur */}
      <div className="user-menu">
        <FaUserCircle 
          className="user-icon" 
          onClick={() => setUserMenuOpen(!userMenuOpen)} 
        />

        <div className={`user-dropdown${userMenuOpen ? ' open' : ''}`}>
          {user ? (
            <>
              {/* Lien Admin ici aussi */}
              {user.role === "admin" && (
                <Link to="/admin/destinations" onClick={() => setUserMenuOpen(false)}>
                  Espace Admin
                </Link>
              )}

              <button onClick={() => { onLogout(); setUserMenuOpen(false); }}>
                <FaSignInAlt style={{ marginRight: '6px' }} />
                Déconnexion
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setUserMenuOpen(false)}>
                <FaSignInAlt style={{ marginRight: '6px' }} />
                Connexion
              </Link>
              <Link to="/signup" onClick={() => setUserMenuOpen(false)}>
                <FaUserPlus style={{ marginRight: '6px' }} />
                S'inscrire
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Hamburger mobile */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>

      {/* Menu mobile */}
      <div className={`nav-links-mobile${menuOpen ? ' show' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link>
        <Link to="/reservation" onClick={() => setMenuOpen(false)}>Réserver</Link>
        <Link to="/suivi" onClick={() => setMenuOpen(false)}>Suivi Trajet</Link>
        {user && <Link to="/history" onClick={() => setMenuOpen(false)}>Historique</Link>}

        {/* Lien admin menu mobile */}
        {user?.role === "admin" && (
  <Link to="/admin/dashboard">Admin</Link>
)}

        {!user && (
          <>
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              <FaSignInAlt style={{ marginRight: '6px' }} />
              Connexion
            </Link>
            <Link to="/signup" onClick={() => setMenuOpen(false)}>
              <FaUserPlus style={{ marginRight: '6px' }} />
              S'inscrire
            </Link>
          </>
        )}

        {user && 
          <button onClick={() => { setMenuOpen(false); onLogout(); }}>
            <FaSignInAlt style={{ marginRight: '6px' }} />
            Déconnexion
          </button>
        }
      </div>
    </nav>
  );
}
