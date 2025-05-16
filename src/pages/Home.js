import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function Home() {
  const nav = useNavigate();
  const servicios = ['Lavado Básico','Lavado Express','Planchado','Lavado en Seco','Servicio Premium'];

  return (
    <div className="main-container" style={{ minHeight: '100vh', paddingBottom: '80px' }}>
      <header>
        <h1>Clean-Clean</h1>
        <p>Lavandería Premium</p>
      </header>

      <main>
        <h2>Nuestros Servicios</h2>
        <div className="service-buttons">
          {servicios.map(s => (
            <button key={s} className="service-btn" onClick={() => nav(`/servicio/${s}`)}>
              {s}
            </button>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <img
            src="https://i.pinimg.com/736x/de/96/93/de9693ce36da709d6a05fc9face18184.jpg"
            alt="Lavandería"
            style={{ maxWidth: '300px', height: 'auto', borderRadius: '10px' }}
          />
        </div>
      </main>

      <footer style={{
        backgroundColor: 'var(--primary-color)',
        color: 'white',
        textAlign: 'center',
        padding: '10px 0',
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%'
      }}>
        <p>&copy; 2025 Clean-Clean. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}