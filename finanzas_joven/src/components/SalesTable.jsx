// src/components/ResourcesSection.jsx
import React from "react";
import ResourceCard from "./ResourceCard";

function ResourcesSection() {
  const resources = [
    {
      title: "12 formas de ganar dinero desde casa",
      description: "Lista práctica con pasos diarios. Ideal para comenzar sin inversión.",
      linkText: "Leer",
      linkHref: "/12-formas.html",
      secondaryLink: "Descargar guía",
      secondaryHref: "https://go.hotmart.com/C99765159A",
    },
    {
      title: "Herramientas IA gratuitas",
      description: "Plantillas, prompts y apps para automatizar tareas y crear contenido rápido.",
      linkText: "Ver herramientas",
      linkHref: "apps.html",
    },
    {
      title: "Cómo crear ofertas que venden",
      description: "Copywriting y estructura de ofertas paso a paso para convertir visitantes en clientes.",
      linkText: "Leer artículo",
      linkHref: "blog.html#ofertas",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      {resources.map((res, i) => (
        <ResourceCard key={i} {...res} />
      ))}
    </section>
  );
}

export default ResourcesSection;
