import React from 'react';

const Metodo503020 = () => {
  const hotmartLink = "https://go.hotmart.com/C99765159A";

  return (
    <div className="container" style={{ maxWidth: '800px' }}>
      <article className="card" style={{ padding: '2rem' }}>
        <header>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1.2 }}>El Método 50/30/20: La Guía Definitiva para Organizar tu Dinero</h1>
          <p className="lead muted">La regla de oro para organizar tus finanzas personales sin dejar de disfrutar tu vida social los fines de semana.</p>
          <img 
            src="https://placehold.co/800x400/10b981/ffffff?text=Presupuesto+Simple" 
            alt="Método 50/30/20" 
            style={{ width: '100%', borderRadius: '0.5rem', margin: '2rem 0' }} 
          />
        </header>

        <div className="content" style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
          <p>¿Sientes que el dinero se te escapa de las manos cada mes? La regla 50/30/20 es un sistema de presupuesto simple y poderoso que te ayuda a tomar el control de tus finanzas sin necesidad de hojas de cálculo complicadas.</p>

          <h3 style={{ marginTop: '2rem' }}>La Regla Desglosada</h3>
          <p>La idea es dividir tus ingresos netos (después de impuestos) en tres categorías:</p>
          
          <ul style={{ listStyleType: 'none', padding: 0, marginTop: '1.5rem', display: 'grid', gap: '1.5rem' }}>
            <li className="card" style={{ padding: '1.5rem' }}>
              <strong style={{ color: 'var(--brand-500)', fontSize: '1.5rem' }}>50% para Necesidades</strong>
              <p className="muted" style={{ marginTop: '0.5rem' }}>Gastos esenciales que no puedes evitar. Esto incluye: arriendo o hipoteca, cuentas de servicios (luz, agua, internet), transporte para ir a trabajar, y comida básica.</p>
            </li>
            <li className="card" style={{ padding: '1.5rem' }}>
              <strong style={{ color: 'var(--success)', fontSize: '1.5rem' }}>30% para Deseos</strong>
              <p className="muted" style={{ marginTop: '0.5rem' }}>Todo lo que hace la vida más divertida, pero que no es estrictamente necesario. Aquí entran las salidas con amigos, suscripciones a Netflix, ropa nueva, viajes y hobbies.</p>
            </li>
            <li className="card" style={{ padding: '1.5rem' }}>
              <strong style={{ color: 'var(--warning)', fontSize: '1.5rem' }}>20% para Ahorro e Inversión</strong>
              <p className="muted" style={{ marginTop: '0.5rem' }}>Esta es la parte más importante para tu futuro. Este dinero se destina a pagar deudas (más allá del pago mínimo), crear un fondo de emergencia, y lo más importante, invertir para tu jubilación o metas a largo plazo.</p>
            </li>
          </ul>

          <h3 style={{ marginTop: '2rem' }}>¿Cómo empezar a aplicarlo?</h3>
          <p>Calcula tu ingreso mensual neto. Si ganas $1,000, destinarías $500 a necesidades, $300 a deseos y $200 a ahorro/inversión. Si tus necesidades superan el 50%, es una señal de que necesitas reducir gastos fijos o buscar formas de aumentar tus ingresos.</p>

          <div className="card" style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--brand-50)', border: '1px solid var(--brand-200)', textAlign: 'center' }}>
            <h2 style={{ color: 'var(--brand-600)' }}>¿Quieres un Sistema Automático para esto?</h2>
            <p className="muted" style={{ margin: '1rem 0' }}>Nuestra guía premium incluye plantillas y estrategias para automatizar tus finanzas, para que el dinero se mueva solo a las categorías correctas cada mes.</p>
            <a href={hotmartLink} target="_blank" rel="noopener noreferrer" className="btn btn--primary" style={{ fontSize: '1.1rem', padding: '0.8rem 1.5rem' }}>
              Quiero Automatizar mis Finanzas
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Metodo503020;