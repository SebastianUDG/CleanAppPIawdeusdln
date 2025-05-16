import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

export default function Login() {
  const nav = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    nav('/home');
  };

  return (
    <div className="form-container login-form">
      <h1 style={{ marginBottom: '10px', color: 'var(--primary-color)' }}>Clean-Clean</h1>
      <h2 style={{ marginTop: '0' }}>Inicio de Sesión</h2>
      <form onSubmit={onSubmit}>
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit">Entrar</button>
      </form>
      <p style={{ marginTop: '15px' }}>
        ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
      </p>
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <p>Conoce más de nosotros:</p>
        <a
          href="https://www.facebook.com/C.LyP.CleanClean/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}
        >
          Facebook - C.LyP Clean Clean
        </a>
      </div>
    </div>
  );
}
