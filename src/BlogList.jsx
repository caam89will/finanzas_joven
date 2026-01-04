import React from 'react';
import blogPosts from '../data/blogPosts.json';

// Mapeo de colores para asegurar que Tailwind detecte las clases completas durante la compilación
const tagColors = {
  blue: 'bg-blue-600',
  green: 'bg-green-600',
  yellow: 'bg-yellow-500',
  default: 'bg-gray-500'
};

const BlogList = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Nuestro Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy" 
                />
                <div className="absolute top-4 right-4">
                  <span className={`${tagColors[post.tagColor] || tagColors.default} text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm`}>
                    {post.tag}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-sm text-gray-400 mb-2 font-medium">
                  {post.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                <a 
                  href={post.link} 
                  className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors mt-auto"
                >
                  Leer artículo
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
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