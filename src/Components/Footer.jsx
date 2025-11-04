import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bb-footer">
      
      {/* Top section */}
      <div className="bb-footer-top">

        <div className="bb-footer-col">
          <h3 className="bb-logo">ExplorVoyage</h3>
          <p>Voyagez partout en France, simplement et en toute confiance.</p>
        </div>

        <div className="bb-footer-col">
          <h4>Explorer</h4>
          <ul>
            <li>Trajets disponibles</li>
            <li>Covoiturage France</li>
            <li>Devenir conducteur</li>
            <li>Proposer un trajet</li>
          </ul>
        </div>

        <div className="bb-footer-col">
          <h4>Destinations populaires</h4>
          <ul>
            <li>Paris → Lyon</li>
            <li>Marseille → Nice</li>
            <li>Bordeaux → Toulouse</li>
            <li>Lille → Paris</li>
          </ul>
        </div>

        <div className="bb-footer-col">
          <h4>Régions</h4>
          <ul>
            <li>Île-de-France</li>
            <li>Nouvelle-Aquitaine</li>
            <li>Auvergne-Rhône-Alpes</li>
            <li>Occitanie</li>
          </ul>
        </div>

        <div className="bb-footer-col">
          <h4>À propos</h4>
          <ul>
            <li>Qui sommes-nous ?</li>
            <li>Assistance</li>
            <li>Conditions d'utilisation</li>
            <li>Confidentialité</li>
          </ul>
        </div>

      </div>

      {/* Bottom section */}
      <div className="bb-footer-bottom">
        <p>© {new Date().getFullYear()} ExplorVoyage — Tous droits réservés</p>
        
        <div className="bb-socials">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>

    </footer>
  );
}
