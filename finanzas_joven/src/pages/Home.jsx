// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import KpiCards from "../components/KpiCards";
import Resources from "../components/Resources";
import SalesTable from "../components/SalesTable";
import Story from "../components/Story";
import CTA from "../components/CTA";
import NewsletterForm from "../components/NewsletterForm";

const Home = () => {
  return (
    <main>
      <Hero />
      <KpiCards />
      <Resources />
      <SalesTable />
      <Story />
      <CTA />
      <NewsletterForm />
    </main>
  );
};

export default Home;
