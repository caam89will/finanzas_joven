// src/components/KPISection.jsx
import React from "react";

function KPISection() {
  const kpis = [
    { label: "Ingresos mensuales", value: "$420.000", delta: "+12% mes", type: "up" },
    { label: "Leads captados", value: "1.245", delta: "+8% semana", type: "up" },
    { label: "Tasa de conversión", value: "3.9%", delta: "-0.3%", type: "down" },
    { label: "Valor promedio", value: "$14.900", delta: "+1.2%", type: "up" },
  ];

  return (
    <section className="kpi grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
      {kpis.map((kpi, i) => (
        <div key={i} className="tile card p-4 bg-white rounded shadow">
          <div className="label text-gray-500">{kpi.label}</div>
          <div className="value font-bold text-lg">{kpi.value}</div>
          <div className={`delta ${kpi.type === "up" ? "text-green-600" : "text-red-600"}`}>{kpi.delta}</div>
        </div>
      ))}
    </section>
  );
}

export default KPISection;
