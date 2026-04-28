import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/home-hero.jpg";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Restaurante La Marina" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-soft-black/60" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-4"
        >
          Desde 2007
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-heading font-normal text-4xl md:text-6xl lg:text-7xl text-off-white mb-6"
        >
          LA MARINA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-heading font-normal text-lg md:text-xl text-off-white/90 italic mb-3"
        >
          Sabor del mar. Tradición que evoluciona.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-body text-off-white/70 text-sm md:text-base mb-10 max-w-xl mx-auto"
        >
          Desde 2007 trayendo lo mejor de la costa a las orillas del Guadalquivir.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo("carta")}
            className="px-8 py-3.5 border border-off-white/30 text-off-white font-body text-sm tracking-wide hover:bg-off-white/10 transition-colors rounded-sm"
          >
            Ver carta
          </button>
          <button
            onClick={() => scrollTo("reservas")}
            className="px-8 py-3.5 bg-gold text-off-white font-body text-sm font-medium tracking-wide hover:bg-gold/90 transition-colors rounded-sm"
          >
            Reservar mesa
          </button>
        </motion.div>
      </div>
    </section>
  );
}
