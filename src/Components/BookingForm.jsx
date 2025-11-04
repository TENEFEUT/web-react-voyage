import { useState } from 'react';
import './BookingForm.css';

export default function BookingForm() {
  const [form, setForm] = useState({
    nom: '',
    email: '',
    destination: '',
    date: '',
    personnes: 1,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  // Ajouter l'email de l'utilisateur connecté
  const newReservation = { ...form, email: user.email };
  const all = JSON.parse(localStorage.getItem('reservations') || '[]');
  all.push(newReservation);
  localStorage.setItem('reservations', JSON.stringify(all));

  setSubmitted(true);
};


  if (submitted) {
    return (
      <div className="success">
        <h2>Merci pour votre réservation !</h2>
        <p>Un email de confirmation vous a été envoyé.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Réserver un voyage</h2>
      <div className="group">
        <label>Nom :</label>
        <input
          type="text"
          name="nom"
          value={form.nom}
          onChange={handleChange}
          required
          className="input"
        />
      </div>
      <div className="group">
        <label>Email :</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="input"
        />
      </div>
      <div className="group">
        <label>Destination :</label>
        <select
          name="destination"
          value={form.destination}
          onChange={handleChange}
          required
          className="input"
        >
          <option value="">Choisissez une destination</option>
          <option value="Paris">Paris</option>
          <option value="Bali">Bali</option>
          <option value="New York">New York</option>
        </select>
      </div>
      <div className="group">
        <label>Date :</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          className="input"
        />
      </div>
      <div className="group">
        <label>Nombre de personnes :</label>
        <input
          type="number"
          name="personnes"
          value={form.personnes}
          onChange={handleChange}
          min="1"
          className="input"
        />
      </div>
      <button type="submit" className="button">Réserver</button>
    </form>
  );
}
