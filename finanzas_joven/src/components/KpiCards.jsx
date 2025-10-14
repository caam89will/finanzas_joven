// src/components/KpiCards.jsx
import React from "react";
import { kpis } from "../data/kpis"; // <- Aquí importas tus datos

const KpiCards = () => {
  return (
    <section className="kpi" aria-label="Indicadores principales">
      {kpis.map((item) => (
        <div key={item.label} className="tile card">
          <div className="label">{item.label}</div>
          <div className="value">{item.value}</div>
          <div className={`delta ${item.trend}`}>{item.delta}</div>
        </div>
      ))}
    </section>
  );
};

export default KpiCards;
