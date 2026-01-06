/**
 * PÁGINA DE INICIO (DASHBOARD)
 * ----------------------------
 * EMBUDO DE VENTAS (LANDING PAGE)
 * Estructura optimizada para conversión:
 * 1. Título atractivo.
 * 2. Video de ventas (VSL).
 * 3. Formulario de captura (Lead Magnet).
 * 4. Beneficios clave.
 */
import React, { useState } from "react";

const Home = () => {
  // Estado para el formulario de captura
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null); // Nuevo estado para mensajes visuales

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setNotification(null); // Limpiar mensajes previos
    
    try {
      // Enviamos los datos a nuestro servidor Node.js (puerto 3001)
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setNotification({
          type: 'success',
          message: `¡Felicidades ${formData.name}! Tus datos se han guardado. Te estamos redirigiendo a la clase...`
        });
        // window.location.href = "TU_ENLACE_DE_HOTMART"; 
        setFormData({ name: '', email: '' });
      } else {
        setNotification({
          type: 'error',
          message: `Error: ${data.message}`
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setNotification({
        type: 'error',
        message: "No pudimos conectar con el servidor. Se activará el modo offline automáticamente."
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      {/* SECCIÓN PRINCIPAL DEL EMBUDO */}
      <section className="card" style={{ padding: '2rem', marginTop: '1rem' }}>
        <div className="section-head" style={{ textAlign: 'center', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.2rem', marginBottom: '0.5rem', lineHeight: 1.2 }}>
            Entrenamiento: Sistema Exacto para <span style={{ color: 'var(--brand-500)' }}>Generar Ingresos Online desde Casa</span>
          </h1>
          <p className="lead muted" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Mira este video corto donde te revelo la estrategia probada de <strong>Marketing de Afiliados</strong> para ganar dinero por internet sin experiencia previa.
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', justifyContent: 'center' }}>
          {/* COLUMNA 1: VIDEO DE VENTAS */}
          <div className="video-container" style={{ flex: '1 1 400px', minWidth: '300px', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
            <iframe 
              width="100%" 
              height="350" 
              src="https://www.youtube.com/embed/tvRV7TCmZSo" 
              title="Video Explicativo" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              style={{ display: 'block' }}
            ></iframe>
          </div>

          {/* COLUMNA 2: FORMULARIO DE CAPTURA */}
          <div style={{ flex: '1 1 350px', minWidth: '300px', padding: '2rem', backgroundColor: 'var(--bg)', borderRadius: '1rem', border: '1px solid var(--border)' }}>
            <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Regístrate para Acceder</h3>
            
            {/* Notificación Visual (Banner) */}
            {notification && (
              <div style={{
                padding: '1rem',
                marginBottom: '1rem',
                borderRadius: '0.5rem',
                backgroundColor: notification.type === 'success' ? '#dcfce7' : '#fee2e2',
                color: notification.type === 'success' ? '#166534' : '#991b1b',
                border: `1px solid ${notification.type === 'success' ? '#bbf7d0' : '#fecaca'}`,
                fontSize: '0.9rem'
              }}>
                {notification.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="form">
              <div style={{ marginBottom: '1rem' }}>
                <label className="label" htmlFor="name">Tu Nombre</label>
                <input 
                  id="name"
                  type="text" 
                  className="input" 
                  placeholder="Ej. Carlos Pérez" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  style={{ width: '100%' }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label className="label" htmlFor="email">Tu Correo Electrónico</label>
                <input 
                  id="email"
                  type="email" 
                  className="input" 
                  placeholder="tucorreo@gmail.com" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{ width: '100%' }}
                />
              </div>

              <button type="submit" className="btn btn--primary" disabled={isLoading} style={{ width: '100%', justifyContent: 'center', fontSize: '1.1rem', padding: '0.75rem', opacity: isLoading ? 0.7 : 1 }}>
                {isLoading ? 'Procesando...' : '👉 Quiero Acceder al Entrenamiento Ahora'}
              </button>
              
              <p className="muted" style={{ fontSize: '0.8rem', marginTop: '1rem', textAlign: 'center' }}>
                🔒 Tus datos están 100% seguros. No enviamos spam.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE BENEFICIOS (PRUEBA SOCIAL / VALOR) */}
      <section style={{ marginTop: '3rem', textAlign: 'center', paddingBottom: '3rem' }}>
        <h3 className="muted" style={{ marginBottom: '2rem', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Lo que aprenderás en este entrenamiento</h3>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          <div className="card" style={{ flex: '1 1 250px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🚀</div>
            <h4>Primeros Pasos</h4>
            <p className="muted">Cómo elegir un <strong>producto ganador en Hotmart</strong> para vender masivamente.</p>
          </div>
          <div className="card" style={{ flex: '1 1 250px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💡</div>
            <h4>Estrategia Orgánica</h4>
            <p className="muted">Cómo <strong>vender sin invertir en publicidad</strong> usando TikTok e Instagram.</p>
          </div>
          <div className="card" style={{ flex: '1 1 250px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📈</div>
            <h4>Escalado</h4>
            <p className="muted">Secretos para <strong>automatizar tus ventas</strong> y generar ingresos pasivos recurrentes.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
