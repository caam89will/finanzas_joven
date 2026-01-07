import React from 'react';

const Politica = () => {
  return (
    <div className="container" style={{ maxWidth: '800px', padding: '2rem 1rem' }}>
      <div className="card">
        <header className="section-head" style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
          <h2>Política de Privacidad</h2>
          <p className="sub">Última actualización: {new Date().toLocaleDateString()}</p>
        </header>

        <div style={{ lineHeight: '1.7', color: 'var(--text)' }}>
          <p style={{ marginBottom: '1rem' }}>
            En <strong>Finanzas Jóvenes</strong>, valoramos su privacidad. Esta política explica de manera clara cómo manejamos su información personal.
          </p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem' }}>1. Recopilación de Datos</h3>
          <p className="muted" style={{ marginBottom: '1rem' }}>
            Recopilamos información que usted nos proporciona directamente (por ejemplo, al usar el formulario de contacto) y datos automáticos de navegación mediante cookies para mejorar la funcionalidad del sitio.
          </p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem' }}>2. Uso de la Información</h3>
          <p className="muted" style={{ marginBottom: '1rem' }}>
            Utilizamos sus datos exclusivamente para responder a sus consultas, mejorar nuestro contenido y, si se suscribe, enviarle novedades financieras. No vendemos ni compartimos su información con terceros.
          </p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem' }}>3. Enlaces y Afiliados</h3>
          <p className="muted" style={{ marginBottom: '1rem' }}>
            Este sitio puede contener enlaces de afiliados (como Hotmart). Si realiza una compra a través de ellos, podemos recibir una comisión sin costo extra para usted. No nos hacemos responsables de las políticas de privacidad de sitios externos.
          </p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem' }}>4. Contacto</h3>
          <p className="muted">
            Si tiene dudas sobre esta política, puede escribirnos a través de nuestra sección de contacto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Politica;
