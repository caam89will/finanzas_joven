/**
 * PÁGINA DE BLOG
 * --------------
 * Muestra artículos dinámicamente cargados desde un archivo JSON.
 */
import React from "react";
import blogPosts from "../data/blogPosts.json"; // Importamos los datos

const Blog = () => {
  return (
    <div className="container">
      <div className="section-head" style={{ marginBottom: '1.5rem' }}>
        <h2>Blog Financiero</h2>
        <div className="sub">Estrategias y consejos para mejorar tus finanzas</div>
      </div>

      {/* Lista de artículos dinámica */}
      <div className="grid cols-3">
        {blogPosts.map((post) => (
          <article key={post.id} className="card content-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '180px', overflow: 'hidden', borderRadius: '0.5rem', marginBottom: '1rem' }}>
              <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            
            <div style={{ marginBottom: '0.5rem' }}>
              <span className={`badge`} style={{ backgroundColor: `var(--${post.tagColor || 'brand'}-100)`, color: `var(--${post.tagColor || 'brand'}-800)` }}>
                {post.tag}
              </span>
              <span className="muted" style={{ fontSize: '0.8rem', marginLeft: '0.5rem' }}>{post.date}</span>
            </div>

            <h3 className="card-title" style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{post.title}</h3>
            <p className="muted" style={{ fontSize: '0.9rem', flex: 1 }}>{post.excerpt}</p>
            
            <a href={post.link} className="btn btn--ghost mt-4" style={{ width: '100%', justifyContent: 'center' }}>Leer artículo</a>
          </article>
        ))}
      </div>

      {/* Artículo destacado (Video) */}
      <article className="card" style={{ marginTop: '2rem' }}>
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
