import React from 'react';

const Terminos = () => {
  return (
    <div className="container" style={{ maxWidth: '800px', padding: '2rem 1rem' }}>
      <div className="card">
        <header className="section-head" style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
          <h2>Términos y Condiciones</h2>
          <p className="sub">Última actualización: {new Date().toLocaleDateString()}</p>
        </header>

        <div style={{ lineHeight: '1.7', color: 'var(--text)' }}>
          <p style={{ marginBottom: '1rem' }}>
            Bienvenido a <strong>Finanzas Jóvenes</strong>. Al utilizar nuestro sitio web, usted acepta las siguientes condiciones de uso.
          </p>

          <div className="alert" style={{ backgroundColor: 'var(--brand-50)', borderLeft: '4px solid var(--warning)', padding: '1rem', margin: '1.5rem 0', borderRadius: '4px' }}>
            <strong style={{ color: 'var(--warning)', display: 'block', marginBottom: '0.5rem' }}>Descargo de Responsabilidad (Disclaimer)</strong>
            <p className="muted" style={{ fontSize: '0.95rem', margin: 0 }}>
              El contenido de este sitio es solo para fines educativos e informativos. <strong>No constituye asesoramiento financiero profesional.</strong> Las inversiones conllevan riesgos. Consulte siempre a un profesional certificado antes de tomar decisiones con su dinero.
            </p>
          </div>

          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem' }}>1. Propiedad Intelectual</h3>
          <p className="muted" style={{ marginBottom: '1rem' }}>
            Todo el contenido original (textos, calculadoras, guías) es propiedad de Finanzas Jóvenes. No está permitida su reproducción comercial sin nuestro consentimiento escrito.
          </p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem' }}>2. Uso del Sitio</h3>
          <p className="muted" style={{ marginBottom: '1rem' }}>
            Usted se compromete a utilizar este sitio web únicamente con fines legales y de manera que no infrinja los derechos de terceros ni restrinja el uso del sitio por parte de otros.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terminos;
