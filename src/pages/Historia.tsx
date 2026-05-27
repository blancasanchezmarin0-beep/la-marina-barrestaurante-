import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Mail, Flame, Beef, Anchor, Waves, ArrowRight } from "lucide-react";

import ancla from "@/assets/ancla.png";
import imgOrigen from "@/assets/gallery-fish.jpg";
import imgMadurez from "@/assets/gallery-meat.jpg";
import imgSpace1 from "@/assets/coria/salon-interior-real.jpg";
import imgSpace2 from "@/assets/coria/terraza-exterior-real.jpg";
import imgSpace3 from "@/assets/celebraciones-nueva.jpg"; // New celebrations hall image
import imgSpace4 from "@/assets/coria/barril.jpg";
import imgHeroVisual from "@/assets/coria-hero-2055.jpg";

export default function HistoriaPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const anchorY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-white min-h-screen font-body text-[#1A445C]">
      <Navbar />
      
      {/* 1. Hero / Cabecera con Visual */}
      <section ref={heroRef} className="relative h-[65vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Visual Background */}
        <div className="absolute inset-0">
          <img 
            src={imgHeroVisual} 
            alt="La Marina" 
            className="w-full h-full object-cover scale-105"
          />
          {/* Dark Blue Overlay */}
          <div className="absolute inset-0 bg-[#1A445C]/60 backdrop-blur-[2px]" />
        </div>

        <motion.img
          src={ancla}
          alt=""
          style={{ y: anchorY, opacity: 0.15 }}
          className="absolute w-[400px] md:w-[600px] rotate-[15deg] -right-20 -top-20 pointer-events-none select-none"
        />
        
        <motion.div style={{ opacity }} className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="font-body text-[11px] tracking-[0.6em] uppercase text-[#87CEEB] mb-6 font-semibold">Legado y Tradición</p>
            <h1 className="font-heading font-normal text-5xl md:text-8xl text-white leading-none mb-6">
              Nuestra Historia
            </h1>
            <p className="font-heading italic text-lg md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Un viaje de sabor que nace a orillas del Guadalquivir.
            </p>
          </AnimatedSection>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-[1px] h-12 bg-white"></div>
        </div>
      </section>

      {/* 2. Sección: El Origen */}
      <section className="py-24 md:py-44 max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="relative order-2 lg:order-1">
            <AnimatedSection>
              <div className="relative group">
                <div className="absolute -inset-4 border border-[#87CEEB]/20 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700"></div>
                <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
                  <img 
                    src={imgOrigen} 
                    alt="Origen de La Marina" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                  />
                </div>
              </div>
            </AnimatedSection>
            {/* Minimalist floating year */}
            <div className="absolute -bottom-10 -right-10 hidden md:block">
              <span className="text-[9rem] font-heading leading-none text-[#87CEEB]/10 select-none">2007</span>
            </div>
          </div>

          <div className="space-y-10 order-1 lg:order-2">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-10 h-[1px] bg-[#87CEEB]"></span>
                <p className="font-body text-[10px] tracking-widest uppercase text-[#87CEEB] font-bold">EST. 2007</p>
              </div>
              <h2 className="font-heading text-3xl md:text-5xl text-[#1A445C] leading-tight mb-8">El Origen</h2>
              <div className="space-y-6 max-w-lg">
                <p className="font-body text-gray-600 text-base md:text-[17px] leading-[1.8] font-light">
                  La Marina abrió sus puertas en mayo de 2007 con una idea clara: <span className="text-[#1A445C] font-normal">rendir homenaje al sabor auténtico del mar.</span> Nacida como un sueño familiar a orillas del Guadalquivir, en Gelves, este proyecto creció entre tradición, producto fresco y el respeto por la cocina de siempre.
                </p>
                <p className="font-body text-gray-600 text-base md:text-[17px] leading-[1.8] font-light">
                  Cada plato cuenta una historia que empieza en el mar y termina en la mesa. Aquí, la sencillez no es casualidad: es una elección. Porque cuando la materia prima es buena, solo hace falta tratarla con cariño.
                </p>
                <p className="font-body text-gray-600 text-base leading-[1.8] font-light italic border-l-2 border-[#87CEEB] pl-6 py-2">
                  Hoy, La Marina sigue siendo ese lugar donde compartir, disfrutar sin prisas y volver a los sabores de verdad. Un rincón donde el tiempo se detiene y el protagonista siempre es el producto.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 3. Sección: Evolución - La Madurez y la Tierra */}
      <section className="relative py-24 md:py-48 bg-[#1A445C] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
          <AnimatedSection className="text-center mb-16 md:mb-20">
            <p className="font-body text-[9px] tracking-[0.5em] uppercase text-[#87CEEB] mb-6">Trayectoria</p>
            <h2 className="font-heading text-3xl md:text-6xl mb-8">Evolución</h2>
            <div className="w-12 h-[1px] bg-[#87CEEB] mx-auto"></div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-8 md:space-y-10">
              <AnimatedSection>
                <div className="flex items-center gap-4 mb-4 md:mb-6">
                  <Beef className="text-[#87CEEB]" size={28} />
                  <span className="font-body text-[10px] md:text-xs tracking-widest uppercase text-[#87CEEB] font-bold">La Madurez y la Tierra</span>
                </div>
                <h3 className="font-heading text-2xl md:text-4xl mb-6 leading-tight">Excelencia en cada corte</h3>
                
                <div className="space-y-4 mb-10">
                  <p className="font-body text-gray-300 text-base md:text-[18px] leading-[1.7] md:leading-[1.8] font-light max-w-xl">
                    Sin perder nuestra esencia marinera, hemos incorporado carnes de alta gama: desde la potencia de la <span className="text-white font-normal border-b border-[#87CEEB]">Frisona y la Rubia Gallega</span>, hasta la delicadeza de la Turina de Portugal.
                  </p>
                  <p className="font-body text-gray-300 text-base md:text-[18px] leading-[1.7] md:leading-[1.8] font-light max-w-xl">
                    Excelencia en cada corte, tratada con el mismo respeto que nuestros productos del mar.
                  </p>
                </div>

                <div className="flex flex-col gap-6 md:gap-8 max-w-xs">
                  {[
                    { icon: Beef, label: "Cortes madurados" },
                    { icon: Flame, label: "Parrilla tradicional" },
                    { icon: Anchor, label: "Origen certificado" }
                  ].map((item, i) => (
                    <div key={i} className="group flex items-center gap-6">
                      <div className="p-3 bg-white/5 rounded-full group-hover:bg-[#87CEEB]/20 transition-colors">
                        <item.icon className="text-[#87CEEB] group-hover:scale-110 transition-transform" size={28} />
                      </div>
                      <p className="text-[13px] tracking-[0.2em] uppercase font-semibold text-gray-300 group-hover:text-white transition-colors">{item.label}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
            
            <AnimatedSection delay={0.2} className="relative">
              <div className="aspect-square rounded-full overflow-hidden border-[1px] border-[#87CEEB]/30 p-4">
                <img src={imgMadurez} alt="Carnes Premium" className="w-full h-full object-cover rounded-full brightness-110 hover:scale-105 transition-all duration-1000" />
              </div>
              <div className="absolute top-0 right-0 p-8 bg-[#87CEEB] text-[#1A445C] rounded-full -translate-y-1/2 translate-x-1/2 hidden md:block shadow-2xl">
                <Beef size={40} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 4. Sección: Expansión 2026 */}
      <section className="py-24 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <AnimatedSection className="max-w-xl">
              <p className="font-body text-[10px] tracking-[0.5em] uppercase text-[#87CEEB] mb-6 font-bold">Futuro</p>
              <h2 className="font-heading text-4xl md:text-6xl text-[#1A445C] leading-[0.9] mb-8">Expansión <span className="text-[#87CEEB]">2026</span></h2>
              <p className="font-body text-gray-500 text-base md:text-lg leading-relaxed">
                En 2026, abrimos un nuevo concepto junto al río, conectando Gelves y Coria del Río bajo una misma identidad. Disponemos de 4 espacios diseñados para cada ocasión:
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3} className="hidden md:block">
              <div className="flex items-center gap-4 text-[#87CEEB]">
                <span className="text-sm font-body tracking-[0.3em] uppercase whitespace-nowrap">Desliza para explorar</span>
                <ArrowRight size={24} className="animate-pulse" />
              </div>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Terraza Exterior", desc: "Brisa directa del Guadalquivir", img: imgSpace2, to: null },
              { title: "Patio Interior", desc: "Un oasis de luz natural", img: imgSpace4, to: null },
              { title: "Salón Interior", desc: "Elegancia y confort contemporáneo", img: imgSpace1, to: null },
              { title: "Salón de Celebraciones", desc: "El escenario para tus momentos inolvidables", img: imgSpace3, to: "/celebraciones" }
            ].map((space, i) => {
              const card = (
                <div className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img src={space.img} alt={space.title} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A445C] via-[#1A445C]/20 to-transparent p-6 flex flex-col justify-end">
                    <h4 className="font-heading text-xl text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{space.title}</h4>
                    <p className="font-body text-[11px] text-white/60 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 italic">{space.desc}</p>
                  </div>
                </div>
              );
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  {space.to ? <Link to={space.to}>{card}</Link> : card}
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Sección final: Información de los dos locales */}
      <section className="py-24 md:py-36 bg-gray-50 overflow-hidden relative">
        <motion.img
          src={ancla}
          alt=""
          className="absolute -bottom-20 -left-20 w-[350px] opacity-[0.03] select-none pointer-events-none"
        />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl text-[#1A445C]">Dos Sedes, Un Espíritu</h2>
            <div className="mt-6 h-[1px] w-10 bg-[#87CEEB] mx-auto"></div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {/* Gelves */}
            <AnimatedSection className="bg-white p-8 md:p-12 rounded-sm shadow-sm border-t-4 border-[#87CEEB] hover:shadow-xl transition-shadow duration-500">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <h3 className="font-heading text-2xl text-[#1A445C] mb-2">La Marina Gelves</h3>
                  <p className="font-body text-[10px] tracking-widest uppercase text-[#87CEEB] font-bold">Nuestra Casa Original</p>
                </div>
                <Anchor className="text-[#87CEEB]" size={30} />
              </div>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-6">
                  <MapPin className="text-[#87CEEB] mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-body text-sm font-semibold mb-1">Dirección</p>
                    <p className="font-body text-gray-500 text-sm">Plaza de la Marina, 1 · Gelves</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <Phone className="text-[#87CEEB] mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-body text-sm font-semibold mb-1">Contacto</p>
                    <p className="font-body text-gray-500 text-sm">+34 674 322 897</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <Clock className="text-[#87CEEB] mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-body text-sm font-semibold mb-1">Horario</p>
                    <p className="font-body text-gray-500 text-sm">Martes a Domingo: 12:00 — 00:00</p>
                    <p className="font-body text-gray-400 text-xs mt-1 italic">Lunes cerrado por descanso</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link to="/gelves" className="flex-1 bg-[#1A445C] text-white text-center py-4 font-body text-[10px] tracking-widest uppercase rounded-sm hover:bg-[#2a5b7a] transition-all">
                  Página de Gelves
                </Link>
                <a href="https://share.google/18HQvkOaVOtBli8Ul" target="_blank" rel="noopener noreferrer" className="flex-1 border border-gray-200 text-[#1A445C] text-center py-4 font-body text-[10px] tracking-widest uppercase rounded-sm hover:bg-gray-50 transition-all">
                  Cómo llegar
                </a>
              </div>
            </AnimatedSection>

            {/* Coria */}
            <AnimatedSection delay={0.2} className="bg-white p-10 md:p-16 rounded-sm shadow-sm border-t-4 border-[#1A445C] hover:shadow-xl transition-shadow duration-500">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="font-heading text-3xl text-[#1A445C] mb-2">La Marina Coria</h3>
                  <p className="font-body text-xs tracking-widest uppercase text-[#87CEEB] font-bold">Nueva Sede</p>
                </div>
                <Waves className="text-[#87CEEB]" size={36} />
              </div>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-6">
                  <MapPin className="text-[#1A445C] mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-body text-sm font-semibold mb-1">Dirección</p>
                    <p className="font-body text-gray-500 text-sm">Calle Batán, 95 · Coria del Río</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <Phone className="text-[#1A445C] mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-body text-sm font-semibold mb-1">Contacto</p>
                    <p className="font-body text-gray-500 text-sm">+34 614 940 256</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <Clock className="text-[#1A445C] mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-body text-sm font-semibold mb-1">Horario</p>
                    <p className="font-body text-gray-500 text-sm">Martes a Domingo: 12:00 — 00:00</p>
                    <p className="font-body text-gray-400 text-xs mt-1 italic">Lunes cerrado por descanso</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link to="/coria" className="flex-1 bg-[#1A445C] text-white text-center py-4 font-body text-[10px] tracking-widest uppercase rounded-sm hover:bg-[#2a5b7a] transition-all">
                  Página de Coria
                </Link>
                <a href="https://share.google/jsPn75LlDP20kz9i4" target="_blank" rel="noopener noreferrer" className="flex-1 border border-gray-200 text-[#1A445C] text-center py-4 font-body text-[10px] tracking-widest uppercase rounded-sm hover:bg-gray-50 transition-all">
                  Cómo llegar
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Cierre emocional con imagen de fondo */}
      <section className="relative py-48 md:py-64 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={imgSpace2} 
            alt="La Marina Terraza" 
            className="w-full h-full object-cover grayscale brightness-50"
          />
          {/* Deep Petroleum Blue Overlay (70% opacity) */}
          <div className="absolute inset-0 bg-[#1A445C]/70" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <AnimatedSection>
            <Waves className="text-[#87CEEB] mx-auto mb-12 animate-vertical-bounce" size={48} />
            <h2 className="font-heading italic text-4xl md:text-6xl text-white mb-16 max-w-4xl mx-auto leading-tight">
              "Donde el río abraza a la tradición, comienza tu experiencia en La Marina."
            </h2>
            <Link
              to="/#reservas"
              className="inline-block px-14 py-5 bg-[#87CEEB] text-[#1A445C] font-body text-sm tracking-[0.4em] uppercase rounded-sm hover:bg-[#78D4EC] transition-all duration-500 shadow-2xl font-bold"
            >
              Reservar tu mesa
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
