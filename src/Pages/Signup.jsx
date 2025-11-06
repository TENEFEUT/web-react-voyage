import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

export default function Signup({ onSignup }) {
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    email: '',
    dateNaissance: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    if (users.find(u => u.email === form.email)) return setError("Cet email existe déjà");
    if (form.password !== form.confirmPassword) return setError("Les mots de passe ne correspondent pas");

    const newUser = { ...form };
    delete newUser.confirmPassword;
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    onSignup(newUser);
    navigate('/home');
  };

  return (
    <div className="signup-page">
      <form className="signup-card" onSubmit={handleSubmit}>
        <h2>Créer un compte</h2>
        {error && <p className="error">{error}</p>}

        <div className="input-group">
          <i className="fas fa-user"></i>
          <input name="nom" placeholder="Nom" required onChange={handleChange} />
        </div>

        <div className="input-group">
          <i className="fas fa-user-tag"></i>
          <input name="prenom" placeholder="Prénom" required onChange={handleChange} />
        </div>

        <div className="input-group">
          <i className="fas fa-envelope"></i>
          <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        </div>

        <div className="input-group">
          <i className="fas fa-calendar"></i>
          <input type="date" name="dateNaissance" required onChange={handleChange} />
        </div>

        <div className="input-group">
          <i className="fas fa-lock"></i>
          <input type="password" name="password" placeholder="Mot de passe" required onChange={handleChange} />
        </div>

        <div className="input-group">
          <i className="fas fa-lock"></i>
          <input type="password" name="confirmPassword" placeholder="Confirmer le mot de passe" required onChange={handleChange} />
        </div>

        <button type="submit">Créer le compte</button>

        <div className="login-redirect">
            Vous avez déjà un compte ?
            <a href="/login" className="login-link"> Se connecter</a>
        </div>
      </form>
    </div>
  );
}
