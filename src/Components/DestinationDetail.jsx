import { useParams } from 'react-router-dom';

export default function DestinationDetail({ destinations }) {
  const { id } = useParams();
  const destination = destinations.find((d) => d.id === parseInt(id));

  if (!destination) return <p>Destination non trouvée.</p>;

  return (
    <div style={styles.container}>
      <img src={destination.image} alt={destination.nom} style={styles.image} />
      <h2>{destination.nom}</h2>
      <p>{destination.description}</p>
      <p>Prix : {destination.prix} €</p>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
  },
};
