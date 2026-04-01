"use client";

import { motion } from "framer-motion";
import {
  Globe,
  LayoutDashboard,
  ShoppingBag,
  UtensilsCrossed,
  Package,
  Store,
  CheckCircle2,
  ArrowRight,
  FileImage,
  Search,
  MessageCircle,
  BarChart3,
  Smartphone,
  Receipt,
  Wrench,
  Building2,
  Car,
  Wheat,
  MessageSquarePlus,
} from "lucide-react";

const landingFeatures = [
  { icon: FileImage, text: "Diseño dark/light a medida de tu marca" },
  { icon: Search, text: "SEO técnico + copy optimizado para Google" },
  { icon: MessageCircle, text: "Formulario conectado a WhatsApp o n8n" },
  { icon: Smartphone, text: "100% responsive, velocidad de carga A+" },
];

const gestionFeatures = [
  { icon: Package, text: "Control de stock con alertas de reposición" },
  { icon: Receipt, text: "Caja y punto de venta integrado" },
  { icon: BarChart3, text: "Reportes de ventas y rentabilidad" },
  { icon: Smartphone, text: "Acceso desde celular, tablet o PC" },
];

const industries = [
  {
    icon: Store,
    name: "Kioscos & Almacenes",
    description:
      "Control de stock, caja rápida, alertas de faltantes y reportes diarios.",
  },
  {
    icon: ShoppingBag,
    name: "Minimercados",
    description:
      "Gestión de proveedores, inventario por categoría y control de costos.",
  },
  {
    icon: UtensilsCrossed,
    name: "Restaurantes",
    description:
      "Gestión de reservas online, pedidos por mesa, menú digital con QR y cierre de caja por turno.",
  },
  {
    icon: Package,
    name: "Casas de comidas",
    description:
      "Gestión de delivery, pedidos para llevar y control de insumos.",
  },
  {
    icon: Wrench,
    name: "Talleres · Lubricentros · Chapa & Pintura",
    description:
      "Órdenes de trabajo, historial de vehículos por patente, presupuestos y seguimiento de reparaciones.",
  },
  {
    icon: Building2,
    name: "Inmobiliarias",
    description:
      "Gestión de propiedades, contratos, bot de consultas por WhatsApp y publicación automática.",
  },
  {
    icon: Car,
    name: "Concesionarias de Autos",
    description:
      "Control de stock de vehículos, publicación automática en redes y generación de fichas con IA.",
  },
  {
    icon: Wheat,
    name: "AgroIndustria",
    description:
      "Gestión de lotes, seguimiento de cultivos, proveedores y reportes de campaña para el campo pampeano.",
  },
];

const landingTypes = [
  "Landing page de producto o servicio",
  "Página institucional para empresa",
  "Portafolio profesional",
  "Sitio para negocio local (turnos, info, contacto)",
  "Catálogo online sin carrito de compras",
];

