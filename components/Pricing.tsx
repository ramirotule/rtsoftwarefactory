"use client";

import { motion } from "framer-motion";
import { Check, Zap, Star, Building2, Bot, Globe } from "lucide-react";
import { useState } from "react";

type Plan = {
  name: string;
  icon: React.ElementType;
  price: string;
  period: string;
  setup: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
  accentColor: string;
  glowColor: string;
};

const automationPlans: Plan[] = [
  {
    name: "Básico",
    icon: Zap,
    price: "$29.999",
    period: "/mes",
    setup: "Setup único: $49.999",
    description: "Para negocios que quieren empezar a automatizar sin complicaciones.",
    features: [
      "1 plataforma SaaS activa",
      "Hasta 500 registros / productos",
      "Bot de WhatsApp básico",
      "Publicación automática en 2 redes",
      "Soporte por WhatsApp (horario laboral)",
      "Hosting + mantenimiento incluido",
      "1 automatización n8n activa",
    ],
    cta: "Empezar con Básico",
    popular: false,
    accentColor: "border-white/10",
    glowColor: "transparent",
  },
  {
    name: "Pro",
    icon: Star,
    price: "$59.999",
    period: "/mes",
    setup: "Setup único: $89.999",
    description: "Para negocios en crecimiento que necesitan escalar sin contratar más personal.",
    features: [
      "2 plataformas SaaS activas",
      "Registros y productos ilimitados",
      "Bot de WhatsApp avanzado con IA",
      "Publicación automática en 5 redes",
      "Generación de videos/Reels con IA",
      "Soporte prioritario 24/5",
      "Hasta 10 automatizaciones n8n",
      "Integración con Supabase dedicado",
      "Dashboard de métricas en tiempo real",
      "CRM básico incluido",
    ],
    cta: "Activar Plan Pro",
    popular: true,
    accentColor: "border-cyan-neon/40",
    glowColor: "rgba(0,212,255,0.12)",
  },
  {
    name: "Enterprise",
    icon: Building2,
    price: "A medida",
    period: "",
    setup: "Consultá condiciones",
    description: "Para operaciones grandes que necesitan infraestructura robusta y soporte dedicado.",
    features: [
      "Plataformas SaaS ilimitadas",
      "Infraestructura dedicada",
      "Bot de WhatsApp con IA personalizada",
      "Automatizaciones n8n ilimitadas",
      "Generación de contenido multimodal",
      "Soporte dedicado 24/7",
      "SLA garantizado",
      "Integraciones a medida",
      "Capacitación del equipo incluida",
      "Account manager asignado",
    ],
    cta: "Hablar con el Equipo",
    popular: false,
    accentColor: "border-white/10",
    glowColor: "transparent",
  },
];

const webPlans: Plan[] = [
  {
    name: "Landing",
    icon: Globe,
    price: "$149.999",
    period: "",
    setup: "Entrega en 5 días hábiles",
    description: "Una página profesional para mostrar tu negocio, servicio o producto.",
    features: [
      "Diseño a medida de tu marca",
      "Hasta 5 secciones de contenido",
      "Formulario conectado a WhatsApp",
      "SEO básico configurado",
      "100% responsive (mobile first)",
      "Hosting por 1 año incluido",
      "1 revisión de diseño incluida",
    ],
    cta: "Pedir mi Landing",
    popular: false,
    accentColor: "border-white/10",
    glowColor: "transparent",
  },
  {
    name: "Sitio Web",
    icon: Star,
    price: "$299.999",
    period: "",
    setup: "Entrega en 10 días hábiles",
    description: "Sitio institucional completo con múltiples secciones y formularios avanzados.",
    features: [
      "Diseño completo a medida",
      "Hasta 10 secciones / páginas",
      "Formulario conectado a n8n webhook",
      "SEO técnico avanzado",
      "Blog o catálogo simple opcional",
      "Hosting por 1 año + dominio .com.ar",
      "Animaciones con Framer Motion",
      "Google Analytics configurado",
      "3 revisiones de diseño incluidas",
    ],
    cta: "Quiero mi Sitio Web",
    popular: true,
    accentColor: "border-cyan-neon/40",
    glowColor: "rgba(0,212,255,0.12)",
  },
  {
    name: "Sistema de Gestión",
    icon: Building2,
    price: "Desde $499.999",
    period: "",
    setup: "Consultá tu caso",
    description: "Sistema web completo para kioscos, almacenes, restaurantes y casas de comidas.",
    features: [
      "Control de stock con alertas",
      "Caja y punto de venta",
      "Reportes de ventas diarios",
      "Gestión de pedidos y delivery",
      "Acceso multi-dispositivo",
      "Soporte mensual incluido (3 meses)",
      "Capacitación del equipo",
      "Adaptado a tu rubro específico",
      "Actualizaciones incluidas",
    ],
    cta: "Quiero mi Sistema",
    popular: false,
    accentColor: "border-white/10",
    glowColor: "transparent",
  },
];

