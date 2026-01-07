import React from 'react';
import { Link } from 'react-router-dom';
import { WebGLShader } from '../components/ui/WebGLShader';
import { LiquidButton } from '../components/ui/LiquidGlassButton';
import DynamicBorderCard from '../components/ui/DynamicBorderCard';

const Home = () => {
  return (
    <div>
      {/* Hero Section con Shader Animation */}
      <section style={{ position: 'relative', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', borderRadius: '1rem', marginBottom: '2rem', backgroundColor: '#000' }}>
        <WebGLShader />
        
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
            <Link to="/oferta-especial">
              <LiquidButton size="xl" className="text-white border rounded-full">
                Empezar Ahora
              </LiquidButton>
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
          <DynamicBorderCard 
            title="Educación Financiera"
            description="Artículos simples y directos sobre inversión, ahorro y cómo hacer crecer tu dinero sin tecnicismos."
            icon="📚"
            linkText="Leer Blog"
            linkTo="/blog"
            gradientFrom="blue"
            gradientTo="green"
          />
          
          <DynamicBorderCard 
            title="Herramientas Pro"
            description="Calculadoras de interés compuesto, simuladores de préstamos y plantillas para tu presupuesto."
            icon="🧮"
            linkText="Usar Calculadoras"
            linkTo="/calculadoras"
            gradientFrom="orange"
            gradientTo="purple"
          />
          
          <DynamicBorderCard 
            title="Entrenamiento VIP"
            description="Accede a nuestro sistema paso a paso para generar ingresos pasivos y libertad financiera."
            icon="🚀"
            linkText="Ver Oferta Especial"
            linkTo="/oferta-especial"
            gradientFrom="pink"
            gradientTo="blue"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;