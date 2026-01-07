import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Captura = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar el correo (ej. Firebase, EmailJS, ConvertKit)
    console.log("Correo capturado:", email);
    
    // Redirigir a la oferta de afiliado (Hotmart)
    window.location.href = "https://go.hotmart.com/C99765159A";
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      padding: '1rem'
    }}>
      <div className="card" style={{ maxWidth: '500px', width: '100%', padding: '2.5rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
        
        <div style={{ marginBottom: '1.5rem', fontSize: '3rem' }}>🚀</div>
        
        <h1 style={{ color: 'white', fontSize: '2rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          Estás a un paso de transformar tus finanzas
        </h1>
        
        <p style={{ color: '#cbd5e1', marginBottom: '2rem', fontSize: '1.1rem' }}>
          Ingresa tu correo abajo para desbloquear el acceso inmediato a la oferta especial y recibir bonos exclusivos.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input 
            type="email" 
            placeholder="Tu mejor correo electrónico" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ 
              padding: '1rem', 
              borderRadius: '8px', 
              border: '1px solid #475569', 
              backgroundColor: '#1e293b', 
              color: 'white',
              fontSize: '1rem'
            }}
          />
          
          <button type="submit" className="btn btn--primary" style={{ padding: '1rem', fontSize: '1.1rem', justifyContent: 'center', background: 'linear-gradient(to right, #4f46e5, #2563eb)' }}>
            Continuar a la Oferta &rarr;
          </button>
        </form>

        <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: '#64748b' }}>
          Respetamos tu privacidad. Sin spam.
        </p>
      </div>
    </div>
  );
};

export default Captura;