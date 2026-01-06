import React from 'react';

const IngresosPasivos = () => {
  const hotmartLink = "https://go.hotmart.com/C99765159A";

  return (
    <div className="container" style={{ maxWidth: '800px' }}>
      <article className="card" style={{ padding: '2rem' }}>
        <header>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1.2 }}>3 Formas Realistas de Generar Ingresos Pasivos desde Casa</h1>
          <p className="lead muted">Ideas probadas para generar un flujo de efectivo extra utilizando herramientas digitales y marketing de afiliados.</p>
          <img 
            src="https://placehold.co/800x400/f59e0b/ffffff?text=Ingresos+Online" 
            alt="Generar ingresos pasivos" 
            style={{ width: '100%', borderRadius: '0.5rem', margin: '2rem 0' }} 
          />
        </header>

        <div className="content" style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
          <p>El sueño de "ganar dinero mientras duermes" es posible, pero no es magia. Requiere un trabajo inicial inteligente. Aquí te mostramos tres modelos de negocio que puedes empezar hoy con pocas barreras de entrada.</p>

          <h3 style={{ marginTop: '2rem' }}>1. Marketing de Afiliados (El modelo para principiantes)</h3>
          <p>Consiste en promocionar productos de otras personas (físicos o digitales) y ganar una comisión por cada venta realizada a través de tu enlace único. No necesitas crear un producto, gestionar inventario ni dar soporte al cliente.</p>
          <p style={{ marginTop: '1rem' }}><strong>¿Cómo empezar?</strong> Elige un nicho que te apasione (fitness, finanzas, cocina), crea contenido de valor en redes como TikTok o un blog, y recomienda productos que realmente uses y confíes. Plataformas como <strong>Hotmart</strong> son ideales para encontrar productos digitales con altas comisiones.</p>

          <h3 style={{ marginTop: '2rem' }}>2. Creación de un Producto Digital</h3>
          <p>Si tienes un conocimiento o habilidad específica, puedes empaquetarlo y venderlo. Esto tiene un potencial de ingresos enorme porque lo creas una vez y lo vendes infinitas veces.</p>
          <ul style={{ marginTop: '1rem' }}>
            <li><strong>Ebooks:</strong> Guías cortas sobre un tema específico.</li>
            <li><strong>Plantillas:</strong> De Notion, Excel, o para redes sociales.</li>
            <li><strong>Cursos online:</strong> El formato más rentable, donde enseñas paso a paso una habilidad.</li>
          </ul>

          <h3 style={{ marginTop: '2rem' }}>3. Inversión en Activos que pagan Dividendos</h3>
          <p>Esta es la forma más pasiva de todas. Al comprar acciones de empresas estables (como Coca-Cola o Microsoft) o ETFs de dividendos, recibes una parte de sus ganancias trimestralmente. Es dinero que llega a tu cuenta sin que hagas nada, y que puedes reinvertir para acelerar el efecto bola de nieve.</p>

          <div className="card" style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--brand-50)', border: '1px solid var(--brand-200)', textAlign: 'center' }}>
            <h2 style={{ color: 'var(--brand-600)' }}>¿Listo para Empezar con el Marketing de Afiliados?</h2>
            <p className="muted" style={{ margin: '1rem 0' }}>Nuestra guía premium es un curso completo que te lleva de cero a tu primera venta como afiliado, mostrándote las estrategias exactas que usamos para generar ingresos desde casa.</p>
            <a href={hotmartLink} target="_blank" rel="noopener noreferrer" className="btn btn--primary" style={{ fontSize: '1.1rem', padding: '0.8rem 1.5rem' }}>
              Ver el Curso Completo
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default IngresosPasivos;