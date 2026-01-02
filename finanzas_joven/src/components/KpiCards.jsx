/**
 * COMPONENTE: TARJETAS KPI (INDICADORES CLAVE)
 * --------------------------------------------
 * Muestra métricas importantes (como ingresos, visitas, conversiones) en tarjetas
 * resumidas. Itera sobre un array de datos para generar las tarjetas automáticamente.
 */
// src/components/KpiCards.jsx
import React from "react";
import { kpis } from "../data/kpis"; // <- Aquí importas tus datos

const KpiCards = () => {
  return (
    <section className="kpi-grid" aria-label="Indicadores Financieros">
      {kpis.map((item) => (
        <div key={item.label} className="stat-card">
          <div className="stat-label">{item.label}</div>
          <div className="stat-value">{item.value}</div>
          <div className={`stat-delta ${item.trend === 'up' ? 'positive' : 'negative'}`}>
            {item.trend === 'up' ? '▲' : '▼'} {item.delta}
          </div>
        </div>
      ))}
    </section>
  );
};

export default KpiCards;
