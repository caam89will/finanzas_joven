/**
 * PÁGINA DE APPS Y HERRAMIENTAS
 * -----------------------------
 * Muestra un ranking o lista de aplicaciones recomendadas.
 * Utiliza tarjetas para destacar cada aplicación con su valoración.
 */
import React from "react";

const Apps = () => {
  return (
    <div className="container">
      <header className="section-head">
        <h1>Mejores Apps Financieras 2025</h1>
        <p className="sub">Herramientas digitales para invertir y controlar gastos desde tu móvil</p>
      </header>

      <div className="grid cols-2" style={{ marginTop: '1rem' }}>
        {/* Tarjeta de App 1 */}
        <div className="card">
          <div className="card-head">
            <h3 className="card-title">Fintonic</h3>
            <span className="badge badge--neutral">⭐ 4.5/5</span>
          </div>
          <p className="muted">Sincroniza tus bancos y recibe alertas de gastos y comisiones.</p>
          <div style={{ marginTop: '1rem' }}>
            <a href="#" className="btn btn--primary">Descargar App</a>
          </div>
        </div>

        {/* Tarjeta de App 2 */}
        <div className="card">
          <div className="card-head">
            <h3 className="card-title">Binance</h3>
            <span className="badge badge--neutral">⭐ 4.8/5</span>
          </div>
          <p className="muted">La plataforma líder para compra y venta de criptomonedas.</p>
          <div style={{ marginTop: '1rem' }}>
            <a href="#" className="btn btn--primary">Ver Oferta</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;
