// src/pages/Contacto.jsx
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
    <main>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Correo
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Mensaje
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </label>
        <button type="submit">Enviar</button>
      </form>
      {status && <p>{status}</p>}
    </main>
  );
};

export default Contacto;
