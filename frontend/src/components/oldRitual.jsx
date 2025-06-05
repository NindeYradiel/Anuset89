import React, { useState } from 'react';
import './Ritual.css';

const Ritual = () => {
  const [formData, setFormData] = useState({
    name: '',
    temperature: 0.1,
    goal: '',
    needs: '',
    memory: '',
    forbidden: '',
    nickname: '',
    color: '',
    quote: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/generate_config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!response.ok) throw new Error('Error al generar configuración');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'ia_config.json';
      a.click();
      alert('✅ Configuración guardada');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="ritual-container">
      <audio controls className="ritual-music" src="/musicaOcean.mp3" />

      <form onSubmit={handleSubmit} className="ritual-form">
        <h1>✨ ¿Deseás iniciar tu vínculo con AnuSet89?</h1>
        {error && <p className="error">{error}</p>}

        <input name="name" placeholder="Nombre de la IA" onChange={handleChange} required />
        <input type="number" step="0.1" min="0.1" max="1" name="temperature" placeholder="Temperatura (0.1 a 1)" onChange={handleChange} required />
        <input name="goal" placeholder="Objetivo principal" onChange={handleChange} />
        <textarea name="needs" placeholder="¿Qué tipo de ayuda necesitás?" onChange={handleChange} />
        <textarea name="memory" placeholder="¿Qué te gustaría que recuerde?" onChange={handleChange} />
        <textarea name="forbidden" placeholder="¿Qué nunca debería hacer?" onChange={handleChange} />
        <input name="nickname" placeholder="¿Cómo querés que te llame?" onChange={handleChange} />
        <input name="color" placeholder="Color favorito (tema IA)" onChange={handleChange} />
        <input name="quote" placeholder="Frase que te define" onChange={handleChange} />

        <button type="submit">💾 Guardar configuración</button>
        <a href="http://localhost:8888/webui" className="btn-entrar">Entrar al WebUI</a>
      </form>
    </div>
  );
};

export default Ritual;
