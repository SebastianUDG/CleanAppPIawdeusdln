import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function Register() {
  const nav = useNavigate();
  const onSubmit = e => {
    e.preventDefault();
    nav('/home');
  };

  return (
    <div className="form-container register-form">
      <h1 style={{ marginBottom: '10px', color: 'var(--primary-color)' }}>Clean-Clean</h1>
      <h2 style={{ marginTop: '0' }}>Crear Cuenta</h2>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Nombre completo" required />
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <input type="tel" placeholder="Teléfono (opcional)" />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}
