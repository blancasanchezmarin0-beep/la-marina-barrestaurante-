import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";

import ancla from "@/assets/ancla.png";
import imgOrigen from "@/assets/historia-img1.jpg";
import imgMadurez from "@/assets/gelves-gallery2.jpg";
import imgSpace1 from "@/assets/coria/salon.jpg";
import imgSpace2 from "@/assets/coria/terraza.jpg";
import imgSpace3 from "@/assets/coria/fachada.jpg";
import imgSpace4 from "@/assets/coria/barril.jpg";

import imgFritura from "@/assets/gelves-gallery1.jpg";
import imgCarne from "@/assets/gelves-gallery2.jpg";

export default function HistoriaPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const anchorY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* 1. Cabecera (Hero Section) */}
      <section ref={heroRef} className="relative pt-48 pb-20 md:pt-64 md:pb-40 px-4 overflow-hidden">
        {/* Anchor Watermark */}
        <motion.img
          src={ancla}
          alt=""
          style={{ y: anchorY }}
          className="absolute -top-10 -left-10 w-[350px] md:w-[550px] opacity-[0.1] rotate-[30deg] pointer-events-none select-none text-[#87CEEB]"
        />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <AnimatedSection>
            <h1 className="font-heading font-normal text-5xl md:text-8xl text-[#1A445C] leading-none mb-6">
              Nuestra Historia
            </h1>
            <div className="mt-8 h-[1px] w-20 bg-[#87CEEB] mx-auto opacity-50"></div>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. Bloque 1: El Origen (2007) */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <AnimatedSection>
              <p className="font-body text-[10px] tracking-[0.5em] uppercase text-[#87CEEB] mb-6">Est. 2007</p>
              <h2 className="font-heading text-3xl md:text-5xl text-[#1A445C] mb-8 leading-tight">El Origen</h2>
              <p className="font-body text-[#1A445C]/80 text-lg md:text-xl leading-[1.8] font-light">
                La Marina abrió sus puertas en mayo de 2007 con una promesa: honrar la calidad del mar. Lo que comenzó como un sueño familiar a orillas del Guadalquivir en Gelves, es hoy el hogar del sabor más puro.
              </p>
            </AnimatedSection>
          </div>
          <div className="md:col-span-5">
            <AnimatedSection delay={0.2}>
              <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
                <img src={imgOrigen} alt="Orígenes de La Marina" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 3. Bloque 2: La Madurez y la Tierra */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <AnimatedSection>
              <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
                <img src={imgMadurez} alt="Madurez y carnes" className="w-full h-full object-cover" />
              </div>
            </AnimatedSection>
          </div>
          <div className="md:col-span-7 order-1 md:order-2">
            <AnimatedSection delay={0.2} className="md:pl-12">
              <p className="font-body text-[10px] tracking-[0.5em] uppercase text-[#87CEEB] mb-6">Evolución</p>
              <h2 className="font-heading text-3xl md:text-5xl text-[#1A445C] mb-8 leading-tight">La Madurez y la Tierra</h2>
              <p className="font-body text-[#1A445C]/80 text-lg md:text-xl leading-[1.8] font-light">
                Sin perder nuestra esencia marinera, hemos incorporado carnes de alta gama: desde la potencia de la Frisona y la Rubia Gallega, hasta la delicadeza de la Turina de Portugal. Excelencia en cada corte.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 4. Bloque 3: Expansión 2026 y Espacios */}
      <section className="bg-[#87CEEB]/10 py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-6">
              <AnimatedSection>
                <h2 className="font-heading text-4xl md:text-6xl text-[#1A445C] mb-10 leading-tight">Expansión 2026</h2>
                <p className="font-body text-[#1A445C] text-lg md:text-xl leading-[1.8] font-light mb-12">
                  En 2026, abrimos un nuevo concepto junto al río, conectando Gelves y Coria del Río bajo una misma identidad. Disponemos de 4 espacios diseñados para cada ocasión:
                </p>
                <ul className="space-y-8">
                  {[
                    { title: "Terraza Exterior", desc: "Brisa directa del Guadalquivir" },
                    { title: "Patio Interior", desc: "Un oasis de luz natural" },
                    { title: "Salón Interior", desc: "Elegancia y confort contemporáneo" },
                    { title: "Salón de Celebraciones", desc: "El escenario para tus momentos inolvidables" }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-6 items-start">
                      <div className="mt-2 h-[1px] w-8 bg-[#1A445C]/30"></div>
                      <div>
                        <h4 className="font-heading text-lg text-[#1A445C] mb-1">{item.title}</h4>
                        <p className="font-body text-sm text-[#1A445C]/60 italic">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
            <div className="md:col-span-6">
              <AnimatedSection delay={0.3}>
                <div className="grid grid-cols-2 gap-4">
                  {[imgSpace1, imgSpace2, imgSpace3, imgSpace4].map((img, i) => (
                    <div key={i} className="aspect-square rounded-sm overflow-hidden shadow-lg group">
                      <img src={img} alt="Ambiente La Marina" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bloque 4: Restaurantes (Sedes Premium) */}
      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-20">
            <h2 className="font-heading text-4xl md:text-6xl text-[#1A445C] mb-4">Restaurantes</h2>
            <div className="h-[1px] w-12 bg-[#87CEEB] mx-auto opacity-60"></div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start mb-32">
            {/* Gelves */}
            <AnimatedSection className="flex flex-col items-center text-center">
              <div className="w-full aspect-[4/3] rounded-sm overflow-hidden shadow-xl mb-10">
                <img src={imgFritura} alt="Fritura La Marina Gelves" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl text-[#1A445C] mb-6">La Marina Gelves</h3>
              <div className="space-y-2 mb-10">
                <p className="font-body text-[#1A445C]/60 text-sm flex items-center justify-center gap-2">
                  <MapPin size={16} className="text-[#87CEEB]" /> Pl. de la Marina, 1 · Gelves
                </p>
                <p className="font-body text-[#1A445C]/60 text-sm flex items-center justify-center gap-2">
                  <Phone size={16} className="text-[#87CEEB]" /> +34 674 322 897
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link to="/gelves" className="px-8 py-3 bg-[#1A445C] text-white font-body text-xs tracking-widest uppercase rounded-sm hover:bg-[#004865] transition-all flex items-center justify-center gap-2">
                  Explorar <ArrowUpRight size={14} />
                </Link>
                <a href="https://share.google/18HQvkOaVOtBli8Ul" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-[#C5A059] text-[#1A445C] font-body text-xs tracking-widest uppercase rounded-sm hover:bg-sand/20 transition-all flex items-center justify-center">
                  Cómo llegar
                </a>
              </div>
            </AnimatedSection>

            {/* Coria */}
            <AnimatedSection delay={0.2} className="flex flex-col items-center text-center">
              <div className="w-full aspect-[4/3] rounded-sm overflow-hidden shadow-xl mb-10">
                <img src={imgCarne} alt="Carnes La Marina Coria" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl text-[#1A445C] mb-6">La Marina Coria</h3>
              <div className="space-y-2 mb-10">
                <p className="font-body text-[#1A445C]/60 text-sm flex items-center justify-center gap-2">
                  <MapPin size={16} className="text-[#87CEEB]" /> Calle Batán, 95 · Coria del Río
                </p>
                <p className="font-body text-[#1A445C]/60 text-sm flex items-center justify-center gap-2">
                  <Phone size={16} className="text-[#87CEEB]" /> +34 614 940 256
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link to="/coria" className="px-8 py-3 bg-[#1A445C] text-white font-body text-xs tracking-widest uppercase rounded-sm hover:bg-[#004865] transition-all flex items-center justify-center gap-2">
                  Explorar <ArrowUpRight size={14} />
                </Link>
                <a href="https://share.google/jsPn75LlDP20kz9i4" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-[#C5A059] text-[#1A445C] font-body text-xs tracking-widest uppercase rounded-sm hover:bg-sand/20 transition-all flex items-center justify-center">
                  Cómo llegar
                </a>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection>
            <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-sm overflow-hidden shadow-2xl border border-[#87CEEB]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50711.6917637508!2d-6.065096577880856!3d37.30799797205165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126efee60633b3%3A0xb5b7fd8f78028ff!2sLa%20Marina!5e0!3m2!1ses!2ses!4v1714312000000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) contrast(1.1) brightness(0.9)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa sedes La Marina"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 6. Cierre y Acción */}
      <section className="pt-10 pb-40 text-center px-4">
        <AnimatedSection>
          <p className="font-body italic text-2xl md:text-4xl text-[#1A445C] mb-12">
            Tu próximo capítulo en el río comienza aquí.
          </p>
          <Link
            to="/#reservas"
            className="inline-block px-14 py-5 bg-[#1A445C] text-white font-body text-xs md:text-sm tracking-[0.4em] uppercase rounded-sm hover:bg-[#004865] transition-all duration-500 shadow-xl"
          >
            Reservar tu mesa
          </Link>
        </AnimatedSection>
      </section>

      <Footer />
    </div>
  );
}
