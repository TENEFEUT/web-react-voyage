import { useState } from "react";
import "./Home.css";
import heroImg from "../assets/Images/cmrV1.jpg"
import feature1 from "../assets/Images/cmrV1.jpg"
import feature2 from "../assets/Images/cmrV1.jpg"
import feature3 from "../assets/Images/cmrV1.jpg"

export default function Home() {
  const [search, setSearch] = useState({
    depart: "",
    arrivee: "",
    date: "",
    passagers: 1,
  });

  const handleChange = (e) =>
    setSearch({ ...search, [e.target.name]: e.target.value });

  const handleSearch = (e) => {
    e.preventDefault();
    alert(
      `Recherche : ${search.depart} → ${search.arrivee} le ${search.date} pour ${search.passagers} personne(s)`
    );
  };

  return (
    <main className="home-page">
      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay">
          <h1 className="hero-title">Voyagez facilement avec votre communauté</h1>
          <form className="search-form" onSubmit={handleSearch}>
            <div className="input-group">
              <input
                type="text"
                name="depart"
                placeholder="Départ"
                value={search.depart}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="arrivee"
                placeholder="Destination"
                value={search.arrivee}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="date"
                name="date"
                value={search.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="number"
                name="passagers"
                min="1"
                value={search.passagers}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="search-btn">
              Rechercher
            </button>
          </form>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <img src={feature1} alt="Economique" />
          <h3>Economique</h3>
          <p>Partagez vos trajets et économisez sur vos voyages.</p>
        </div>
        <div className="feature-card">
          <img src={feature2} alt="Fiable" />
          <h3>Fiable</h3>
          <p>Voyagez avec des membres vérifiés et notés.</p>
        </div>
        <div className="feature-card">
          <img src={feature3} alt="Communauté" />
          <h3>Communauté</h3>
          <p>Rencontrez des personnes partageant vos trajets.</p>
        </div>
      </section>
    </main>
  );
}
