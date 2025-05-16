import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

export default function Register() {
  const nav = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    nav('/home');
  };

  return (
    <div className="form-container login-form" style={{ backgroundColor: '#000', color: '#fff', padding: '2rem', borderRadius: '12px' }}>
      <h1 style={{ marginBottom: '10px', color: '#00d1ff' }}>Clean-Clean</h1>
      <h2 style={{ marginTop: '0', color: '#fff' }}>Crear Cuenta</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Nombre completo"
          required
          style={{ padding: '10px', margin: '10px 0', width: '100%', borderRadius: '6px', border: 'none' }}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          required
          style={{ padding: '10px', margin: '10px 0', width: '100%', borderRadius: '6px', border: 'none' }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          required
          style={{ padding: '10px', margin: '10px 0', width: '100%', borderRadius: '6px', border: 'none' }}
        />
        <button
          type="submit"
          style={{ backgroundColor: '#00d1ff', color: '#000', padding: '10px', border: 'none', borderRadius: '6px', width: '100%' }}
        >
          Registrarse
        </button>
      </form>
      <p style={{ marginTop: '15px' }}>
        ¿Ya tienes cuenta? <Link to="/" style={{ color: '#00d1ff' }}>Inicia sesión</Link>
      </p>
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <p>Conoce más de nosotros:</p>
        <a
          href="https://www.facebook.com/C.LyP.CleanClean/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#00d1ff', textDecoration: 'underline' }}
        >
          Facebook - C.LyP Clean Clean
        </a>
      </div>
    </div>
  );
}
