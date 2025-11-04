import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // même style que Signup.css

export default function Login({ onLogin }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === form.email);

    if (!user) {
      // Si l'utilisateur n'existe pas → redirection vers signup
      navigate('/signup');
      return;
    }

    if (user.password !== form.password) {
      setError('Mot de passe incorrect');
      return;
    }

    onLogin(user);
    navigate('/reservation');
  };

  return (
    <div className="signup-page">
      <form className="signup-card" onSubmit={handleSubmit}>
        <h2>Connexion</h2>
        {error && <p className="error">{error}</p>}

        <div className="input-group">
          <i className="fas fa-envelope"></i>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <label>Email</label>
        </div>

        <div className="input-group">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={form.password}
            onChange={handleChange}
            required
          />
          <label>Mot de passe</label>
        </div>

        <button type="submit">Se connecter</button>

        <div className="login-redirect">
          Pas encore de compte ?
          <a href="/signup" className="login-link"> Créer un compte</a>
        </div>
      </form>
    </div>
  );
}
