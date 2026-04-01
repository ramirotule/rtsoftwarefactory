"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, TrendingUp, HeartHandshake, Rocket } from "lucide-react";

const advantages = [
  {
    icon: MapPin,
    title: "Base en Santa Rosa, La Pampa",
    description:
      "Podemos reunirnos, ir a tu local y entender tu operación en persona. No somos una voz anónima del otro lado de un ticket.",
  },
  {
    icon: Phone,
    title: "Hablás con quien hizo tu sistema",
    description:
      "Sin call centers, sin soporte tercerizado. El desarrollador que construyó tu solución es el mismo que te responde el teléfono.",
  },
  {
    icon: Clock,
    title: "Respuesta en menos de 4 horas",
    description:
      "Un problema no puede esperar 3 días hábiles. Nuestro tiempo de respuesta promedio es de 3.5 horas en días hábiles.",
  },
  {
    icon: TrendingUp,
    title: "Precios del interior, calidad de capital",
    description:
      "Las mismas tecnologías que usan las empresas grandes de Buenos Aires, sin el overhead de una agencia porteña.",
  },
  {
    icon: HeartHandshake,
    title: "Tu crecimiento es el nuestro",
    description:
      "Trabajamos con abonos mensuales porque nos interesa que tu negocio funcione a largo plazo, no facturarte un proyecto y desaparecer.",
  },
  {
    icon: Rocket,
    title: "Implementación en días, no meses",
    description:
      "Nuestras soluciones ya están construidas y probadas. El tiempo promedio de puesta en marcha es de 5 días hábiles.",
  },
];

export default function LocalAdvantage() {
  return (
    <section id="nosotros" className="relative py-28 overflow-hidden">
      <div className="cyan-line absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/60 to-dark-950 pointer-events-none" />
      <div className="glow-orb w-[600px] h-[300px] bg-cyan-neon left-0 top-1/2 -translate-y-1/2" style={{ opacity: 0.05 }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-widest text-cyan-neon uppercase mb-4"
            >
              Por qué RT Software Factory
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-black leading-tight mb-6"
            >
              Tecnología de nivel,{" "}
              <span className="gradient-text">socio de barrio</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/45 text-lg leading-relaxed mb-8"
            >
              Las agencias de Buenos Aires te cobran el triple, no conocen tu mercado
              y desaparecen a los tres meses. Nosotros somos de acá. Sabemos lo que
              cuesta una hora de tu tiempo y lo que significa perder una venta.
            </motion.p>

            {/* Location card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass rounded-xl p-5 flex items-center gap-4 border-cyan-neon/15 max-w-xs"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-neon/10 border border-cyan-neon/20 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-cyan-neon" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Santa Rosa, La Pampa</p>
                <p className="text-xs text-white/40">Argentina · Atención presencial disponible</p>
              </div>
            </motion.div>
          </div>

          {/* Right: grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {advantages.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass glass-hover rounded-xl p-4 group"
                >
                  <Icon
                    size={18}
                    className="text-cyan-neon mb-3 group-hover:scale-110 transition-transform duration-300"
                  />
                  <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-xs text-white/40 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
