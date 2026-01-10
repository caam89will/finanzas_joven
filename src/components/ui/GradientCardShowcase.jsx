import React from 'react';
import { Link } from 'react-router-dom';

export default function GradientCardShowcase({ items }) {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-8 py-10">
        {items.map(({ title, excerpt, gradientFrom, gradientTo, link, tag }, idx) => (
          <div
            key={idx}
            className="group relative w-[320px] h-[400px] transition-all duration-500"
          >
            {/* Skewed gradient panels */}
            <span
              className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-40px)]"
              style={{
                background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})`,
              }}
            />
            <span
              className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] blur-[30px] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-40px)]"
              style={{
                background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})`,
              }}
            />

            {/* Animated blurs */}
            <span className="pointer-events-none absolute inset-0 z-10">
              <span className="absolute top-0 left-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-100 animate-blob group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
              <span className="absolute bottom-0 right-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-500 animate-blob animation-delay-1000 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
            </span>

            {/* Content */}
            <div className="relative z-20 left-0 p-[20px_40px] h-full flex flex-col justify-center bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] shadow-lg rounded-lg text-gray-800 dark:text-white transition-all duration-500 group-hover:left-[-25px] group-hover:p-[60px_40px] border border-white/10">
              <span className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-xs font-bold uppercase tracking-wider text-white/80">
                {tag}
              </span>
              
              <h2 className="text-2xl font-bold mb-4 leading-tight group-hover:text-white transition-colors">{title}</h2>
              <p className="text-sm leading-relaxed mb-6 line-clamp-4 group-hover:text-white/90 transition-colors">{excerpt}</p>
              
              <Link
                to={link}
                className="inline-block text-center text-sm font-bold text-gray-900 bg-white px-6 py-3 rounded shadow-md hover:bg-gray-100 transition-transform transform hover:-translate-y-1"
              >
                Leer Artículo
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Tailwind custom utilities for animation and shadows */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translateY(10px); }
          50% { transform: translate(-10px); }
        }
        .animate-blob { animation: blob 2s ease-in-out infinite; }
        .animation-delay-1000 { animation-delay: -1s; }
      `}</style>
    </>
  );
}