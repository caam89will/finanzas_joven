import React from 'react';

const ErroresInversion = () => {
  const hotmartLink = "https://go.hotmart.com/C99765159A";

  return (
    <div className="container" style={{ maxWidth: '800px' }}>
      <article className="card" style={{ padding: '2rem' }}>
        <header>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1.2 }}>5 Errores Comunes (y Costosos) al Empezar a Invertir</h1>
          <p className="lead muted">Descubre por qué la mayoría de los jóvenes pierden dinero en su primer año y cómo evitarlo con una estrategia simple.</p>
          <img 
            src="https://placehold.co/800x400/4f46e5/ffffff?text=Inversión+Inteligente" 
            alt="Errores comunes al invertir" 
            style={{ width: '100%', borderRadius: '0.5rem', margin: '2rem 0' }} 
          />
        </header>

        <div className="content" style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
          <p>Empezar a invertir es emocionante, pero el entusiasmo puede llevar a errores que cuestan caro. Si estás dando tus primeros pasos, es crucial que conozcas las trampas más comunes para que tu dinero trabaje para ti, y no en tu contra.</p>

          <h3 style={{ marginTop: '2rem' }}>Error 1: No tener un plan y seguir la moda</h3>
          <p>Comprar acciones de una empresa solo porque está en las noticias o porque un influencer la mencionó es una receta para el desastre. Sin un plan claro (¿cuál es tu objetivo?, ¿cuál es tu tolerancia al riesgo?), estás apostando, no invirtiendo.</p>

          <h3 style={{ marginTop: '2rem' }}>Error 2: Intentar "ganarle" al mercado (Timing the Market)</h3>
          <p>Nadie, ni siquiera los expertos de Wall Street, puede predecir con certeza los movimientos del mercado a corto plazo. Intentar comprar en el punto más bajo y vender en el más alto es casi imposible. Una estrategia mucho más efectiva es el <strong>Dollar Cost Averaging (DCA)</strong>: invertir una cantidad fija de dinero regularmente, sin importar si el mercado sube o baja.</p>

          <h3 style={{ marginTop: '2rem' }}>Error 3: Poner todos los huevos en una sola canasta</h3>
          <p>Invertir todo tu dinero en una sola acción o criptomoneda es extremadamente arriesgado. La clave para un crecimiento sostenible es la <strong>diversificación</strong>. Invierte en diferentes sectores, geografías y tipos de activos (como ETFs que siguen al S&P 500) para mitigar el riesgo.</p>
          
          <h3 style={{ marginTop: '2rem' }}>Error 4: Dejarse llevar por el pánico o la avaricia</h3>
          <p>El mercado es volátil. Habrá días de grandes ganancias y días de pérdidas. Vender todo cuando el mercado cae por miedo, o comprar masivamente cuando sube por avaricia, son decisiones emocionales que destruyen el patrimonio. Mantén la calma y aférrate a tu plan a largo plazo.</p>

          <h3 style={{ marginTop: '2rem' }}>Error 5: Ignorar las comisiones y los impuestos</h3>
          <p>Pequeñas comisiones pueden devorar una gran parte de tus ganancias a lo largo del tiempo. Elige brokers con bajas comisiones y entiende cómo funcionan los impuestos sobre las ganancias de capital en tu país para optimizar tu rentabilidad.</p>

          <div className="card" style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--brand-50)', border: '1px solid var(--brand-200)', textAlign: 'center' }}>
            <h2 style={{ color: 'var(--brand-600)' }}>¿Quieres la Estrategia Completa?</h2>
            <p className="muted" style={{ margin: '1rem 0' }}>En nuestra guía premium te enseñamos el método exacto para construir un portafolio de inversión rentable desde cero, evitando todos estos errores y más.</p>
            <a href={hotmartLink} target="_blank" rel="noopener noreferrer" className="btn btn--primary" style={{ fontSize: '1.1rem', padding: '0.8rem 1.5rem' }}>
              Descargar la Guía Ahora
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ErroresInversion;