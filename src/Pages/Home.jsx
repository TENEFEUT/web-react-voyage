import { useState } from "react";
import "./Home.css";

import Footer from "../Components/Footer";
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
      <Footer />
    </main>
    
  );
}
