/**
 * COMPONENTE PRINCIPAL (LAYOUT)
 * -----------------------------
 * Este componente actúa como el "esqueleto" de la aplicación.
 * Contiene:
 * 1. La barra lateral (Sidebar) fija.
 * 2. El encabezado (Header) fijo.
 * 3. El área de contenido dinámico (<Routes>) que cambia según la página.
 * 4. El pie de página (Footer) común.
 */
import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './index.css';

// Importación de las páginas individuales
import Home from './pages/Home';
import Blog from './pages/Blog';
import Ahorro from './pages/Ahorro';
import Apps from './pages/App'; // Nota: El archivo se llama App.jsx en la carpeta pages
import Contacto from './pages/Contacto';
import Politica from './pages/Politica';
import Terminos from './pages/Terminos';

function App() {
  // Estado para el año actual en el footer
  const [year, setYear] = useState(new Date().getFullYear());
  
  // Hook para saber en qué ruta estamos y resaltar el menú
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'active' : '';

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="shell" role="application">
      {/* SIDEBAR */}
      <aside className="sidebar" aria-label="Navegación principal">
        <div className="brand" aria-hidden="true">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect width="24" height="24" rx="6" fill="#4b74ff"></rect>
          </svg>
          <span>Finanzas Jóvenes</span>
        </div>

        <nav className="nav" aria-label="Menú principal">
          {/* Usamos Link en lugar de <a> para navegación SPA (sin recarga) */}
          <Link to="/" className={isActive('/')}>Inicio</Link>
          <Link to="/blog" className={isActive('/blog')}>Blog</Link>
          <Link to="/ahorro" className={isActive('/ahorro')}>Ahorro</Link>
          <Link to="/apps" className={isActive('/apps')}>Apps</Link>
          <Link to="/contacto" className={isActive('/contacto')}>Contacto</Link>
        </nav>

        <hr style={{ margin: '1rem 0', borderColor: 'var(--border)' }} />

        <div className="card" style={{ marginTop: '1rem' }}>
          <div className="card-head"><div className="card-title">Guía recomendada</div></div>
          <p className="muted" style={{ fontSize: '.95rem' }}>Descarga mi guía paso a paso para comenzar hoy mismo.</p>
          <a className="btn btn--primary" href="https://go.hotmart.com/C99765159A" rel="noopener noreferrer" target="_blank">Descargar guía</a>
        </div>
      </aside>

      {/* MAIN */}
      <main className="main" id="mainContent" tabIndex="-1">
        {/* HEADER */}
        <header className="header" role="banner">
          <div className="header-inner container">
            <div style={{ display: 'flex', gap: '.75rem', alignItems: 'center' }}>
              <button className="btn btn--ghost" aria-label="Abrir menú">☰</button>
              <div>
                <h1 style={{ fontSize: '1.05rem', margin: 0 }}>💰 Gana Dinero por Internet</h1>
                <div className="muted" style={{ fontSize: '.85rem' }}>Estrategias para emprender desde casa</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '.75rem', alignItems: 'center', width: '100%', maxWidth: '640px' }}>
              <form role="search" className="search" action="/search" method="get" aria-label="Buscar en el sitio">
                <span className="icon" aria-hidden="true">🔍</span>
                <input name="q" type="search" placeholder="Buscar guías, herramientas..." aria-label="Buscar guías, herramientas" />
              </form>

              <div style={{ display: 'flex', gap: '.5rem' }}>
                <Link className="btn btn--secondary" to="/apps">Herramientas</Link>
                <a className="btn btn--primary" href="https://go.hotmart.com/C99765159A" rel="noopener noreferrer" target="_blank">Comprar guía</a>
              </div>
            </div>
          </div>
        </header>

        {/* ÁREA DE CONTENIDO DINÁMICO */}
        <div className="content container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/ahorro" element={<Ahorro />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/politica-privacidad" element={<Politica />} />
            <Route path="/terminos" element={<Terminos />} />
          </Routes>
        </div>

        {/* FOOTER */}
        <footer className="footer" role="contentinfo">
          <div className="container footer-grid">
            <div className="footer-section">
              <h5>Recursos</h5>
              <ul>
                <li><Link to="/blog">Blog Financiero</Link></li>
                <li><a href="/glosario">Glosario</a></li>
                <li><a href="/calculadoras">Calculadoras</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h5>Legal</h5>
              <ul>
                <li><Link to="/politica-privacidad">Privacidad</Link></li>
                <li><Link to="/terminos">Términos</Link></li>
                <li><a href="/afiliacion">Afiliados</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h5>Síguenos</h5>
              <p className="muted">Consejos diarios, ofertas y novedades.</p>
              <div className="social-links" style={{ display: 'flex', gap: '.5rem', marginTop: '.5rem' }}>
                <a href="#" aria-label="Instagram" rel="noopener noreferrer"><img src="/instagram-icon.svg" alt="Instagram" width="28" height="28" /></a>
                <a href="#" aria-label="TikTok" rel="noopener noreferrer"><img src="/tiktok-icon.svg" alt="TikTok" width="28" height="28" /></a>
                <a href="#" aria-label="WhatsApp" rel="noopener noreferrer"><img src="/whatsapp-icon.svg" alt="WhatsApp" width="28" height="28" /></a>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <small className="muted">&copy; <span id="currentYear">{year}</span> Finanzas Jóvenes. Todos los derechos reservados.</small>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;