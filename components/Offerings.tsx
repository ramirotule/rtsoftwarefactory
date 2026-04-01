"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Layout,
  LayoutDashboard,
  Bot,
  ShoppingCart,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const offerings = [
  {
    icon: Globe,
    tag: "Presencia online",
    title: "Landing Page",
    description:
      "Una página profesional para mostrar tu negocio, servicio o producto. Rápida de implementar, optimizada para Google y conectada a WhatsApp.",
    features: [
      "Diseño a medida de tu marca",
      "SEO básico configurado",
      "Formulario o botón de WhatsApp",
      "100% responsive, velocidad A+",
      "Entrega en 5 días hábiles",
    ],
    cta: "Quiero mi landing",
  },
  {
    icon: Layout,
    tag: "Sitio completo",
    title: "Sitio Web",
    description:
      "Sitio institucional con múltiples secciones, blog o catálogo opcional. Para negocios que necesitan más que una página pero sin un sistema complejo.",
    features: [
      "Múltiples secciones y páginas",
      "SEO técnico avanzado",
      "Formulario conectado a n8n",
      "Animaciones y diseño premium",
      "Hosting + dominio incluido",
    ],
    cta: "Quiero mi sitio web",
  },
  {
    icon: ShoppingCart,
    tag: "Vendé online",
    title: "E-Commerce",
    description:
      "Tienda online completa para vender tus productos en internet. Catálogo, carrito, medios de pago argentinos y gestión de pedidos — lista para facturar desde el día uno.",
    features: [
      "Catálogo con buscador y filtros",
      "MercadoPago / Modo / Transferencia",
      "Gestión de stock integrada",
      "Panel de administración propio",
      "SEO de productos automático",
    ],
    cta: "Quiero mi tienda online",
  },
  {
    icon: LayoutDashboard,
    tag: "Gestión de tu negocio",
    title: "Sistema de Gestión",
    description:
      "Aplicación web a medida para administrar tu comercio o local. Control de stock, caja, pedidos y reportes — desde el celular o la PC, sin papeles.",
    features: [
      "Control de stock con alertas",
      "Caja y punto de venta",
      "Reportes de ventas diarios",
      "Acceso multi-dispositivo",
      "Adaptado a tu rubro específico",
    ],
    cta: "Quiero mi sistema",
  },
  {
    icon: Bot,
    tag: "Piloto automático",
    title: "Automatizaciones con IA",
    description:
      "Workflows automáticos, bots de WhatsApp y generación de contenido con IA. Tu operación funciona sola — vos te concentrás en crecer.",
    features: [
      "Flujos con n8n sin límites",
      "Bot de WhatsApp con IA",
      "Publicación automática en redes",
      "Generación de contenido y fichas",
      "Integración con tus sistemas",
    ],
    cta: "Quiero automatizar",
  },
];

export default function Offerings() {
  return (
    <section id="servicios-detalle" className="relative py-28 overflow-hidden">
      <div className="cyan-line absolute top-0 left-0 right-0" />
      <div
        className="glow-orb w-[600px] h-[500px] bg-cyan-neon top-1/2 -translate-y-1/2 right-0"
        style={{ opacity: 0.06 }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest text-cyan-neon uppercase mb-4"
          >
            ¿Qué construimos?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black leading-tight"
          >
            Cinco servicios,{" "}
            <span className="gradient-text">un solo equipo</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-white/40 max-w-xl mx-auto text-base"
          >
            Cada proyecto se presupuesta a medida según tu situación. Hablamos,
            entendemos qué necesitás y te damos un número concreto — sin sorpresas.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass glass-hover animated-border rounded-2xl p-7 flex flex-col gap-5 group relative overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-neon/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                {/* Header */}
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl glass border border-cyan-neon/15 group-hover:border-cyan-neon/40 transition-colors flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-cyan-neon" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-cyan-neon/70 uppercase tracking-widest">
                      {item.tag}
                    </span>
                    <h3 className="text-xl font-black text-white group-hover:text-cyan-neon transition-colors duration-200 mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-white/50 leading-relaxed relative z-10">
                  {item.description}
                </p>

                {/* Features */}
                <ul className="flex flex-col gap-2.5 relative z-10">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm">
                      <CheckCircle2 size={13} className="text-cyan-neon shrink-0" />
                      <span className="text-white/55">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto pt-4 border-t border-white/5 relative z-10">
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-neon hover:gap-3 transition-all duration-200"
                  >
                    {item.cta}
                    <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs text-white/25 mt-10"
        >
          Todos los proyectos incluyen soporte post-entrega · Presupuesto sin compromiso · Respondemos en menos de 24 hs
        </motion.p>
      </div>
    </section>
  );
}
