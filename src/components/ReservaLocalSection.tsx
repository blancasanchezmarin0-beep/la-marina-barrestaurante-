import { motion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface ReservaLocalSectionProps {
  locationName: string;
  phone: string;
  bgImage: string;
}

export default function ReservaLocalSection({ locationName, phone, bgImage }: ReservaLocalSectionProps) {
  const phoneRaw = phone.replace(/\s/g, "");

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background with Parallax effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={bgImage} 
          alt={`Reserva en ${locationName}`} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-soft-black/95 via-soft-black/80 to-soft-black/30" />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <AnimatedSection>
          <p className="text-off-white/80 font-body text-[10px] md:text-xs tracking-[0.4em] uppercase mb-6">
            El sabor empieza antes del primer bocado
          </p>

          <h2 className="font-heading font-normal text-2xl md:text-4xl text-off-white mb-8">
            Reserva tu mesa en <span className="text-gold">{locationName}</span>
          </h2>
          
          <p className="font-body text-off-white/70 text-sm md:text-base max-w-md mx-auto mb-16 leading-loose">
            Disfruta de nuestra cocina en un entorno único junto al Guadalquivir. Una experiencia diseñada para despertar todos tus sentidos.
          </p>

          <div className="flex justify-center">
            <a
              href={`tel:${phoneRaw}`}
              className="inline-flex items-center justify-center px-10 py-4 bg-gold text-[#1A2B3C] font-body font-medium text-[11px] md:text-[13px] uppercase tracking-widest rounded-sm hover:bg-off-white transition-all duration-300 shadow-xl shadow-soft-black/20"
            >
              Llamar ahora
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
