/**
 * PÁGINA DE BLOG
 * --------------
 * Muestra artículos y contenido educativo.
 * Utiliza componentes de tarjeta (.card) para mantener la consistencia visual.
 */
import React from "react";

const Blog = () => {
  return (
    <div className="container">
      <div className="section-head">
        <h2>Blog Financiero</h2>
        <div className="sub">Estrategias y consejos para mejorar tus finanzas</div>
      </div>

      <article className="card" style={{ marginTop: '1rem' }}>
        <div className="video-container" style={{ marginBottom: '1rem' }}>
          <iframe width="100%" height="315" 
            src="https://www.youtube.com/embed/tvRV7TCmZSo?si=8XwxVZ5Gjdhuxh1g" 
            title="YouTube video player" frameBorder="0" allowFullScreen>
          </iframe>
        </div>

        <h1>5 formas de ahorrar dinero siendo estudiante</h1>
        <div className="muted" style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>
          <span>Por Tu Nombre</span> | <span>Publicado el 1 de Marzo, 2024</span>
        </div>
        
        <div className="post-content">
          <p>Aquí va el contenido principal del artículo sobre ahorro para estudiantes...</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          
          <div className="alert alert--info" style={{ marginTop: '1rem' }}>
            <strong>Tip Pro:</strong> Utiliza la regla del 50/30/20 para organizar tus gastos mensuales.
          </div>
        </div>
      </article>
    </div>
  );
};

export default Blog;
