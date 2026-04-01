"use client";

import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  Automatización: [
    { label: "StockAutos", href: "#productos" },
    { label: "Alkila", href: "#productos" },
    { label: "RAM Informática", href: "#productos" },
  ],
  "Sistemas Web": [
    { label: "Páginas & Landings", href: "#sistemas-web" },
    { label: "Sistemas de Gestión", href: "#sistemas-web" },
    { label: "Presupuesto", href: "#contacto" },
  ],
  Empresa: [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Servicios", href: "#servicios-detalle" },
    { label: "Contacto", href: "#contacto" },
  ],
};

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-cyan-neon/8 pt-16 pb-8 overflow-hidden">
      <div
        className="glow-orb w-[400px] h-[200px] bg-cyan-neon bottom-0 left-1/2 -translate-x-1/2"
        style={{ opacity: 0.04 }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="inline-block mb-4">
              <Image
                src="/logo-transparente.png"
                alt="RT Software Factory"
                width={200}
                height={55}
                className="w-[200px] h-auto object-contain"
                style={{
                  filter: "drop-shadow(0 0 6px rgba(0,212,255,0.7))",
                }}
              />
            </a>
            <p className="text-sm text-white/35 leading-relaxed mb-5">
              Desarrollo web y automatización con IA para negocios argentinos.
              Santa Rosa, La Pampa.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 glass rounded-lg flex items-center justify-center border border-white/5 text-white/30 hover:text-cyan-neon hover:border-cyan-neon/30 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-semibold tracking-widest text-white/30 uppercase mb-4">
                {category}
              </p>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/40 hover:text-cyan-neon transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="cyan-line mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/20">
          <span>
            © {new Date().getFullYear()} RT Software Factory · Santa Rosa, La Pampa, Argentina
          </span>
          <span className="font-mono">
            Construimos el motor tecnológico de tu negocio
          </span>
        </div>
      </div>
    </footer>
  );
}
