import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Servicio from './pages/Servicio';

function App() {
  return (
    <BrowserRouter basename="/CleanApp">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/servicio/:nombre" element={<Servicio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
