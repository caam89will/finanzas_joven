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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes redirigir a la página de gracias o al checkout de Hotmart
    alert(`¡Felicidades ${formData.name}! Te estamos redirigiendo a la clase exclusiva.`);
    // window.location.href = "TU_ENLACE_DE_HOTMART_O_GRACIAS"; 
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

        <div className="grid cols-2" style={{ gap: '3rem', alignItems: 'center' }}>
          {/* COLUMNA 1: VIDEO DE VENTAS */}
          <div className="video-container" style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
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
          <div style={{ padding: '2rem', backgroundColor: 'var(--bg)', borderRadius: '1rem', border: '1px solid var(--border)' }}>
            <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Regístrate para Acceder</h3>
            
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

              <button type="submit" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center', fontSize: '1.1rem', padding: '0.75rem' }}>
                👉 Quiero Acceder al Entrenamiento Ahora
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
        
        <div className="grid cols-3" style={{ gap: '2rem' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🚀</div>
            <h4>Primeros Pasos</h4>
            <p className="muted">Cómo elegir un <strong>producto ganador en Hotmart</strong> para vender masivamente.</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💡</div>
            <h4>Estrategia Orgánica</h4>
            <p className="muted">Cómo <strong>vender sin invertir en publicidad</strong> usando TikTok e Instagram.</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
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
