import React from 'react';
import blogPosts from '../data/blogPosts.json';
import GradientCardShowcase from '../components/ui/GradientCardShowcase';

// Función auxiliar para mapear tus colores de etiquetas a gradientes atractivos
const getGradients = (color) => {
  const gradients = {
    blue: { from: '#03a9f4', to: '#00d0ff' },     // Cyan a Azul claro
    green: { from: '#4dff03', to: '#00d0ff' },    // Lima a Cyan
    yellow: { from: '#ffbc00', to: '#ff0058' },   // Amarillo a Rosa
    default: { from: '#8e2de2', to: '#4a00e0' }   // Morado (fallback)
  };
  return gradients[color] || gradients.default;
};

const BlogList = () => {
  // Preparamos los datos añadiendo los gradientes necesarios para el nuevo componente
  const formattedPosts = blogPosts.map(post => {
    const colors = getGradients(post.tagColor);
    return {
      ...post,
      gradientFrom: colors.from,
      gradientTo: colors.to
    };
  });

  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Blog Financiero
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estrategias probadas, guías paso a paso y consejos prácticos para dominar tu economía.
          </p>
        </div>
        
        {/* Nuevo componente de tarjetas animadas */}
        <GradientCardShowcase items={formattedPosts} />
      </div>
    </section>
  );
};

export default BlogList;