// src/App.jsx
import React from "react";

// COMPONENTES
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import KpiCards from "./components/KpiCards";
import SalesTable from "./components/SalesTable";
import Story from "./components/Story";
import CTA from "./components/CTA";
import NewsletterForm from "./components/NewsletterForm";
import BlogCard from "./components/BlogCard";
import blogPosts from "./data/blogPosts.json";

function App() {
  return (
    <div className="App flex min-h-screen bg-gray-50 text-gray-800">
      {/* MENÚ LATERAL */}
      <Navbar />

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 overflow-auto p-6">
        {/* HERO */}
        <Hero />

        {/* KPIs */}
        <section className="mt-12">
          <KpiCards />
        </section>

        {/* BLOG / RECURSOS (Diseño Profesional) */}
        <section className="blog-section mt-12">
          <h2 className="section-title">Últimos Artículos y Recursos</h2>
          
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* TABLA DE VENTAS */}
        <section className="mt-12 overflow-x-auto">
          <SalesTable />
        </section>

        {/* HISTORIA PERSONAL */}
        <section className="mt-12">
          <Story />
        </section>

        {/* CTA FINAL */}
        <section className="mt-12">
          <CTA />
        </section>

        {/* NEWSLETTER */}
        <section className="mt-12">
          <NewsletterForm />
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
