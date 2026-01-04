/**
 * PÁGINA DE CONTACTO
 * ------------------
 * Formulario funcional para que los usuarios envíen mensajes.
 * Mantiene el estilo visual de tarjetas (.card) y formularios (.form).
 */
import React, { useState } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setStatus("¡Mensaje enviado! Gracias por contactarnos.");
    setFormData({ name: "", email: "", message: "" });
    // Aquí puedes agregar integración real con backend o API
  };

  return (
    <div className="container" style={{ maxWidth: '600px' }}>
      <div className="card">
        <div className="section-head">
          <h2>Contáctanos</h2>
          <p className="sub">¿Tienes dudas? Escríbenos y te responderemos pronto.</p>
        </div>

        <form onSubmit={handleSubmit} className="form" style={{ marginTop: '1rem' }}>
          <label className="label">Nombre</label>
          <input className="input" type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Tu nombre" />
          
          <label className="label">Correo</label>
          <input className="input" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="tucorreo@ejemplo.com" />
          
          <label className="label">Mensaje</label>
          <textarea className="textarea" name="message" rows="5" value={formData.message} onChange={handleChange} required placeholder="Escribe tu mensaje aquí..."></textarea>
          
          <button type="submit" className="btn btn--primary">Enviar mensaje</button>
        </form>
        
        {status && <div className="alert alert--success" style={{ marginTop: '1rem' }}>{status}</div>}
      </div>
    </div>
  );
};

export default Contacto;
