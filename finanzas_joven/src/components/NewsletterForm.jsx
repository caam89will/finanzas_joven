import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Introduce un correo válido.");
      return;
    }

    // Simulación de envío (aquí puedes integrar Mailchimp, ConvertKit, etc.)
    setMessage("¡Gracias! Revisa tu correo para confirmar la suscripción.");
    setEmail("");
  };

  return (
    <section id="newsletter" className="card mt-4">
      <h4>Suscríbete para consejos diarios</h4>
      <form onSubmit={handleSubmit} className="form" aria-label="Formulario de suscripción">
        <label htmlFor="email">Correo electrónico</label>
        <input
          id="email"
          type="email"
          placeholder="tucorreo@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="flex gap-2 mt-2">
          <button type="submit" className="btn btn--primary">
            Recibir consejos
          </button>
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => {
              setEmail("");
              setMessage("");
            }}
          >
            Limpiar
          </button>
        </div>
        {message && <div className={`help mt-2 ${message.includes("Gracias") ? "success" : "error"}`}>{message}</div>}
      </form>
    </section>
  );
}
