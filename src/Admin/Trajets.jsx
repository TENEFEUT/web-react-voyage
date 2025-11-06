import { useState } from "react";
import "./Destinations.css";

export default function Trajets() {
  const [trajets, setTrajets] = useState([
    { id: 1, depart: "Paris", arrivee: "Marseille", bus: "Bus VIP", date: "2025-01-15", heure: "09:00" },
  ]);

  const [form, setForm] = useState({ id: null, depart: "", arrivee: "", bus: "", date: "", heure: "" });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (isEditing) {
      setTrajets(trajets.map(t => t.id === form.id ? form : t));
    } else {
      setTrajets([...trajets, { ...form, id: Date.now() }]);
    }
    setForm({ id: null, depart: "", arrivee: "", bus: "", date: "", heure: "" });
    setIsEditing(false);
  };

  const handleEdit = (t) => {
    setForm(t);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setTrajets(trajets.filter(t => t.id !== id));
  };

  return (
    <div className="admin-container">
      <h2>Gestion des trajets</h2>

      <form className="admin-form" onSubmit={handleSubmit}>
        <input name="depart" placeholder="Ville départ" value={form.depart} onChange={handleChange} required />
        <input name="arrivee" placeholder="Ville arrivée" value={form.arrivee} onChange={handleChange} required />
        <input name="bus" placeholder="Bus assigné" value={form.bus} onChange={handleChange} required />
        <input name="date" type="date" value={form.date} onChange={handleChange} required />
        <input name="heure" type="time" value={form.heure} onChange={handleChange} required />
        <button type="submit">{isEditing ? "Modifier" : "Ajouter"}</button>
      </form>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Départ</th>
            <th>Arrivée</th>
            <th>Bus</th>
            <th>Date</th>
            <th>Heure</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {trajets.map(t => (
            <tr key={t.id}>
              <td data-label="Départ">{t.depart}</td>
              <td data-label="Arrivée">{t.arrivee}</td>
              <td data-label="Bus">{t.bus}</td>
              <td data-label="Date">{t.date}</td>
              <td data-label="Heure">{t.heure}</td>
              <td className="actions" data-label="Actions">
                <button className="edit-btn" onClick={() => handleEdit(t)}>Modifier</button>
                <button className="delete-btn" onClick={() => handleDelete(t.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
