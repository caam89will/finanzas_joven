import React from 'react';
import { Link } from 'react-router-dom';
import { ShaderAnimation } from '../components/ui/ShaderAnimation';

const Home = () => {
  return (
    <div>
      {/* Hero Section con Shader Animation */}
      <section style={{ position: 'relative', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', borderRadius: '1rem', marginBottom: '2rem', backgroundColor: '#000' }}>
        <ShaderAnimation />
        
        {/* Contenido superpuesto */}
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: 'white', padding: '1rem' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1rem', lineHeight: 1.1, letterSpacing: '-1px' }}>
            Domina tus Finanzas<br />
            <span style={{ color: '#4b74ff' }}>Sin Complicaciones</span>
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2rem', opacity: 0.9 }}>
            Aprende a invertir, ahorrar y gestionar tu dinero con herramientas modernas y estrategias probadas.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/blog" className="btn btn--primary" style={{ padding: '0.8rem 1.5rem', fontSize: '1.1rem' }}>
              Empezar Ahora
            </Link>
            <Link to="/calculadoras" className="btn" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '0.8rem 1.5rem', fontSize: '1.1rem' }}>
              Ver Herramientas
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <div className="container">
        <div className="grid cols-3">
          <div className="card">
            <h3 className="card-title">Educación Financiera</h3>
            <p className="muted">Artículos simples y directos sobre inversión y ahorro.</p>
          </div>
          <div className="card">
            <h3 className="card-title">Calculadoras</h3>
            <p className="muted">Herramientas de interés compuesto, préstamos y más.</p>
          </div>
          <div className="card">
            <h3 className="card-title">Comunidad</h3>
            <p className="muted">Únete a miles de jóvenes mejorando su futuro.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;