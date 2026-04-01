"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SiteLogo() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-4 z-50 cursor-pointer group"
      aria-label="Volver al inicio"
    >
      <Image
        src="/logo-transparente.png"
        alt="RT Software Factory"
        width={320}
        height={390}
        className="w-[320px] h-[390px] object-contain transition-all duration-300"
        style={{
          filter: "drop-shadow(0 0 6px rgba(0,212,255,0.7))",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.filter =
            "drop-shadow(0 0 16px rgba(0,212,255,1)) drop-shadow(0 0 32px rgba(0,212,255,0.6)) drop-shadow(0 0 48px rgba(0,212,255,0.3))";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.filter =
            "drop-shadow(0 0 6px rgba(0,212,255,0.7))";
        }}
        priority
      />
    </motion.button>
  );
}
