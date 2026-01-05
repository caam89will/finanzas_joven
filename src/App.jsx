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
import Blog from './pages/BlogList';
import Ahorro from './pages/Ahorro';
import Apps from './pages/App'; // Nota: El archivo se llama App.jsx en la carpeta pages
import Calculadora from './pages/Calculadora';
import Contacto from './pages/Contacto';
import Politica from './pages/Politica';
import Terminos from './pages/Terminos';

function App() {
  // Estado para el año actual en el footer
  const [year, setYear] = useState(new Date().getFullYear());
  
  // Hook para saber en qué ruta estamos y resaltar el menú
  const location = useLocation();

  useEffect(() => {
    setYear(new Date().getFullYear());

    // --- Google Analytics (GA4) ---
    // REEMPLAZA 'G-XXXXXXXXXX' CON TU ID DE MEDICIÓN REAL
    const GA_ID = 'G-XXXXXXXXXX';

    if (!document.getElementById('ga-script')) {
      const script = document.createElement('script');
      script.id = 'ga-script';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(script);

      const scriptConfig = document.createElement('script');
      scriptConfig.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
      `;
      document.head.appendChild(scriptConfig);
    }
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* NAVBAR SUPERIOR PROFESIONAL */}
      <header style={{ backgroundColor: '#0f172a', borderBottom: '1px solid #1e293b', position: 'sticky', top: 0, zIndex: 50, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          
          {/* BRAND */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect width="24" height="24" rx="6" fill="#4b74ff"></rect>
            </svg>
            <span style={{ color: 'white', fontWeight: '700', fontSize: '1.25rem', letterSpacing: '-0.5px' }}>
              Finanzas Jóvenes
            </span>
          </Link>

          {/* NAV LINKS */}
          <nav style={{ display: 'flex', gap: '32px' }}>
            {[
              { path: '/', label: 'Inicio' },
              { path: '/blog', label: 'Blog' },
              { path: '/ahorro', label: 'Inversiones' },
              { path: '/apps', label: 'Herramientas' },
              { path: '/calculadoras', label: 'Calculadoras' },
              { path: '/contacto', label: 'Contacto' }
            ].map(link => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.path}
                  to={link.path}
                  style={{ 
                    color: isActive ? '#4b74ff' : '#94a3b8',
                    textDecoration: 'none',
                    fontWeight: isActive ? '600' : '500',
                    fontSize: '0.95rem',
                    transition: 'color 0.2s'
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA BUTTON */}
          <div>
             <a 
               href="https://go.hotmart.com/C99765159A" 
               target="_blank" 
               rel="noopener noreferrer"
               className="btn btn--primary"
               style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem', borderRadius: '8px' }}
             >
               Acceso Premium
             </a>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main style={{ flex: 1 }}>

        {/* ÁREA DE CONTENIDO DINÁMICO */}
        <div className="content container" style={{ padding: '2rem 0' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/ahorro" element={<Ahorro />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/calculadoras" element={<Calculadora />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/politica-privacidad" element={<Politica />} />
            <Route path="/terminos" element={<Terminos />} />
          </Routes>
        </div>
      </main>

        {/* FOOTER */}
        <footer className="footer" role="contentinfo" style={{ backgroundColor: 'white', borderTop: '1px solid var(--border)' }}>
          <div className="container">
            <div className="grid cols-3" style={{ textAlign: 'left', marginBottom: '2rem' }}>
              <div>
                <h5 style={{ marginBottom: '1rem', color: 'var(--text)', fontWeight: 'bold' }}>Recursos</h5>
                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '.5rem' }}>
                  <li><Link to="/blog" style={{ textDecoration: 'none', color: 'var(--muted)' }}>Blog Financiero</Link></li>
                  <li><a href="/glosario" style={{ textDecoration: 'none', color: 'var(--muted)' }}>Glosario</a></li>
                  <li><Link to="/calculadoras" style={{ textDecoration: 'none', color: 'var(--muted)' }}>Calculadoras</Link></li>
                </ul>
              </div>

              <div>
                <h5 style={{ marginBottom: '1rem', color: 'var(--text)', fontWeight: 'bold' }}>Legal</h5>
                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '.5rem' }}>
                  <li><Link to="/politica-privacidad" style={{ textDecoration: 'none', color: 'var(--muted)' }}>Privacidad</Link></li>
                  <li><Link to="/terminos" style={{ textDecoration: 'none', color: 'var(--muted)' }}>Términos</Link></li>
                  <li><a href="/afiliacion" style={{ textDecoration: 'none', color: 'var(--muted)' }}>Afiliados</a></li>
                </ul>
              </div>

              <div>
                <h5 style={{ marginBottom: '1rem', color: 'var(--text)', fontWeight: 'bold' }}>Síguenos</h5>
                <p className="muted" style={{ fontSize: '.9rem', marginBottom: '1rem' }}>Consejos diarios, ofertas y novedades.</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="#" aria-label="Instagram" style={{ color: 'var(--muted)' }}>
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.53c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" aria-label="TikTok" style={{ color: 'var(--muted)' }}>
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.35-1.17 1.09-1.07 1.84.07.58.63 1.02 1.21 1.07.54.06 1.09-.1 1.52-.42.46-.33.87-.82.92-1.42.06-4.96.04-9.91.06-14.87z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="WhatsApp" style={{ color: 'var(--muted)' }}>
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 1.82.48 3.53 1.31 5.02L2.5 21.5l4.63-.83A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.61 0-3.13-.46-4.44-1.26l-.32-.19-2.76.5.5-2.73-.19-.32A7.96 7.96 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.54-6.09c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.24.24-.4.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.07-.11-.23-.17-.48-.3z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
              <small className="muted">&copy; <span id="currentYear">{year}</span> Finanzas Jóvenes. Todos los derechos reservados.</small>
            </div>
          </div>
        </footer>
    </div>
  );
}

export default App;