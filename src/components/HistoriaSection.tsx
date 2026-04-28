import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import imgHistoria from "@/assets/historia-fachada.jpg";

export default function HistoriaSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect config
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={containerRef} className="py-24 md:py-36 bg-sand/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <AnimatedSection className="text-center mb-24">
          <p className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-4">Nuestra esencia</p>
          <h2 className="font-heading font-normal text-3xl md:text-5xl text-foreground leading-tight">
            Una historia de mar,<br className="hidden md:block" /> familia y evolución
          </h2>
        </AnimatedSection>

        {/* Overlap Layout */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-0">
          
          {/* Image with Parallax & Organic Border */}
          <AnimatedSection className="w-full lg:w-7/12 relative z-0">
            <div className="overflow-hidden rounded-t-[40%] rounded-b-xl md:rounded-t-full aspect-[4/5] lg:aspect-auto lg:h-[700px] shadow-2xl relative">
              <motion.img
                style={{ y }}
                src={imgHistoria}
                alt="Terraza Gelves La Marina"
                loading="lazy"
                className="absolute inset-0 w-full h-[130%] object-cover object-center -top-[15%]"
              />
            </div>
          </AnimatedSection>

          {/* Content Block */}
          <AnimatedSection delay={0.2} className="w-full lg:w-6/12 relative z-10 lg:-ml-24 mt-[-100px] lg:mt-32">
            <div className="bg-off-white/95 backdrop-blur-md p-8 md:p-14 lg:p-16 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gold/10">
              
              {/* Separador con estilo */}
              <div className="flex items-center gap-4 mb-6">
                <p className="text-gold font-body text-xs md:text-sm tracking-[0.3em] uppercase">Mayo 2007</p>
                <span className="h-[2px] w-12 bg-gold/40 rounded-full"></span>
              </div>
              
              <h3 className="font-heading font-normal text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-[1.15]">
                Haciendo historia desde 2007
              </h3>
              
              {/* Capitular & Copywriting mejorado */}
              <p className="font-body text-muted-foreground leading-loose tracking-wide mb-6">
                <span className="float-left text-6xl md:text-7xl font-heading text-gold mr-4 mt-2 leading-[0.7]">L</span>
                a Marina abre sus puertas por primera vez en mayo de 2007, con una apuesta firme por la <strong className="font-medium text-foreground">calidad</strong> y el respeto al producto que nos brinda el mar. Un sueño familiar que comenzó con la ilusión de traer lo mejor de la costa a las orillas del Guadalquivir.
              </p>
              
              <p className="font-body text-muted-foreground leading-loose tracking-wide mb-10">
                Haciendo de la <strong className="font-medium text-foreground">fritura de pescado</strong> nuestra gran especialidad, rápidamente nos convertimos en un referente para quienes buscan el <strong className="font-medium text-foreground">sabor auténtico</strong>.
              </p>
              
              <Link
                to="/historia"
                className="inline-block px-10 py-4 border border-foreground/20 text-foreground font-body text-sm tracking-widest uppercase rounded-full bg-transparent hover:bg-[#F3EBE1] hover:border-gold/50 hover:text-foreground transition-all duration-300"
              >
                Leer historia completa
              </Link>
            </div>
          </AnimatedSection>
        </div>

      </div>
    </section>
  );
}
