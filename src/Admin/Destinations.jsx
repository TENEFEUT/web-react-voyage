import { useState } from "react";
import "./Destinations.css";

export default function AdminDestinations() {
  const [destinations, setDestinations] = useState([
    { id: 1, nom: "Paris", description: "Ville Lumière", prix: 35, image: "https://picsum.photos/300" },
    { id: 2, nom: "Lyon", description: "Capitale gastronomique", prix: 25, image: "https://picsum.photos/301" }
  ]);

  const [form, setForm] = useState({ id: null, nom: "", description: "", prix: "", image: "" });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      setDestinations(destinations.map(d => d.id === form.id ? form : d));
    } else {
      setDestinations([...destinations, { ...form, id: Date.now() }]);
    }

    setForm({ id: null, nom: "", description: "", prix: "", image: "" });
    setIsEditing(false);
  };

  const handleEdit = (dest) => {
    setForm(dest);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setDestinations(destinations.filter(d => d.id !== id));
  };

  return (
    <div className="admin-container">
      <h2>Gestion des destinations</h2>

      {/* Formulaire */}
      <form className="admin-form" onSubmit={handleSubmit}>
        <input name="nom" placeholder="Nom" value={form.nom} onChange={handleChange} required />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
        <input name="prix" type="number" placeholder="Prix (€)" value={form.prix} onChange={handleChange} required />
        <input name="image" placeholder="URL image" value={form.image} onChange={handleChange} required />

        <button type="submit">{isEditing ? "Modifier" : "Ajouter"}</button>
      </form>

      {/* Tableau */}
      <table className="admin-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Nom</th>
            <th>Description</th>
            <th>Prix (€)</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {destinations.map(d => (
            <tr key={d.id}>
              <td><img src={d.image} alt={d.nom} /></td>
              <td>{d.nom}</td>
              <td>{d.description}</td>
              <td>{d.prix}</td>
              <td className="actions">
                <button className="edit-btn" onClick={() => handleEdit(d)}>Modifier</button>
                <button className="delete-btn" onClick={() => handleDelete(d.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
