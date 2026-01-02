import React from "react";

const BlogCard = ({ post }) => {
  // Helper para asignar colores a las etiquetas
  const getTagStyle = (color) => {
    if (color === 'green') return { backgroundColor: '#d1fae5', color: '#059669' };
    if (color === 'yellow') return { backgroundColor: '#fef3c7', color: '#d97706' };
    return {}; // El estilo por defecto (azul) ya está en el CSS
  };

  return (
    <article className="blog-card">
      <div className="blog-image-container">
        <img src={post.image} alt={post.tag} className="blog-image" />
      </div>
      <div className="blog-content">
        <span className="blog-tag" style={getTagStyle(post.tagColor)}>
          {post.tag}
        </span>
        <h3 className="blog-title">{post.title}</h3>
        <p className="blog-excerpt">{post.excerpt}</p>
        <div className="blog-footer">
          <span>{post.date}</span>
          <a href={post.link} className="read-more-link">Leer más →</a>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;