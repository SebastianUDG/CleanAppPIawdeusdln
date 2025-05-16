import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

export default function Login() {
  const nav = useNavigate();
  const onSubmit = e => {
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
    </div>
  );
}
