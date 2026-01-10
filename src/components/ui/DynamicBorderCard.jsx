import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const DynamicBorderCard = ({ title, description, icon, linkText, linkTo, gradientFrom = "orange", gradientTo = "purple" }) => {
  const topRef = useRef(null);
  const rightRef = useRef(null);
  const bottomRef = useRef(null);
  const leftRef = useRef(null);
  
  useEffect(() => {
    let animationId;
    const animateBorder = () => {
      const now = Date.now() / 1000;
      const speed = 0.5; // Animation speed
      
      // Calculate positions based on time
      const topX = Math.sin(now * speed) * 100;
      const rightY = Math.cos(now * speed) * 100;
      const bottomX = Math.sin(now * speed + Math.PI) * 100;
      const leftY = Math.cos(now * speed + Math.PI) * 100;
      
      // Apply positions to elements
      if (topRef.current) topRef.current.style.transform = `translateX(${topX}%)`;
      if (rightRef.current) rightRef.current.style.transform = `translateY(${rightY}%)`;
      if (bottomRef.current) bottomRef.current.style.transform = `translateX(${bottomX}%)`;
      if (leftRef.current) leftRef.current.style.transform = `translateY(${leftY}%)`;
      
      animationId = requestAnimationFrame(animateBorder);
    };
    
    animationId = requestAnimationFrame(animateBorder);
    return () => cancelAnimationFrame(animationId);
  }, []);
  
  // Mapeo de colores para gradientes dinámicos
  const gradients = {
    orange: "via-orange-500/50",
    purple: "via-purple-500/50",
    blue: "via-blue-500/50",
    green: "via-green-500/50",
    pink: "via-pink-500/50"
  };

  // Mapeo para colores sólidos (decoración)
  const solidColors = {
    orange: "bg-orange-500",
    purple: "bg-purple-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    pink: "bg-pink-500"
  };

  return (
    <div className="relative w-full bg-gray-900 border border-gray-800 rounded-2xl p-8 overflow-hidden shadow-2xl h-full flex flex-col group">
      {/* Animated border elements */}
      <div className="absolute top-0 left-0 w-full h-0.5 overflow-hidden">
        <div ref={topRef} className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent ${gradients[gradientFrom]} to-transparent`}></div>
      </div>
      
      <div className="absolute top-0 right-0 w-0.5 h-full overflow-hidden">
        <div ref={rightRef} className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent ${gradients[gradientTo]} to-transparent`}></div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-0.5 overflow-hidden">
        <div ref={bottomRef} className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent ${gradients[gradientFrom]} to-transparent`}></div>
      </div>
      
      <div className="absolute top-0 left-0 w-0.5 h-full overflow-hidden">
        <div ref={leftRef} className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent ${gradients[gradientTo]} to-transparent`}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-4 text-4xl">{icon}</div>
        <h3 className="text-2xl font-bold mb-3 text-white">
          {title}
        </h3>
        
        <p className="text-white mb-6 flex-grow">
          {description}
        </p>
        
        <Link to={linkTo} className="inline-block w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium py-3 px-6 rounded-xl transition-all transform hover:-translate-y-1 shadow-md">
          {linkText}
        </Link>
      </div>

      {/* Decorative elements (Efectos visuales del prompt original) */}
      <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${solidColors[gradientFrom]} animate-pulse`}></div>
      <div className={`absolute bottom-4 left-4 w-3 h-3 rounded-full ${solidColors[gradientTo]} animate-pulse`}></div>
      <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full ${solidColors[gradientFrom]}/10 blur-xl transition-all group-hover:scale-150`}></div>
      <div className={`absolute -bottom-20 -left-20 w-40 h-40 rounded-full ${solidColors[gradientTo]}/10 blur-xl transition-all group-hover:scale-150`}></div>
    </div>
  );
};

export default DynamicBorderCard;