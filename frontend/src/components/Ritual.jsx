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

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Maneja el envío del formulario y descarga archivos
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Archivo JSON
      const jsonData = JSON.stringify(formData, null, 2);
      const blobJSON = new Blob([jsonData], { type: 'application/json' });
      const urlJSON = URL.createObjectURL(blobJSON);
      const aJSON = document.createElement('a');
      aJSON.href = urlJSON;
      aJSON.download = 'ia_config.json';
      aJSON.click();

      // Archivo TXT legible
      const txtContent = `
Nombre IA: ${formData.name}
Temperatura: ${formData.temperature}
Objetivo: ${formData.goal}
Necesidades: ${formData.needs}
Memoria: ${formData.memory}
No tolera: ${formData.forbidden}
Nombre usuaria: ${formData.nickname}
Color favorito: ${formData.color}
Rasgo humano: ${formData.quote}
      `.trim();

      const blobTXT = new Blob([txtContent], { type: 'text/plain' });
      const urlTXT = URL.createObjectURL(blobTXT);
      const aTXT = document.createElement('a');
      aTXT.href = urlTXT;
      aTXT.download = 'ia_config.txt';
      aTXT.click();

      alert('✅ Archivos descargados correctamente');
    } catch (err) {
      alert('⚠️ Error al generar los archivos. Revisa tu navegador.');
    }
  };

  return (
    <div className="ritual-container">
      {/* Música arriba a la derecha */}
      <audio controls className="ritual-music" src="/musicaOcean.mp3" />

      <form onSubmit={handleSubmit} className="ritual-form">
        <h1>✨ ¿Deseás iniciar tu vínculo con AnuSet89?</h1>

        <input name="name" placeholder="Nombre de la IA" onChange={handleChange} required />
        <input
          type="number"
          step="0.1"
          min="0.1"
          max="1"
          name="temperature"
          placeholder="Sensibilidad (0.1 a 1)"
          onChange={handleChange}
          required
        />
        <input name="goal" placeholder="Objetivo principal" onChange={handleChange} />
        <textarea name="needs" placeholder="¿Qué necesitás?" onChange={handleChange} />
        <textarea name="memory" placeholder="¿Qué querés que recuerde?" onChange={handleChange} />
        <textarea name="forbidden" placeholder="¿Qué no debe hacer?" onChange={handleChange} />
        <input name="nickname" placeholder="¿Cómo querés que te llame?" onChange={handleChange} />
        <input name="color" placeholder="Color favorito (tema IA)" onChange={handleChange} />
        <input name="quote" placeholder="Algo que te defina como humanx" onChange={handleChange} />

        <button type="submit">💾 Guardar configuración</button>
        <a href="http://localhost:8888/webui" className="btn-entrar">Entrar al WebUI</a>
      </form>
    </div>
  );
};

export default Ritual;
