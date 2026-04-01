"use client";

import { motion } from "framer-motion";
import {
  Workflow,
  MessageSquare,
  BrainCircuit,
  Share2,
  Database,
  Repeat2,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
};

const services = [
  {
    icon: Workflow,
    title: "Flujos automatizados con n8n",
    saving: "Ahorrás hasta 8 hs/semana",
    description:
      "Conectamos tus herramientas y eliminamos el trabajo repetitivo. Lo que hoy hace alguien manualmente, mañana lo hace solo — sin errores y sin supervisión.",
  },
  {
    icon: MessageSquare,
    title: "Atención automática por WhatsApp",
    saving: "Ahorrás hasta 3 hs/día",
    description:
      "Tu negocio responde, filtra y califica consultas las 24 horas. No perdés más ventas por no poder atender fuera de horario.",
  },
  {
    icon: BrainCircuit,
    title: "Contenido generado por IA",
    saving: "Escalás sin contratar community",
    description:
      "Descripciones, posts, videos y audios creados automáticamente a partir de tus datos. Tu presencia digital funciona aunque no estés mirando.",
  },
  {
    icon: Share2,
    title: "Publicación automática en redes",
    saving: "Cero tiempo invertido en postear",
    description:
      "Un solo dato dispara la publicación en Instagram, Facebook, TikTok y MercadoLibre — con el formato y copy correcto para cada plataforma.",
  },
  {
    icon: Database,
    title: "Base de datos y backend escalable",
    saving: "Crecés sin cambiar de infraestructura",
    description:
      "Construimos sobre Supabase para que tu sistema no colapse cuando tu negocio crezca. La inversión de hoy te sirve por años.",
  },
  {
    icon: Repeat2,
    title: "Integraciones con tus sistemas",
    saving: "Sin empezar de cero",
    description:
      "¿Tenés un sistema propio o heredado? Lo integramos. Tu equipo sigue trabajando como siempre, pero los datos fluyen solos.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-28 overflow-hidden">
      <div className="cyan-line mb-0 absolute top-0 left-0 right-0" />
      <div className="glow-orb w-[500px] h-[500px] bg-cyan-neon bottom-0 right-0" style={{ opacity: 0.07 }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-widest text-cyan-neon uppercase mb-4"
            >
              Cómo generamos ROI
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-black leading-tight"
            >
              Cada servicio tiene un{" "}
              <span className="gradient-text">impacto medible</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 text-base leading-relaxed md:text-right"
          >
            No vendemos tecnología por la tecnología. Cada automatización que construimos
            tiene un ahorro de tiempo concreto o un ingreso extra directo para tu negocio.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="glass glass-hover rounded-xl p-6 group cursor-default"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg glass flex items-center justify-center border border-cyan-neon/10 group-hover:border-cyan-neon/40 group-hover:shadow-neon-sm transition-all duration-300">
                    <Icon size={18} className="text-cyan-neon" />
                  </div>
                  <span className="text-[10px] font-semibold text-cyan-neon/70 bg-cyan-neon/8 border border-cyan-neon/15 px-2 py-1 rounded-full text-right leading-tight max-w-[120px]">
                    {service.saving}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-neon transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
