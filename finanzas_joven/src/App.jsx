// src/App.jsx
import React from "react";

// COMPONENTES
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import KpiCards from "./components/KpiCards";
import Resources from "./components/Resources";
import SalesTable from "./components/SalesTable";
import Story from "./components/Story";
import CTA from "./components/CTA";
import NewsletterForm from "./components/NewsletterForm";

function App() {
  return (
    <div className="App">
      {/* MENÚ LATERAL */}
      <Navbar />

      {/* CONTENIDO PRINCIPAL */}
      <main className="main">
        {/* HERO */}
        <Hero />

        {/* KPIs */}
        <KpiCards />

        {/* RECURSOS */}
        <Resources />

        {/* TABLA DE VENTAS */}
        <SalesTable />

        {/* HISTORIA PERSONAL */}
        <Story />

        {/* CTA FINAL */}
        <CTA />

        {/* NEWSLETTER */}
        <NewsletterForm />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
