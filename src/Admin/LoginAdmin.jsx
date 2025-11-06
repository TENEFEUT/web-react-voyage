import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginAdmin.css";

export default function LoginAdmin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    //  Vérification des identifiants admin
    if (email.trim() === "a@a" && password === "123") {
      onLogin({ name: "Administrateur", role: "admin" });
      navigate("admin/dashboard"); 
    } else {
      alert(" Identifiants incorrects. Veuillez réessayer.");
    }
  };

  return (
    <div className="login-admin-container">
      <div className="login-admin-card">
        <h2 className="login-title">Espace Administrateur</h2>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <input
              type="email"
              placeholder="Email administrateur"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Se connecter
          </button>
        </form>

        <p className="login-hint"> Utilisez a@a / 123</p>
      </div>
    </div>
  );
}
