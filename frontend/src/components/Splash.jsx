import React from 'react';
import '../assets/css/Splash.css';

const Splash = () => {
  return (
    <div className="splash-container">
      {/* Icono de Rize centrado y más grande */}
      <img src="/iconokali.jpg" alt="Icono Anuset" className="splash-icon" />

      {/* Título con sombra neón y mayor jerarquía */}
      <h1 className="splash-title">Bienvenido a Anuset89</h1>

      {/* Audio visible solo en la raíz, con estilo más compacto */}
      <audio controls autoPlay loop className="audio-player">
        <source src="/musicaOcean.mp3" type="audio/mpeg" />
        Tu navegador no soporta audio HTML.
      </audio>

      {/* Enlaces centrados, con mayor espacio, diseño vertical */}
      <div className="splash-links">
        <a href="/formulario" className="btn-entrar">Entrar al ritual</a>
        <a href="http://localhost:8888/webui" className="btn-entrar-secondary">Entrar al WebUI</a>
      </div>
    </div>
  );
};

export default Splash;