export default function WebSystems() {
  return (
    <section id="sistemas-web" className="relative py-28 overflow-hidden">
      <div className="cyan-line absolute top-0 left-0 right-0" />
      <div
        className="glow-orb w-[600px] h-[400px] bg-cyan-neon top-1/2 -translate-y-1/2 left-0 -translate-x-1/2"
        style={{ opacity: 0.06 }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs font-semibold text-cyan-neon border-cyan-neon/20 mb-6"
          >
            <Globe size={12} />
            Pilar 2 — Sistemas Web
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black leading-tight"
          >
            Tu negocio en la web,{" "}
            <span className="gradient-text">a medida</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-white/40 max-w-xl mx-auto text-base"
          >
            Desde una landing page profesional hasta un sistema completo de
            gestión para tu local — desarrollado con las mismas tecnologías que
            usan las grandes empresas.
          </motion.p>
        </div>

        {/* Two main cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {/* Card 1: Páginas Web */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65 }}
            className="glass glass-hover animated-border rounded-2xl p-8 flex flex-col gap-6 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

            {/* Header */}
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-12 h-12 rounded-xl glass border border-cyan-neon/15 group-hover:border-cyan-neon/40 transition-colors flex items-center justify-center">
                <Globe size={22} className="text-cyan-neon" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Páginas Web & Landings
                </h3>
                <p className="text-xs text-white/35">
                  Presencia profesional online
                </p>
              </div>
            </div>

            <p className="text-sm text-white/50 leading-relaxed relative z-10">
              Diseñamos y desarrollamos tu presencia digital con el mismo nivel
              de calidad que agencias de capital, desde Santa Rosa y al precio
              del interior. Sitios rápidos, bonitos y que convierten visitas en
              clientes.
            </p>

            {/* Features */}
            <ul className="flex flex-col gap-3 relative z-10">
              {landingFeatures.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm">
                  <Icon size={15} className="text-cyan-neon shrink-0" />
                  <span className="text-white/60">{text}</span>
                </li>
              ))}
            </ul>

            {/* Types */}
            <div className="relative z-10 border-t border-white/5 pt-5">
              <p className="text-xs text-white/30 uppercase tracking-widest font-semibold mb-3">
                ¿Qué podemos construir?
              </p>
              <ul className="flex flex-col gap-2">
                {landingTypes.map((type) => (
                  <li
                    key={type}
                    className="flex items-start gap-2 text-xs text-white/45"
                  >
                    <CheckCircle2
                      size={12}
                      className="text-cyan-neon/60 shrink-0 mt-0.5"
                    />
                    {type}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contacto"
              className="btn-outline flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold relative z-10"
            >
              Quiero mi página web
              <ArrowRight size={15} />
            </a>
          </motion.div>

          {/* Card 2: Sistemas de Gestión */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65 }}
            className="glass glass-hover animated-border rounded-2xl p-8 flex flex-col gap-6 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

            {/* Header */}
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-12 h-12 rounded-xl glass border border-cyan-neon/15 group-hover:border-cyan-neon/40 transition-colors flex items-center justify-center">
                <LayoutDashboard size={22} className="text-cyan-neon" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Sistemas de Gestión
                </h3>
                <p className="text-xs text-white/35">
                  Para comercios y locales
                </p>
              </div>
            </div>

            <p className="text-sm text-white/50 leading-relaxed relative z-10">
              Sistemas web personalizados para administrar tu negocio desde
              cualquier dispositivo. Control de stock, caja, pedidos y reportes
              — todo en uno, sin papeles y sin Excel.
            </p>

            {/* Features */}
            <ul className="flex flex-col gap-3 relative z-10">
              {gestionFeatures.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm">
                  <Icon size={15} className="text-cyan-neon shrink-0" />
                  <span className="text-white/60">{text}</span>
                </li>
              ))}
            </ul>

            {/* Industries grid */}
            <div className="relative z-10 border-t border-white/5 pt-5">
              <p className="text-xs text-white/30 uppercase tracking-widest font-semibold mb-3">
                Industrias que atendemos
              </p>
              <div className="flex flex-col gap-1.5">
                {industries.map(({ icon: Icon, name }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 glass rounded-lg px-3 py-2 border border-white/5"
                  >
                    <Icon size={13} className="text-cyan-neon shrink-0" />
                    <span className="text-xs text-white/55 font-medium leading-tight">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contacto"
              className="btn-primary flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold relative z-10"
            >
              Quiero mi sistema
              <ArrowRight size={15} />
            </a>
          </motion.div>
        </div>

        {/* Industries detail strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass glass-hover rounded-xl p-5 group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon
                    size={16}
                    className="text-cyan-neon group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm font-bold text-white leading-tight">
                    {industry.name}
                  </span>
                </div>
                <p className="text-xs text-white/40 leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* No encontrás tu rubro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 glass rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-5 border border-dashed border-cyan-neon/20"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-neon/8 border border-cyan-neon/20 flex items-center justify-center shrink-0">
              <MessageSquarePlus size={18} className="text-cyan-neon" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                ¿Tu rubro no aparece en el listado?
              </p>
              <p className="text-xs text-white/40 mt-0.5">
                No importa — contactanos y vemos si lo podemos incorporar. La mayoría de los casos tienen solución.
              </p>
            </div>
          </div>
          <a
            href="#contacto"
            className="btn-outline shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap"
          >
            Consultá tu caso
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
