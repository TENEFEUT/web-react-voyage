import { useEffect, useState } from 'react';

export default function History({ user }) {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem('reservations') || '[]');
    const userReservations = all.filter(r => r.email === user.email);
    setReservations(userReservations);
  }, [user.email]);

  const handleCancel = (index) => {
    const all = JSON.parse(localStorage.getItem('reservations') || '[]');
    const updated = all.filter((r, i) => !(r.email === user.email && i === index));
    localStorage.setItem('reservations', JSON.stringify(updated));
    setReservations(reservations.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Historique des réservations</h2>
      {reservations.length === 0 ? (
        <p>Aucune réservation.</p>
      ) : (
        <ul>
          {reservations.map((r, i) => (
            <li key={i} className="mb-4 p-4 border rounded flex justify-between items-center">
              <div>
                <p><strong>Destination:</strong> {r.destination}</p>
                <p><strong>Date:</strong> {r.date}</p>
                <p><strong>Personnes:</strong> {r.personnes}</p>
              </div>
              <button
                onClick={() => handleCancel(i)}
                className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
              >
                Annuler
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
