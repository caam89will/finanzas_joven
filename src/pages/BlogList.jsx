import React from 'react';
import blogPosts from '../data/blogPosts.json';

// Mapeo de colores usando las variables CSS de tu proyecto
const tagStyles = {
  blue: { backgroundColor: 'var(--brand-100)', color: 'var(--brand-800)' },
  green: { backgroundColor: '#dcfce7', color: '#166534' }, // Estilo similar a success
  yellow: { backgroundColor: '#fef9c3', color: '#854d0e' }, // Estilo similar a warning
  default: { backgroundColor: 'var(--bg)', color: 'var(--muted)' }
};

const BlogList = () => {
  return (
    <section style={{ padding: '3rem 0' }}>
      <div className="container">
        <div className="section-head" style={{ marginBottom: '2rem', justifyContent: 'center' }}>
          <h2>Nuestro Blog</h2>
        </div>
        
        <div className="grid cols-3">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="card"
              style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ height: '200px', position: 'relative' }}>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy" 
                />
                <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                  <span className="badge" style={tagStyles[post.tagColor] || tagStyles.default}>
                    {post.tag}
                  </span>
                </div>
              </div>
              
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div className="muted" style={{ fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                  {post.date}
                </div>
                <h3 className="card-title" style={{ marginBottom: '0.75rem' }}>
                  {post.title}
                </h3>
                <p className="muted" style={{ fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>
                  {post.excerpt}
                </p>
                <a 
                  href={post.link} 
                  className="btn btn--ghost"
                  style={{ justifyContent: 'center', marginTop: 'auto' }}
                >
                  Leer artículo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;