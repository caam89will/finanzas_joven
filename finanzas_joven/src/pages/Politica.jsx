import React from 'react';

const Politica = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Política de Privacidad</h1>
        <div className="text-gray-600 leading-relaxed">
          <p className="mb-4 text-sm text-gray-500">Última actualización: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">1. Introducción</h2>
          <p className="mb-4">
            En <strong>Finanzas Jóvenes</strong>, respetamos su privacidad y estamos comprometidos a protegerla. Esta política describe los tipos de información que podemos recopilar de usted o que usted puede proporcionar cuando visita nuestro sitio web.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">2. Información que recopilamos</h2>
          <p className="mb-4">
            Podemos recopilar información personal que usted nos proporciona voluntariamente, como su nombre y dirección de correo electrónico al suscribirse a nuestro boletín o al utilizar nuestros formularios de contacto. También recopilamos información automática a través de cookies para mejorar su experiencia de navegación y analizar el tráfico del sitio.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">3. Uso de la información</h2>
          <p className="mb-4">
            Utilizamos la información que recopilamos para:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Presentar nuestro sitio web y su contenido de manera efectiva.</li>
            <li>Proporcionarle información, productos o servicios que nos solicite.</li>
            <li>Notificarle sobre cambios en nuestro sitio web o nuevos artículos.</li>
            <li>Mejorar nuestros servicios y la experiencia del usuario.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">4. Enlaces de Afiliados y Terceros</h2>
          <p className="mb-4">
            Nuestro sitio web puede contener enlaces a sitios web de terceros y enlaces de afiliados (como Hotmart). Si hace clic en un enlace de un tercero, será dirigido al sitio de ese tercero. Tenga en cuenta que si realiza una compra a través de nuestros enlaces de afiliados, podemos recibir una comisión sin costo adicional para usted. Le recomendamos encarecidamente que revise la Política de Privacidad de cada sitio que visite.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">5. Seguridad de los datos</h2>
          <p className="mb-4">
            Nos esforzamos por utilizar medios comercialmente aceptables para proteger su información personal, pero recuerde que ningún método de transmisión a través de Internet o método de almacenamiento electrónico es 100% seguro.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">6. Contacto</h2>
          <p className="mb-4">
            Si tiene alguna pregunta sobre esta política de privacidad, puede contactarnos a través de nuestra página de contacto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Politica;
