/**
 * COMPONENTE: FOOTER (PIE DE PÁGINA)
 * ----------------------------------
 * Contiene enlaces legales, navegación secundaria y redes sociales.
 * Se muestra al final de la vista del Dashboard.
 */
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <footer className="footer mt-4">
      <div className="container footer-grid">
        <div>
          <h5>Recursos</h5>
          <ul>
            <li><a href="/blog">Blog Financiero</a></li>
            <li><a href="/glosario">Glosario</a></li>
            <li><a href="/calculadoras">Calculadoras</a></li>
          </ul>
        </div>
        <div>
          <h5>Legal</h5>
          <ul>
            <li><a href="/politica-privacidad.html">Privacidad</a></li>
            <li><a href="/terminos.html">Términos</a></li>
            <li><a href="/afiliacion">Afiliados</a></li>
          </ul>
        </div>
        <div>
          <h5>Síguenos</h5>
          <div className="flex gap-2 mt-2">
            <a href="#"><img src="/assets/instagram-icon.svg" alt="Instagram" width="28" /></a>
            <a href="#"><img src="/assets/tiktok-icon.svg" alt="TikTok" width="28" /></a>
            <a href="#"><img src="/assets/whatsapp-icon.svg" alt="WhatsApp" width="28" /></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-2">
        <small className="muted">&copy; {year} Finanzas Jóvenes. Todos los derechos reservados.</small>
      </div>
    </footer>
  );
}
