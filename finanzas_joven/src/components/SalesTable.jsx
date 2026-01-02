/**
 * COMPONENTE: TABLA DE VENTAS
 * ---------------------------
 * Visualiza un listado de transacciones o ventas recientes en formato tabular.
 * Importa los datos dinámicamente desde un archivo externo.
 */
// src/components/SalesTable.jsx
import React from "react";
import { sales } from "../data/sales"; // <- Datos dinámicos

const SalesTable = () => {
  return (
    <section aria-labelledby="tabla-ventas">
      <h3 id="tabla-ventas">Resumen de ventas recientes</h3>
      <div className="table-wrap">
        <table className="table" aria-describedby="tabla-ventas-desc">
          <thead>
            <tr>
              <th>Producto</th>
              <th className="num">Unidades</th>
              <th className="num">Ingreso</th>
              <th>Canal</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((item, idx) => (
              <tr key={idx}>
                <td>{item.product}</td>
                <td className="num">{item.units}</td>
                <td className="num">{item.income}</td>
                <td>{item.channel}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SalesTable;
