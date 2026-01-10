import React, { useState } from "react";
import {
  Ripple,
  AuthTabs,
} from '../components/ui/ModernAnimatedSignIn';
import OrbitingSkills from '../components/ui/OrbitingSkills';
import { Mail, MessageSquare, User, Send } from 'lucide-react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event, name) => {
    const value = event.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted', formData);
    alert("¡Mensaje enviado! Gracias por contactarnos.");
    setFormData({ name: "", email: "", message: "" });
  };

  const formFields = {
    header: 'Contáctanos',
    subHeader: '¿Tienes dudas? Escríbenos y te responderemos pronto.',
    fields: [
      {
        label: 'Nombre',
        required: true,
        type: 'text',
        placeholder: 'Tu nombre',
        onChange: (event) => handleInputChange(event, 'name'),
      },
      {
        label: 'Correo',
        required: true,
        type: 'email',
        placeholder: 'tucorreo@ejemplo.com',
        onChange: (event) => handleInputChange(event, 'email'),
      },
      {
        label: 'Mensaje',
        required: true,
        type: 'textarea',
        placeholder: 'Escribe tu mensaje aquí...',
        rows: 4,
        onChange: (event) => handleInputChange(event, 'message'),
      },
    ],
    submitButton: 'Enviar Mensaje',
  };

  // Iconos para la animación orbital
  const iconsArray = [
    {
      component: () => <Mail className="w-full h-full text-blue-500" />,
      className: 'size-[30px] border-none bg-transparent',
      duration: 20,
      delay: 20,
      radius: 100,
      path: false,
      reverse: false,
    },
    {
      component: () => <MessageSquare className="w-full h-full text-green-500" />,
      className: 'size-[30px] border-none bg-transparent',
      duration: 20,
      delay: 10,
      radius: 100,
      path: false,
      reverse: false,
    },
    {
      component: () => <User className="w-full h-full text-purple-500" />,
      className: 'size-[50px] border-none bg-transparent',
      radius: 210,
      duration: 20,
      path: false,
      reverse: false,
    },
    {
      component: () => <Send className="w-full h-full text-orange-500" />,
      className: 'size-[50px] border-none bg-transparent',
      radius: 210,
      duration: 20,
      delay: 20,
      path: false,
      reverse: false,
    },
    {
      component: () => <Mail className="w-full h-full text-pink-500" />,
      className: 'size-[30px] border-none bg-transparent',
      duration: 20,
      delay: 20,
      radius: 150,
      path: false,
      reverse: true,
    },
    {
      component: () => <MessageSquare className="w-full h-full text-yellow-500" />,
      className: 'size-[30px] border-none bg-transparent',
      duration: 20,
      delay: 10,
      radius: 150,
      path: false,
      reverse: true,
    },
    {
      component: () => <User className="w-full h-full text-cyan-500" />,
      className: 'size-[50px] border-none bg-transparent',
      radius: 270,
      duration: 20,
      path: false,
      reverse: true,
    },
    {
      component: () => <Send className="w-full h-full text-red-500" />,
      className: 'size-[50px] border-none bg-transparent',
      radius: 270,
      duration: 20,
      delay: 60,
      path: false,
      reverse: true,
    },
  ];

  return (
    <section className='flex max-lg:justify-center h-screen overflow-hidden rounded-xl shadow-2xl border border-gray-200 bg-white'>
      {/* Left Side */}
      <span className='flex flex-col justify-center items-center w-1/2 max-lg:hidden relative bg-gray-50 overflow-hidden'>
        {/* Contenedor unificado para asegurar que Ripple y OrbitingSkills compartan el mismo centro exacto */}
        <div className="absolute inset-0 pointer-events-none">
          <Ripple mainCircleSize={150} numCircles={8} />
          <OrbitingSkills icons={iconsArray} />
        </div>
      </span>

      {/* Right Side */}
      <span className='w-1/2 h-full flex flex-col justify-center items-center max-lg:w-full max-lg:px-[10%]'>
        {/* Inyección de estilos CSS para forzar el color del botón, ya que AuthTabs no acepta la clase directamente */}
        <style>{`
          button[type="submit"] {
            background-color: #000000 !important;
            color: #ffffff !important;
          }
        `}</style>
        <AuthTabs
          formFields={formFields}
          handleSubmit={handleSubmit}
        />
      </span>
    </section>
  );
};

export default Contacto;
