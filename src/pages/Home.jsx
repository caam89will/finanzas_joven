/**
 * PÁGINA DE INICIO (DASHBOARD)
 * ----------------------------
 * Muestra la vista principal con:
 * - Hero section (llamada a la acción principal).
 * - KPIs (Indicadores clave de rendimiento).
 * - Tabla de ventas recientes.
 * - Formulario de newsletter.
 */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // Estado para el formulario de newsletter
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState(null);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!email) {
      setMsg({ text: 'Introduce un correo válido.', type: 'error' });
      return;
    }
    setMsg({ text: '¡Gracias! Revisa tu correo para confirmar la suscripción.', type: 'success' });
    setEmail('');
    setTimeout(() => setMsg(null), 3000);
  };

  return (
    <>
      {/* HERO */}
      <section className="card hero" aria-label="Hero — presentación principal">
        <div className="section-head" style={{ alignItems: 'center' }}>
          <div>
            <h2>Aprende a ganar dinero por internet <span className="muted" style={{ fontWeight: 600, display: 'block', fontSize: '.95rem' }}>sin invertir y paso a paso</span></h2>
            <p className="lead muted">Guía creada por una madre emprendedora que utiliza herramientas gratuitas e inteligencia artificial para generar ingresos desde casa.</p>
            <div style={{ display: 'flex', gap: '.6rem', marginTop: '.75rem', flexWrap: 'wrap' }}>
              <a href="https://go.hotmart.com/C99765159A" className="btn btn--primary" rel="noopener noreferrer" target="_blank">Consigue tu Guía</a>
              <Link to="/apps" className="btn btn--secondary">Ver herramientas gratuitas</Link>
            </div>
          </div>
          <figure style={{ width: '48%', margin: 0 }}>
            <img src="/img/portada.png" alt="Portada" width="720" height="480" style={{ borderRadius: '.75rem', border: '1px solid var(--border)' }} />
          </figure>
        </div>
      </section>

      {/* KPI */}
      <section className="kpi" aria-label="Indicadores principales" style={{ marginTop: '.25rem' }}>
        <div className="tile card">
          <div className="label">Ingresos mensuales</div>
          <div className="value">$420.000</div>
          <div className="delta up">+12% mes</div>
        </div>
        <div className="tile card">
          <div className="label">Leads captados</div>
          <div className="value">1.245</div>
          <div className="delta up">+8% semana</div>
        </div>
        <div className="tile card">
          <div className="label">Tasa de conversión</div>
          <div className="value">3.9%</div>
          <div className="delta down">-0.3%</div>
        </div>
        <div className="tile card">
          <div className="label">Valor promedio</div>
          <div className="value">$14.900</div>
          <div className="delta up">+1.2%</div>
        </div>
      </section>

      {/* Recursos */}
      <section aria-labelledby="recursos" style={{ marginTop: '1rem' }}>
        <div className="section-head">
          <h2 id="recursos">Guías y recursos</h2>
          <div className="sub">Recursos seleccionados para comenzar hoy</div>
        </div>
        <div className="grid cols-3" style={{ marginTop: '1rem' }}>
          <article className="content-card card">
            <div className="card-head"><h3 className="card-title">12 formas de ganar dinero</h3></div>
            <p className="muted">Lista práctica con pasos diarios. Ideal para comenzar sin inversión.</p>
            <div style={{ marginTop: '.75rem', display: 'flex', gap: '.5rem' }}>
              <Link className="btn btn--ghost" to="/blog">Leer</Link>
              <a className="btn btn--primary" href="https://go.hotmart.com/C99765159A" target="_blank">Descargar</a>
            </div>
          </article>
          {/* Más tarjetas... */}
        </div>
      </section>

      {/* Tabla de Ventas */}
      <section aria-labelledby="tabla-ventas" style={{ marginTop: '1rem' }}>
        <h3 id="tabla-ventas">Resumen de ventas recientes</h3>
        <div className="table-wrap" style={{ marginTop: '.5rem' }}>
          <table className="table">
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
              <tr>
                <td>Guía "Emprende Ya"</td>
                <td className="num">120</td>
                <td className="num">$1.788.000</td>
                <td>Hotmart</td>
                <td><span className="badge badge--neutral">Activo</span></td>
              </tr>
              {/* Más filas... */}
            </tbody>
          </table>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="card" style={{ marginTop: '1rem' }}>
        <h4>Suscríbete para consejos diarios</h4>
        <form className="form" onSubmit={handleNewsletter}>
          <label className="label" htmlFor="email">Correo electrónico</label>
          <input 
            id="email" 
            className="input" 
            type="email" 
            placeholder="tucorreo@ejemplo.com" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div style={{ display: 'flex', gap: '.5rem' }}>
            <button type="submit" className="btn btn--primary">Recibir consejos</button>
          </div>
          {msg && <div className={msg.type === 'error' ? 'error' : 'success'}>{msg.text}</div>}
        </form>
      </section>
    </>
  );
};

export default Home;
