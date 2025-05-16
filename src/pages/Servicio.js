import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../App.css';

export default function Servicio() {
  const { nombre } = useParams();

  return (
    <div className="form-container servicio-form">
      <h2>Solicitud: {nombre}</h2>
      <form>
        <input type="text" placeholder="Nombre completo" required />
        <input type="tel" placeholder="Teléfono de contacto" />
        <input type="email" placeholder="Correo electrónico (opcional)" />
        <input type="text" placeholder="Dirección de recolección" required />
        <input type="date" required />
        <input type="time" required />
        <textarea placeholder="Instrucciones especiales o tipo de prenda" />

        <h3 style={{ marginTop: '30px', color: 'var(--primary-color)' }}>Confirmación de Pago</h3>
        <input type="text" placeholder="Nombre del titular de la tarjeta" required />
        <input type="text" placeholder="Número de tarjeta (16 dígitos)" maxLength="16" required />
        <div style={{ display: 'flex', gap: '10px' }}>
          <input type="text" placeholder="MM/AA" maxLength="5" required style={{ flex: 1 }} />
          <input type="text" placeholder="CVV" maxLength="4" required style={{ flex: 1 }} />
        </div>

        <button type="submit">Confirmar y Enviar</button>
      </form>
      <p style={{ marginTop: '15px' }}>
        <Link to="/home">← Volver a servicios</Link>
      </p>
    </div>
  );
}
