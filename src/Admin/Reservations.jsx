import { useState } from "react";
import "./Destinations.css"; // Utilise le style déjà existant

export default function Reservations({ destinations }) {
  // Exemple de données initiales
  const [reservations, setReservations] = useState([
    { id: 1, nom: "Jean", destination: "Paris", date: "2025-01-12", heure: "14:00" },
    { id: 2, nom: "Marie", destination: "Lyon", date: "2025-01-12", heure: "09:00" },
    { id: 3, nom: "Paul", destination: "Paris", date: "2025-01-12", heure: "09:00" },
  ]);

  // États pour les filtres
  const [filterDest, setFilterDest] = useState("");
  const [filterHeure, setFilterHeure] = useState("");

  // Filtrer les réservations
  const filteredReservations = reservations.filter(r => {
    return (
      (!filterDest || r.destination === filterDest) &&
      (!filterHeure || r.heure === filterHeure)
    );
  });

  // Extraire les options uniques pour les filtres
  const destinationsOptions = [...new Set(reservations.map(r => r.destination))];
  const heuresOptions = [...new Set(reservations.map(r => r.heure))];

  return (
    <div className="admin-container">
      <h2>Réservations</h2>

      {/* Filtres */}
      <div className="admin-form">
        <select value={filterDest} onChange={e => setFilterDest(e.target.value)}>
          <option value="">Toutes les destinations</option>
          {destinationsOptions.map((d, i) => (
            <option key={i} value={d}>{d}</option>
          ))}
        </select>

        <select value={filterHeure} onChange={e => setFilterHeure(e.target.value)}>
          <option value="">Tous les horaires</option>
          {heuresOptions.map((h, i) => (
            <option key={i} value={h}>{h}</option>
          ))}
        </select>

        <button type="button" onClick={() => { setFilterDest(""); setFilterHeure(""); }}>
          Réinitialiser
        </button>
      </div>

      {/* Tableau */}
      <table className="admin-table">
        <thead>
          <tr>
            <th>Client</th>
            <th>Destination</th>
            <th>Date</th>
            <th>Heure</th>
          </tr>
        </thead>
        <tbody>
          {filteredReservations.map(r => (
            <tr key={r.id}>
              <td data-label="Client">{r.nom}</td>
              <td data-label="Destination">{r.destination}</td>
              <td data-label="Date">{r.date}</td>
              <td data-label="Heure">{r.heure}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
