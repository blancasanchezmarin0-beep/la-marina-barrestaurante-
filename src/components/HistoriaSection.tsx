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
          <p className="text-gray-400 font-body text-xs tracking-[0.3em] uppercase mb-4">Nuestra esencia</p>
          <h2 className="font-heading font-normal text-3xl md:text-5xl text-[#1A445C] leading-tight">
            Una historia de mar,<br className="hidden md:block" /> familia y evolución
          </h2>
        </AnimatedSection>

        {/* Overlap Layout */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-0">
          
          {/* Image with Parallax & Organic Border */}
          <AnimatedSection className="w-full lg:w-7/12 relative z-0">
            <div className="overflow-hidden rounded-t-[40%] rounded-b-xl md:rounded-t-full aspect-[4/5] lg:aspect-auto lg:h-[700px] shadow-sm relative border border-gray-100">
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
            <div className="bg-white p-8 md:p-14 lg:p-16 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100">
              
              {/* Separador con estilo */}
              <div className="flex items-center gap-4 mb-6">
                <p className="text-gray-400 font-body text-xs md:text-sm tracking-[0.3em] uppercase">Mayo 2007</p>
                <span className="h-[1px] w-12 bg-gray-200"></span>
              </div>
              
              <h3 className="font-heading font-normal text-3xl md:text-4xl lg:text-5xl text-[#1A445C] mb-8 leading-[1.15]">
                Haciendo historia desde 2007
              </h3>
              
              <p className="font-body text-gray-500 leading-loose tracking-wide mb-6">
                La Marina abre sus puertas por primera vez en mayo de 2007, con una apuesta firme por la calidad y el respeto al producto que nos brinda el mar. Un sueño familiar que comenzó con la ilusión de traer lo mejor de la costa a las orillas del Guadalquivir.
              </p>
              
              <p className="font-body text-gray-500 leading-loose tracking-wide mb-10">
                Haciendo de la fritura de pescado nuestra gran especialidad, hoy evolucionamos hacia un concepto gourmet donde el producto es el único protagonista.
              </p>
              
              <Link
                to="/historia"
                className="inline-block px-10 py-4 border border-[#1A445C] text-[#1A445C] font-body text-sm tracking-widest uppercase rounded-full bg-transparent hover:bg-[#1A445C] hover:text-white transition-all duration-300"
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
