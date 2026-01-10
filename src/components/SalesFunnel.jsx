/**
 * COMPONENTE: SALES FUNNEL (EMBUDO DE VENTAS)
 * -------------------------------------------
 * Este componente representa la Landing Page completa para la venta de productos digitales.
 * Funciona de manera independiente al layout principal (Dashboard) para evitar distracciones.
 * Incluye secciones de: Hero, Beneficios, Prueba Social, Precios y Garantía.
 */
import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Aseguramos que cargue los estilos del funnel
import { SparklesCore } from "./ui/Sparkles";
import { PremiumTestimonials } from "./ui/PremiumTestimonials";

const SalesFunnel = ({ onBack }) => {
  return (
    <div className="sales-funnel-container" style={{ backgroundColor: "#f8fafc", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      {/* Botón flotante para volver al Dashboard (Solo para demo) */}
      <button 
        onClick={onBack} 
        style={{ position: "fixed", top: "20px", left: "20px", zIndex: 9999, padding: "10px 20px", background: "rgba(0,0,0,0.8)", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
      >
        ← Volver al Inicio
      </button>

      {/* 1. HERO: La Promesa Principal */}
      <header className="hero-section relative overflow-hidden" style={{ backgroundColor: "#0f172a", color: "white", padding: "4rem 1rem", textAlign: "center" }}>
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <div className="relative z-10">
          <h1 className="hero-headline" style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "1.5rem", lineHeight: "1.1" }}>Domina tus Finanzas Personales en 30 Días</h1>
          <p className="hero-subheadline" style={{ fontSize: "1.25rem", color: "#cbd5e1", maxWidth: "700px", margin: "0 auto 2.5rem" }}>
            El sistema paso a paso para salir de deudas y empezar a invertir, 
            incluso si no sabes nada de números.
          </p>
          <Link to="/captura" className="cta-button" style={{ backgroundColor: "#4b74ff", color: "white", padding: "1rem 2rem", borderRadius: "8px", textDecoration: "none", fontWeight: "bold", fontSize: "1.1rem", display: "inline-block" }}>
            ¡Quiero Acceder al Curso Ahora!
          </Link>
        </div>
      </header>

      {/* 2. BENEFICIOS */}
      <section className="features-section" style={{ padding: "4rem 1rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
        <div className="product-card" style={{ backgroundColor: "#1e293b", padding: "2rem", borderRadius: "1rem" }}>
          <h3 style={{ color: "white" }}>🧠 Mentalidad Financiera</h3>
          <p style={{ color: "#cbd5e1" }}>Reprograma tu mente para dejar de gastar compulsivamente.</p>
        </div>
        <div className="product-card" style={{ backgroundColor: "#1e293b", padding: "2rem", borderRadius: "1rem" }}>
          <h3 style={{ color: "white" }}>📉 Adiós Deudas</h3>
          <p style={{ color: "#cbd5e1" }}>La estrategia "Bola de Nieve" para eliminar pasivos rápidamente.</p>
        </div>
        <div className="product-card" style={{ backgroundColor: "#1e293b", padding: "2rem", borderRadius: "1rem" }}>
          <h3 style={{ color: "white" }}>🚀 Inversión Joven</h3>
          <p style={{ color: "#cbd5e1" }}>Cómo empezar en bolsa o cripto con poco capital.</p>
        </div>
      </section>

      {/* 3. PRUEBA SOCIAL */}
      <PremiumTestimonials />

      {/* 4. OFERTA Y PRECIO */}
      <section className="pricing-section" style={{ padding: "4rem 1rem", textAlign: "center" }}>
        <div className="price-container" style={{ backgroundColor: "white", padding: "3rem", borderRadius: "1rem", boxShadow: "0 10px 25px rgba(0,0,0,0.1)", maxWidth: "500px", margin: "0 auto" }}>
          <h2>Oferta Especial Limitada</h2>
          <p style={{ color: "#64748b", margin: "1rem 0" }}>Acceso de por vida + Actualizaciones</p>
          <div className="price-amount" style={{ fontSize: "3.5rem", fontWeight: "800", color: "#0f172a", margin: "1rem 0" }}>$47 USD</div>
          <p style={{ textDecoration: "line-through", color: "#94a3b8", marginBottom: "2rem" }}>Precio Normal: $197 USD</p>
          
          <Link to="/captura" className="cta-button" style={{ backgroundColor: "#16a34a", color: "white", padding: "1rem 2rem", borderRadius: "8px", textDecoration: "none", fontWeight: "bold", fontSize: "1.2rem", display: "block", width: "100%" }}>
            Comprar Ahora
          </Link>
          <p style={{ fontSize: "0.8rem", marginTop: "1rem" }}>Pago 100% Seguro vía Hotmart</p>
        </div>
      </section>

      {/* 5. GARANTÍA */}
      <section className="guarantee-section" style={{ backgroundColor: "#0f172a", padding: "3rem 1rem", textAlign: "center", color: "white" }}>
        <span className="guarantee-badge">🛡️</span>
        <h2 style={{color: "white"}}>Garantía de 7 Días</h2>
        <p style={{ maxWidth: "600px", margin: "0 auto", color: "#ccc" }}>Si el contenido no es lo que esperabas, te devolvemos el 100% de tu dinero.</p>
      </section>
    </div>
  );
};

export default SalesFunnel;