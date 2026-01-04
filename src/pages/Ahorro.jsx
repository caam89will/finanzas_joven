/**
 * PÁGINA DE AHORRO
 * ----------------
 * Lista consejos prácticos para el ahorro.
 * Utiliza una lista estilizada para presentar la información de forma clara.
 */
import React from "react";

const Ahorro = () => {
  return (
    <div className="container">
      <header className="section-head">
        <h2>Consejos de Ahorro para Jóvenes</h2>
        <p className="sub">Aprende las estrategias básicas para administrar tu dinero eficientemente</p>
      </header>
      
      <section className="card" style={{ marginTop: '1rem' }}>
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1.5rem' }}>
          <li style={{ display: 'flex', gap: '1rem' }}>
            <span style={{ fontSize: '1.5rem' }}>📌</span>
            <div>
              <h4>Presupuesto mensual</h4>
              <p className="muted">Crea y mantén un presupuesto detallado de tus ingresos y gastos.</p>
            </div>
          </li>
          <li style={{ display: 'flex', gap: '1rem' }}>
            <span style={{ fontSize: '1.5rem' }}>💰</span>
            <div>
              <h4>Ahorro automático</h4>
              <p className="muted">Destina mínimo el 10% de tus ingresos a ahorros antes de cualquier gasto.</p>
            </div>
          </li>
          {/* Más consejos... */}
        </ul>
      </section>
    </div>
  );
};

export default Ahorro;
