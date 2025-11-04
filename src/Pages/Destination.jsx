import DestinationDetail from '../Components/DestinationDetail';
import { destinations } from '../data';

export default function Destination() {
  return <DestinationDetail destinations={destinations} />;
}
