import { Link } from 'react-router-dom';

export default function DestinationList({ destinations }) {
  return (
    <div style={styles.container}>
      {destinations.map((dest) => (
        <div key={dest.id} style={styles.card}>
          <img src={dest.image} alt={dest.nom} style={styles.image} />
          <h3>{dest.nom}</h3>
          <p>{dest.description}</p>
          <p>À partir de {dest.prix} €</p>
          <Link to={`/destination/${dest.id}`} style={styles.link}>
            Voir plus
          </Link>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    padding: '1rem',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    width: '300px',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
  },
  link: {
    color: '#0077b6',
    textDecoration: 'none',
  },
};
