import React from "react";
import "../App.css"; // Aseguramos que cargue los estilos del funnel

const SalesFunnel = ({ onBack }) => {
  const AFFILIATE_LINK = "#"; // Coloca aquí tu enlace de Hotmart/Clickbank

  return (
    <div className="sales-funnel-container" style={{ backgroundColor: "white", minHeight: "100vh" }}>
      {/* Botón flotante para volver al Dashboard (Solo para demo) */}
      <button 
        onClick={onBack} 
        style={{ position: "fixed", top: "20px", left: "20px", zIndex: 9999, padding: "10px 20px", background: "rgba(0,0,0,0.8)", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
      >
        ← Volver al Inicio
      </button>

      {/* 1. HERO: La Promesa Principal */}
      <header className="hero-section">
        <h1 className="hero-headline">Domina tus Finanzas Personales en 30 Días</h1>
        <p className="hero-subheadline">
          El sistema paso a paso para salir de deudas y empezar a invertir, 
          incluso si no sabes nada de números.
        </p>
        <a href={AFFILIATE_LINK} className="cta-button">
          ¡Quiero Acceder al Curso Ahora!
        </a>
      </header>

      {/* 2. BENEFICIOS */}
      <section className="features-section">
        <div className="product-card">
          <h3>🧠 Mentalidad Financiera</h3>
          <p>Reprograma tu mente para dejar de gastar compulsivamente.</p>
        </div>
        <div className="product-card">
          <h3>📉 Adiós Deudas</h3>
          <p>La estrategia "Bola de Nieve" para eliminar pasivos rápidamente.</p>
        </div>
        <div className="product-card">
          <h3>🚀 Inversión Joven</h3>
          <p>Cómo empezar en bolsa o cripto con poco capital.</p>
        </div>
      </section>

      {/* 3. PRUEBA SOCIAL */}
      <section className="testimonials-section">
        <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "white" }}>Lo que dicen nuestros estudiantes</h2>
        <div className="features-section">
          <div className="testimonial-card">
            <p>"Pensé que invertir era solo para ricos. Este curso me abrió los ojos."</p>
            <br/>
            <strong>- Carlos M.</strong>
          </div>
          <div className="testimonial-card">
            <p>"Pagué mis tarjetas de crédito en 3 meses siguiendo el módulo 2."</p>
            <br/>
            <strong>- Sofia L.</strong>
          </div>
        </div>
      </section>

      {/* 4. OFERTA Y PRECIO */}
      <section className="pricing-section">
        <div className="price-container">
          <h2>Oferta Especial Limitada</h2>
          <p>Acceso de por vida + Actualizaciones</p>
          <div className="price-amount">$47 USD</div>
          <p style={{ textDecoration: "line-through", color: "#888" }}>Precio Normal: $197 USD</p>
          
          <a href={AFFILIATE_LINK} className="cta-button" style={{ width: "100%", boxSizing: "border-box", textAlign: "center" }}>
            Comprar Ahora
          </a>
          <p style={{ fontSize: "0.8rem", marginTop: "1rem" }}>Pago 100% Seguro vía Hotmart</p>
        </div>
      </section>

      {/* 5. GARANTÍA */}
      <section className="guarantee-section">
        <span className="guarantee-badge">🛡️</span>
        <h2 style={{color: "white"}}>Garantía de 7 Días</h2>
        <p style={{ maxWidth: "600px", margin: "0 auto", color: "#ccc" }}>Si el contenido no es lo que esperabas, te devolvemos el 100% de tu dinero.</p>
      </section>
    </div>
  );
};

export default SalesFunnel;