"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Car,
  Building2,
  ShoppingCart,
  ExternalLink,
  Video,
  MessageSquare,
  FileText,
} from "lucide-react";

const products = [
  {
    icon: Car,
    name: "StockAutos",
    domain: "stockautos.com.ar",
    tag: "Concesionarias",
    tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    description:
      "Control total de tu inventario con publicación automática en todas las redes. Cada auto genera sus propios videos comerciales y audios con IA en segundos.",
    features: [
      { icon: Video, text: "Videos y Reels automáticos con IA" },
      { icon: MessageSquare, text: "Publicación simultánea en redes sociales" },
      { icon: ShoppingCart, text: "Control de stock en tiempo real" },
    ],
    gradient: "from-blue-600/20 to-cyan-neon/10",
    glowColor: "rgba(59,130,246,0.15)",
  },
  {
    icon: Building2,
    name: "Alkila",
    domain: "alkila.com.ar",
    tag: "Inmobiliarias",
    tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    description:
      "Bot de WhatsApp que filtra consultas 24/7, gestiona contratos y automatiza la administración de tus propiedades. Nunca más una consulta sin respuesta.",
    features: [
      {
        icon: MessageSquare,
        text: "Bot WhatsApp 24/7 con filtrado inteligente",
      },
      { icon: FileText, text: "Administración de contratos automática" },
      { icon: Building2, text: "Gestión multi-propiedad centralizada" },
    ],
    gradient: "from-emerald-600/20 to-cyan-neon/10",
    glowColor: "rgba(16,185,129,0.15)",
  },
  {
    icon: ShoppingCart,
    name: "RAM Informática",
    domain: "wwww.raminformatica.com.ar",
    tag: "Retail & Comercios",
    tagColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    description:
      "Motor de e-commerce con IA que enriquece automáticamente tus productos: descripciones comerciales, SEO y categorías generadas en segundos.",
    features: [
      { icon: FileText, text: "Descripciones y SEO generados por IA" },
      { icon: ShoppingCart, text: "Integración directa con Supabase" },
      { icon: MessageSquare, text: "Automatización de flujos con n8n" },
    ],
    gradient: "from-purple-600/20 to-cyan-neon/10",
    glowColor: "rgba(168,85,247,0.15)",
  },
];

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) {
  const Icon = product.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="glass glass-hover animated-border rounded-2xl p-7 flex flex-col gap-5 relative overflow-hidden group"
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`}
      />

      {/* Header */}
      <div className="flex items-start justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl glass flex items-center justify-center border border-cyan-neon/10 group-hover:border-cyan-neon/30 transition-colors">
            <Icon size={22} className="text-cyan-neon" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-cyan-neon transition-colors">
              {product.name}
            </h3>
            <span
              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${product.tagColor}`}
            >
              {product.tag}
            </span>
          </div>
        </div>
        <a
          href={`https://${product.domain}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/20 hover:text-cyan-neon transition-colors mt-1"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink size={15} />
        </a>
      </div>

      {/* Description */}
      <p className="text-sm text-white/50 leading-relaxed relative z-10">
        {product.description}
      </p>

      {/* Features */}
      <ul className="flex flex-col gap-2.5 relative z-10">
        {product.features.map(({ icon: FIcon, text }) => (
          <li
            key={text}
            className="flex items-center gap-2.5 text-sm text-white/60"
          >
            <FIcon size={14} className="text-cyan-neon shrink-0" />
            <span>{text}</span>
          </li>
        ))}
      </ul>

      {/* Domain pill */}
      <div className="mt-auto pt-3 border-t border-white/5 relative z-10">
        <span className="text-xs font-mono text-cyan-neon/60">
          {product.domain}
        </span>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="productos" className="relative py-28 overflow-hidden">
      <div
        className="glow-orb w-[500px] h-[500px] bg-cyan-neon top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        style={{ opacity: 0.06 }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs font-semibold text-cyan-neon border-cyan-neon/20 mb-6"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-neon opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-neon" />
            </span>
            Pilar 1 — Automatización & IA
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black leading-tight"
          >
            SaaS verticales para{" "}
            <span className="gradient-text">cada industria</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-white/40 max-w-xl mx-auto text-base"
          >
            Plataformas ya construidas, listas para escalar. Setup rápido,
            resultados desde el primer mes.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
