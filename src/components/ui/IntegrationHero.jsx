"use client";

import { Button } from "./button";
import React from "react";

// Fila 1: IA, Diseño y No-Code (20 herramientas)
const ICONS_ROW1 = [
  { name: "OpenAI", src: "https://cdn.simpleicons.org/openai/000000/ffffff", href: "https://openai.com" },
  { name: "Canva", src: "https://cdn.simpleicons.org/canva/00C4CC", href: "https://www.canva.com" },
  { name: "Notion", src: "https://cdn.simpleicons.org/notion/000000/ffffff", href: "https://www.notion.so" },
  { name: "Shopify", src: "https://cdn.simpleicons.org/shopify/96BF48", href: "https://www.shopify.com" },
  { name: "WordPress", src: "https://cdn.simpleicons.org/wordpress/21759B", href: "https://wordpress.org" },
  { name: "Webflow", src: "https://cdn.simpleicons.org/webflow/146EF2", href: "https://webflow.com" },
  { name: "Zapier", src: "https://cdn.simpleicons.org/zapier/FF4F00", href: "https://zapier.com" },
  { name: "Make", src: "https://cdn.simpleicons.org/make/000000/ffffff", href: "https://www.make.com" },
  { name: "Mailchimp", src: "https://cdn.simpleicons.org/mailchimp/FFE01B", href: "https://mailchimp.com" },
  { name: "HubSpot", src: "https://cdn.simpleicons.org/hubspot/FF7A59", href: "https://www.hubspot.com" },
  { name: "Buffer", src: "https://cdn.simpleicons.org/buffer/231F20/ffffff", href: "https://buffer.com" },
  { name: "Slack", src: "https://cdn.simpleicons.org/slack/4A154B", href: "https://slack.com" },
  { name: "Discord", src: "https://cdn.simpleicons.org/discord/5865F2", href: "https://discord.com" },
  { name: "Zoom", src: "https://cdn.simpleicons.org/zoom/2D8CFF", href: "https://zoom.us" },
  { name: "Google", src: "https://cdn.simpleicons.org/google/4285F4", href: "https://google.com" },
  { name: "Stripe", src: "https://cdn.simpleicons.org/stripe/008CDD", href: "https://stripe.com" },
  { name: "PayPal", src: "https://cdn.simpleicons.org/paypal/003087", href: "https://www.paypal.com" },
  { name: "Gumroad", src: "https://cdn.simpleicons.org/gumroad/FF90E8", href: "https://gumroad.com" },
  { name: "Loom", src: "https://cdn.simpleicons.org/loom/625DF5", href: "https://www.loom.com" },
  { name: "Figma", src: "https://cdn.simpleicons.org/figma/F24E1E", href: "https://www.figma.com" },
];

// Fila 2: Marketing, Productividad y Redes (20 herramientas)
const ICONS_ROW2 = [
  { name: "Adobe", src: "https://cdn.simpleicons.org/adobe/FF0000", href: "https://www.adobe.com" },
  { name: "Grammarly", src: "https://cdn.simpleicons.org/grammarly/15C39A", href: "https://www.grammarly.com" },
  { name: "Framer", src: "https://cdn.simpleicons.org/framer/0055FF", href: "https://www.framer.com" },
  { name: "Bubble", src: "https://cdn.simpleicons.org/bubble/000000/ffffff", href: "https://bubble.io" },
  { name: "ConvertKit", src: "https://cdn.simpleicons.org/convertkit/FF725E", href: "https://convertkit.com" },
  { name: "Hootsuite", src: "https://cdn.simpleicons.org/hootsuite/000000/ffffff", href: "https://www.hootsuite.com" },
  { name: "Asana", src: "https://cdn.simpleicons.org/asana/273347/ffffff", href: "https://asana.com" },
  { name: "Trello", src: "https://cdn.simpleicons.org/trello/0052CC", href: "https://trello.com" },
  { name: "Monday", src: "https://cdn.simpleicons.org/monday/FF3D57", href: "https://monday.com" },
  { name: "ClickUp", src: "https://cdn.simpleicons.org/clickup/7B68EE", href: "https://clickup.com" },
  { name: "Airtable", src: "https://cdn.simpleicons.org/airtable/18BFFF", href: "https://airtable.com" },
  { name: "Typeform", src: "https://cdn.simpleicons.org/typeform/262627/ffffff", href: "https://www.typeform.com" },
  { name: "TikTok", src: "https://cdn.simpleicons.org/tiktok/000000/ffffff", href: "https://www.tiktok.com" },
  { name: "Instagram", src: "https://cdn.simpleicons.org/instagram/E4405F", href: "https://www.instagram.com" },
  { name: "YouTube", src: "https://cdn.simpleicons.org/youtube/FF0000", href: "https://www.youtube.com/watch?v=okke7Bki548&autoplay=1" },
  { name: "LinkedIn", src: "https://cdn.simpleicons.org/linkedin/0A66C2", href: "https://www.linkedin.com" },
  { name: "Pinterest", src: "https://cdn.simpleicons.org/pinterest/BD081C", href: "https://www.pinterest.com" },
  { name: "WhatsApp", src: "https://cdn.simpleicons.org/whatsapp/25D366", href: "https://www.whatsapp.com" },
  { name: "CapCut", src: "https://cdn.simpleicons.org/capcut/000000/ffffff", href: "https://www.capcut.com" },
  { name: "Substack", src: "https://cdn.simpleicons.org/substack/FF6719", href: "https://substack.com" },
];

// Utility to repeat icons enough times for smooth infinite scroll
const repeatedIcons = (icons, repeat = 2) => Array.from({ length: repeat }).flatMap(() => icons);

export default function IntegrationHero() {
  return (
    <section className="relative py-24 overflow-hidden bg-white dark:bg-black rounded-3xl border border-gray-100 shadow-xl my-8">
      {/* Light grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 text-black dark:text-white shadow-sm">
          ⚡ Stack Tecnológico 2024
        </span>
        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
          Las 40 Herramientas para<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Tu Negocio Digital</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Desde Inteligencia Artificial hasta automatización y ventas. Estas son las aplicaciones que usan los emprendedores exitosos hoy en día.
        </p>
        
        <div className="mt-8 flex justify-center gap-4">
          <Button variant="default" className="px-8 py-6 text-lg rounded-xl bg-black text-white font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Explorar Herramientas
          </Button>
        </div>

        {/* Carousel */}
        <div className="mt-16 overflow-hidden relative pb-2">
          {/* Row 1 */}
          <div className="flex gap-8 whitespace-nowrap animate-scroll-left hover:[animation-play-state:paused]">
            {repeatedIcons(ICONS_ROW1, 4).map((item, i) => (
              <a 
                key={i} 
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-20 w-20 flex-shrink-0 rounded-2xl bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center p-4 cursor-pointer"
              >
                <img src={item.src} alt={item.name} className="h-full w-full object-contain opacity-80 hover:opacity-100 transition-opacity" loading="lazy" />
              </a>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-8 whitespace-nowrap mt-8 animate-scroll-right hover:[animation-play-state:paused]">
            {repeatedIcons(ICONS_ROW2, 4).map((item, i) => (
              <a 
                key={i} 
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-20 w-20 flex-shrink-0 rounded-2xl bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center p-4 cursor-pointer"
              >
                <img src={item.src} alt={item.name} className="h-full w-full object-contain opacity-80 hover:opacity-100 transition-opacity" loading="lazy" />
              </a>
            ))}
          </div>

          {/* Fade overlays */}
          <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none" />
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 60s linear infinite;
        }
      `}</style>
    </section>
  );
}