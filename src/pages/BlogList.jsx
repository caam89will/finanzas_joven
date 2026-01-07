import React from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../data/blogPosts.json';

const BlogList = () => {
  return (
    <div className="container">
      <div className="section-head mb-4">
        <div>
          <h2>Blog Financiero</h2>
          <p className="sub">Consejos prácticos para mejorar tu economía.</p>
        </div>
      </div>
      
      <div className="grid cols-3">
        {blogPosts.map(post => (
          <div key={post.id} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <img src={post.image} alt={post.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div className="p-4" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <span className={`badge badge--${post.tagColor === 'blue' ? 'neutral' : 'buy'}`} style={{ fontSize: '0.7rem' }}>
                  {post.tag}
                </span>
                <span className="muted" style={{ fontSize: '0.8rem', marginLeft: '0.5rem' }}>{post.date}</span>
              </div>
              <h3 className="card-title" style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{post.title}</h3>
              <p className="muted" style={{ fontSize: '0.9rem', marginBottom: '1rem', flex: 1 }}>{post.excerpt}</p>
              <Link to={post.link} className="btn btn--secondary" style={{ justifyContent: 'center' }}>
                Leer Artículo
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;