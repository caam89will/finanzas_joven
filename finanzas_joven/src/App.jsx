import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import KPISection from "./components/KPISection";
import ResourcesSection from "./components/ResourcesSection";
import AboutMe from "./components/AboutMe";
import CTA from "./components/CTA";
import NewsletterForm from "./components/NewsletterForm";

function App() {
  return (
    <div className="App flex">
      <Navbar />
      <main className="flex-1 p-4">
        <Hero />
        <KPISection />
        <ResourcesSection />
        <AboutMe />
        <CTA />
        <NewsletterForm />
      </main>
    </div>
  );
}

export default App;