type TabType = "automatizacion" | "web";

export default function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>("automatizacion");
  const plans = activeTab === "automatizacion" ? automationPlans : webPlans;

  return (
    <section id="precios" className="relative py-28 overflow-hidden">
      <div className="cyan-line absolute top-0 left-0 right-0" />
      <div className="glow-orb w-[500px] h-[500px] bg-cyan-neon top-1/2 -translate-y-1/2 right-0" style={{ opacity: 0.06 }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-widest text-cyan-neon uppercase mb-4"
          >
            Precios transparentes
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black leading-tight"
          >
            {activeTab === "automatizacion" ? (
              <>Invertí en automatización, <span className="gradient-text">no en personal</span></>
            ) : (
              <>Tu inversión en tecnología, <span className="gradient-text">precios del interior</span></>
            )}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-white/40 max-w-xl mx-auto"
          >
            {activeTab === "automatizacion"
              ? "Todos los planes incluyen hosting, mantenimiento, actualizaciones de IA y soporte. Sin sorpresas al final del mes."
              : "Precios únicos (no mensuales) para páginas web y sistemas. Consultanos para un presupuesto personalizado."}
          </motion.p>

          {/* Tab toggle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex items-center justify-center mt-8"
          >
            <div className="glass rounded-xl p-1 flex gap-1 border border-white/8">
              <button
                onClick={() => setActiveTab("automatizacion")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeTab === "automatizacion"
                    ? "bg-cyan-neon text-dark-950"
                    : "text-white/50 hover:text-white"
                }`}
              >
                <Bot size={15} />
                Automatización & IA
              </button>
              <button
                onClick={() => setActiveTab("web")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeTab === "web"
                    ? "bg-cyan-neon text-dark-950"
                    : "text-white/50 hover:text-white"
                }`}
              >
                <Globe size={15} />
                Sistemas Web
              </button>
            </div>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start mt-12">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            const isHovered = hoveredPlan === plan.name;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                onHoverStart={() => setHoveredPlan(plan.name)}
                onHoverEnd={() => setHoveredPlan(null)}
                className={`relative glass rounded-2xl p-7 border ${plan.accentColor} flex flex-col gap-5 transition-all duration-400 ${
                  plan.popular ? "shadow-neon-md scale-[1.02]" : ""
                }`}
                style={{
                  boxShadow: plan.popular
                    ? `0 0 40px rgba(0,212,255,0.2), 0 0 80px rgba(0,212,255,0.07)`
                    : isHovered
                    ? `0 0 25px rgba(0,212,255,0.1)`
                    : "none",
                }}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="btn-primary text-[10px] font-bold px-4 py-1 rounded-full whitespace-nowrap">
                      Más Popular
                    </span>
                  </div>
                )}

                {/* Plan header */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl glass flex items-center justify-center ${plan.popular ? "border-cyan-neon/40" : "border-white/10"} border`}>
                    <Icon size={18} className={plan.popular ? "text-cyan-neon" : "text-white/60"} />
                  </div>
                  <span className={`text-base font-bold ${plan.popular ? "text-white" : "text-white/80"}`}>
                    {plan.name}
                  </span>
                </div>

                {/* Price */}
                <div>
                  <div className="flex items-end gap-1">
                    <span className={`text-4xl font-black ${plan.popular ? "gradient-text" : "text-white"}`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-white/40 text-sm mb-1.5">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-xs text-white/30 mt-1">{plan.setup}</p>
                </div>

                <p className="text-sm text-white/45 leading-relaxed">{plan.description}</p>

                {/* Features */}
                <ul className="flex flex-col gap-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check
                        size={14}
                        className={`shrink-0 mt-0.5 ${plan.popular ? "text-cyan-neon" : "text-white/40"}`}
                      />
                      <span className="text-white/55">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contacto"
                  className={`mt-2 w-full text-center py-3.5 px-6 rounded-xl text-sm font-bold transition-all duration-300 ${
                    plan.popular
                      ? "btn-primary"
                      : "btn-outline"
                  }`}
                >
                  {plan.cta}
                </a>
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
          className="text-center text-xs text-white/25 mt-8"
        >
          Precios en pesos argentinos + IVA · Facturación mensual · Cancelación sin penalidad
        </motion.p>
      </div>
    </section>
  );
}
