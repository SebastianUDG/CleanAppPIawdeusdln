// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav style={{ backgroundColor: '#4CAF50', padding: '10px' }}>
      <Link to="/" style={{ margin: '10px', color: 'white' }}>Inicio</Link>
      <Link to="/registro" style={{ margin: '10px', color: 'white' }}>Registro</Link>
      <Link to="/login" style={{ margin: '10px', color: 'white' }}>Login</Link>
      <Link to="/servicio1" style={{ margin: '10px', color: 'white' }}>Servicio 1</Link>
    </nav>
  );
}

export default Header;
