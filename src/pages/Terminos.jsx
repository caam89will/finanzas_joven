import React from 'react';

const Terminos = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Términos y Condiciones</h1>
        <div className="text-gray-600 leading-relaxed">
          <p className="mb-4 text-sm text-gray-500">Última actualización: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">1. Aceptación de los Términos</h2>
          <p className="mb-4">
            Al acceder y utilizar el sitio web <strong>Finanzas Jóvenes</strong>, usted acepta estar sujeto a estos términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, le rogamos que no utilice nuestros servicios.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">2. Descargo de Responsabilidad Financiera (Disclaimer)</h2>
          <p className="mb-4 bg-yellow-50 p-4 border-l-4 border-yellow-400 text-yellow-800 rounded-r">
            <strong>Importante:</strong> El contenido proporcionado en este sitio web es solo para fines informativos, educativos y de entretenimiento. <strong>No constituye asesoramiento financiero profesional.</strong> Las inversiones conllevan riesgos. Antes de tomar cualquier decisión financiera importante, le recomendamos consultar con un asesor financiero certificado. Finanzas Jóvenes no se hace responsable de las pérdidas o daños resultantes de la confianza en la información proporcionada en este sitio.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">3. Propiedad Intelectual</h2>
          <p className="mb-4">
            El servicio y su contenido original (excluyendo el contenido proporcionado por usuarios), características y funcionalidad son y seguirán siendo propiedad exclusiva de Finanzas Jóvenes y sus licenciantes. El contenido no puede ser reproducido, duplicado, copiado, vendido o explotado con fines comerciales sin nuestro consentimiento expreso por escrito.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">4. Enlaces a Otros Sitios Web</h2>
          <p className="mb-4">
            Nuestro servicio puede contener enlaces a sitios web o servicios de terceros que no son propiedad ni están controlados por Finanzas Jóvenes. No tenemos control sobre, y no asumimos responsabilidad por, el contenido, las políticas de privacidad o las prácticas de sitios web o servicios de terceros.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">5. Conducta del Usuario</h2>
          <p className="mb-4">
            Usted acepta utilizar el sitio web solo para fines legales y de una manera que no infrinja los derechos de, restrinja o inhiba el uso y disfrute del sitio web por parte de cualquier tercero.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">6. Modificaciones</h2>
          <p className="mb-4">
            Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos Términos en cualquier momento. Es su responsabilidad revisar estos Términos periódicamente para ver si hay cambios. El uso continuado del sitio web después de cualquier cambio constituye su aceptación de los nuevos Términos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Terminos;
