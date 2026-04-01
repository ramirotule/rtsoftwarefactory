"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Clock, MapPin, Bot, Globe, LayoutDashboard } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const stats = [
  { value: "3x", label: "retorno sobre la inversión" },
  { value: "−12 hs", label: "de tareas manuales por semana" },
  { value: "100%", label: "soporte local, sin intermediarios" },
];

const pillars = [
  {
    icon: Bot,
    label: "Automatización & IA",
    desc: "n8n · Bots WhatsApp · SaaS vertical",
    href: "#productos",
  },
  {
    icon: Globe,
    label: "Páginas Web",
    desc: "Landings · Sitios institucionales",
    href: "#sistemas-web",
  },
  {
    icon: LayoutDashboard,
    label: "Sistemas de Gestión",
    desc: "Kioscos · Almacenes · Restaurantes",
    href: "#sistemas-web",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden grid-bg">
      {/* Glow orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-cyan-neon top-1/4 -left-64" />
      <div className="glow-orb w-[400px] h-[400px] bg-cyan-glow bottom-1/4 -right-48" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-dark-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 flex flex-col items-center text-center">

        {/* Badge */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-semibold text-cyan-neon mb-8 border-cyan-neon/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-neon opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-neon" />
          </span>
          RT Software Factory — Santa Rosa, La Pampa
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight max-w-5xl"
        >
          Construimos el motor{" "}
          <span className="relative inline-block">
            <span className="gradient-text">tecnológico</span>
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-neon to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.85 }}
            />
          </span>
          <br />
          de tu negocio
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed"
        >
          Automatizamos lo que te quita tiempo, digitalizamos lo que te hace perder dinero
          y escalás sin necesitar{" "}
          <span className="text-white/80">contratar más personal.</span>
        </motion.p>

        {/* Pillars */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-3 mt-10 w-full max-w-3xl"
        >
          {pillars.map(({ icon: Icon, label, desc, href }) => (
            <a
              key={label}
              href={href}
              className="glass glass-hover flex-1 flex items-center gap-3 px-4 py-3.5 rounded-xl group"
            >
              <div className="w-9 h-9 rounded-lg bg-cyan-neon/10 border border-cyan-neon/20 group-hover:border-cyan-neon/50 flex items-center justify-center shrink-0 transition-colors">
                <Icon size={16} className="text-cyan-neon" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-white group-hover:text-cyan-neon transition-colors leading-tight">
                  {label}
                </p>
                <p className="text-[11px] text-white/35 leading-tight mt-0.5">{desc}</p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <a
            href="#contacto"
            className="btn-primary flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold"
          >
            Quiero que me contacten
            <ArrowRight size={18} />
          </a>
          <a
            href="#productos"
            className="btn-outline flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base"
          >
            Ver cómo trabajamos
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-20 grid grid-cols-3 gap-8 md:gap-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.75 + i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-black neon-text">{stat.value}</p>
              <p className="text-xs md:text-sm text-white/40 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16 animate-bounce"
        >
          <div className="w-6 h-10 rounded-full border border-white/20 mx-auto flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-cyan-neon/60" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
