import { useState } from "react";
import "./Destinations.css";

// Fonction pour générer un identifiant unique de 4 caractères
const generateId = () => Math.random().toString(36).substring(2, 6).toUpperCase();

export default function Bus() {
  const [bus, setBus] = useState([
    {
      id: generateId(),
      dateAchat: "2022-05-15",
      plaque: "AB-123-CD",
      carteGrise: "123456789",
      places: 50,
      marque: "Mercedes"
    },
    {
      id: generateId(),
      dateAchat: "2021-11-02",
      plaque: "EF-456-GH",
      carteGrise: "987654321",
      places: 20,
      marque: "Renault"
    },
  ]);

  const [form, setForm] = useState({
    id: null,
    dateAchat: "",
    plaque: "",
    carteGrise: "",
    places: "",
    marque: ""
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();

    if (isEditing) {
      setBus(bus.map(b => b.id === form.id ? form : b));
    } else {
      setBus([...bus, { ...form, id: generateId() }]);
    }

    setForm({
      id: null,
      dateAchat: "",
      plaque: "",
      carteGrise: "",
      places: "",
      marque: ""
    });
    setIsEditing(false);
  };

  const handleEdit = b => {
    setForm(b);
    setIsEditing(true);
  };

  const handleDelete = id => {
    setBus(bus.filter(b => b.id !== id));
  };

  return (
    <div className="admin-container">
      <h2>Gestion des Bus</h2>

      {/* Formulaire */}
      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          name="marque"
          placeholder="Marque du bus"
          value={form.marque}
          onChange={handleChange}
          required
        />
        <input
          name="dateAchat"
          type="date"
          placeholder="Date d'achat"
          value={form.dateAchat}
          onChange={handleChange}
          required
        />
        <input
          name="plaque"
          placeholder="Numéro de plaque"
          value={form.plaque}
          onChange={handleChange}
          required
        />
        <input
          name="carteGrise"
          placeholder="Numéro carte grise"
          value={form.carteGrise}
          onChange={handleChange}
          required
        />
        <input
          name="places"
          type="number"
          placeholder="Nombre de places"
          value={form.places}
          onChange={handleChange}
          required
        />
        <button type="submit">{isEditing ? "Modifier" : "Ajouter"}</button>
      </form>

      {/* Tableau */}
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Marque</th>
            <th>Date Achat</th>
            <th>Plaque</th>
            <th>Carte Grise</th>
            <th>Places</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bus.map(b => (
            <tr key={b.id}>
              <td data-label="ID">{b.id}</td>
              <td data-label="Marque">{b.marque}</td>
              <td data-label="Date Achat">{b.dateAchat}</td>
              <td data-label="Plaque">{b.plaque}</td>
              <td data-label="Carte Grise">{b.carteGrise}</td>
              <td data-label="Places">{b.places}</td>
              <td className="actions" data-label="Actions">
                <button className="edit-btn" onClick={() => handleEdit(b)}>Modifier</button>
                <button className="delete-btn" onClick={() => handleDelete(b.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
