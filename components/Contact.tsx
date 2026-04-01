"use client";

import { motion } from "framer-motion";
import { MessageSquare, Mail, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

const WA_NUMBER = "5492954227622";
const WA_MESSAGE = encodeURIComponent(
  "Hola! Vi tu página y me gustaría consultar sobre sus servicios."
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

const contactInfo = [
  { icon: MessageSquare, label: "WhatsApp", value: "+54 9 2954 227622" },
  { icon: Mail, label: "Email", value: "hola@rt-softwarefactory.com.ar" },
  { icon: MapPin, label: "Ubicación", value: "Santa Rosa, La Pampa" },
];

export default function Contact() {
  return (
    <section id="contacto" className="relative py-28 overflow-hidden">
      <div className="cyan-line absolute top-0 left-0 right-0" />
      <div
        className="glow-orb w-[600px] h-[400px] bg-cyan-neon top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        style={{ opacity: 0.05 }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-widest text-cyan-neon uppercase mb-4"
            >
              Arranquemos
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-black leading-tight mb-6"
            >
              Contanos tu situación,{" "}
              <span className="gradient-text">te armamos una solución</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/45 text-lg leading-relaxed mb-10"
            >
              En 30 minutos de charla entendemos tu operación y te decimos exactamente
              qué podemos automatizar, cuánto tiempo vas a recuperar y cuándo recuperás
              la inversión. Sin vueltas.
            </motion.p>

            {/* WhatsApp CTA */}
            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4 glass rounded-xl px-5 py-4 border border-green-500/25 hover:border-green-500/60 hover:bg-green-500/5 transition-all duration-300 group mb-8"
            >
              <div className="w-11 h-11 rounded-xl bg-green-500/10 border border-green-500/30 group-hover:border-green-500/60 flex items-center justify-center shrink-0 transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-green-400" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-white group-hover:text-green-400 transition-colors">
                  Escribinos por WhatsApp
                </p>
                <p className="text-xs text-white/40">Respuesta rápida · +54 9 2954 227622</p>
              </div>
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-white/20 group-hover:text-green-400 group-hover:translate-x-1 transition-all duration-300 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.a>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-4"
            >
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg glass border border-cyan-neon/15 flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-cyan-neon" />
                  </div>
                  <div>
                    <span className="text-white/30 text-xs">{label}</span>
                    <p className="text-white/60">{value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="glass rounded-2xl p-8 border border-cyan-neon/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-white/8" />
              <span className="text-xs text-white/30 whitespace-nowrap">o completá el formulario</span>
              <div className="flex-1 h-px bg-white/8" />
            </div>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
