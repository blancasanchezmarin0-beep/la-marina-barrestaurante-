import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ReservaLocalSection from "@/components/ReservaLocalSection";
import GaleriaSection from "@/components/GaleriaSection";
import HorariosSection from "@/components/HorariosSection";
import MapSection from "@/components/MapSection";
import { menuData } from "@/data/menu";
import { MapPin, ArrowRight } from "lucide-react";
import ancla from "@/assets/ancla.png";
import timon from "@/assets/timon.png";

import coriaHero from "@/assets/coria-hero-2055.jpg";
import imgSalonCoria from "@/assets/coria/salon-interior.jpg";
import imgTerrazaCoria from "@/assets/coria/terraza-exterior.jpg";
import imgPatioBarriles from "@/assets/coria/patio-barriles.jpg";
import imgCelebracionesCoria from "@/assets/coria/celebraciones.jpg";
import imgPatioNoche from "@/assets/coria/patio-noche.jpg";

const spaces = [
  { 
    title: "Salón Interior", 
    image: imgSalonCoria, 
    desc: "Un espacio acogedor con una decoración marinera auténtica, pensado para disfrutar con calma y comodidad." 
  },
  { 
    title: "Terraza Exterior", 
    image: imgTerrazaCoria, 
    desc: "Abierta al Guadalquivir, donde la brisa y el entorno crean una experiencia única al aire libre." 
  },
  { 
    title: "Patio Interior", 
    image: imgPatioBarriles, 
    desc: "Un oasis de luz natural que combina tranquilidad y frescura en un ambiente íntimo." 
  },
  { 
    title: "Salón de Celebraciones", 
    image: imgCelebracionesCoria, 
    desc: "El lugar perfecto para eventos especiales, diseñado para momentos que merecen ser recordados." 
  },
];

const coriaGalleryImages = [
  { src: imgPatioNoche, title: "Ambiente nocturno", category: "Ambiente", size: "wide" },
  { src: imgCelebracionesCoria, title: "Grandes momentos", category: "Eventos", size: "medium" },
  { src: imgPatioBarriles, title: "Rincón tradicional", category: "Nosotros", size: "tall" },
  { src: imgSalonCoria, title: "Gastronomía y confort", category: "Ambiente", size: "medium" },
  { src: imgTerrazaCoria, title: "Vistas al río", category: "Terraza", size: "wide" },
];

export default function CoriaPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const categories = menuData["coria"] || [];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={coriaHero} alt="La Marina Coria" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-[#1A445C]/60" />
        </div>
        <div className="relative z-10 text-center px-4">
          <AnimatedSection>
            <p className="text-[#87CEEB] font-body text-xs tracking-[0.4em] uppercase mb-4 font-bold">La Marina Coria</p>
            <h1 className="font-heading font-normal text-4xl md:text-7xl text-white mb-6">Bar Restaurante Coria</h1>
            <p className="flex items-center justify-center gap-2 mt-4 font-body text-base text-white/80">
              <MapPin size={18} className="text-[#87CEEB]" /> Calle Batán, 95 · Coria del Río
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Description */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="font-body text-gray-600 text-lg md:text-2xl leading-relaxed font-light">
              Nuestro local en <span className="text-[#1A445C] font-normal">Coria del Río</span>, en pleno corazón del pueblo, mantiene la esencia de La Marina con una propuesta que fusiona nuestra tradicional fritura con carnes de las mejores ganaderías de la península.
            </p>
            <div className="mt-12 h-[1px] w-20 bg-gray-200 mx-auto"></div>
          </AnimatedSection>
        </div>
      </section>

      {/* Nuestros Espacios - Grid 2x2 Desktop, Horizontal Scroll Column Mobile */}
      <section className="py-24 md:py-40 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <AnimatedSection className="text-center mb-16 md:mb-24">
            <p className="text-[#87CEEB] font-body text-xs tracking-[0.3em] uppercase mb-4 font-bold">Nuestros espacios</p>
            <h2 className="font-heading font-normal text-4xl md:text-6xl text-[#1A445C] mb-6">Cuatro ambientes, una experiencia</h2>
            <p className="text-gray-400 font-body text-sm md:text-base">Diseñados para cada ocasión, con la calma del río como testigo.</p>
          </AnimatedSection>

          {/* Desktop Grid 2x2 */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12">
            {spaces.map((space, i) => (
              <AnimatedSection key={space.title} delay={i * 0.1}>
                <div className="group relative aspect-[16/10] overflow-hidden rounded-xl shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer">
                  <img
                    src={space.image}
                    alt={space.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A445C] via-[#1A445C]/20 to-transparent p-10 flex flex-col justify-end">
                    <h3 className="font-heading text-3xl text-white mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{space.title}</h3>
                    <p className="font-body text-sm text-white/70 max-w-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {space.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Mobile Vertical List with Horizontal feel (Cards in column with nice spacing) */}
          <div className="md:hidden space-y-8">
            {spaces.map((space, i) => (
              <AnimatedSection key={space.title} delay={i * 0.1}>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <img src={space.image} alt={space.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A445C] via-transparent to-transparent p-8 flex flex-col justify-end">
                    <h3 className="font-heading text-2xl text-white mb-2">{space.title}</h3>
                    <p className="font-body text-sm text-white/70 leading-relaxed italic">
                      {space.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Carta */}
      <section id="carta" className="relative py-24 md:py-40 bg-white overflow-hidden">
        <img src={ancla} alt="" aria-hidden="true" className="absolute -top-10 -left-16 w-[380px] md:w-[500px] opacity-[0.04] pointer-events-none select-none" style={{ transform: "rotate(35deg)", transformOrigin: "top left" }} />
        <img src={timon} alt="" aria-hidden="true" className="absolute -bottom-16 -right-16 w-[340px] md:w-[460px] opacity-[0.04] pointer-events-none select-none" style={{ transform: "rotate(-30deg)", transformOrigin: "bottom right" }} />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#87CEEB] font-body text-xs tracking-[0.3em] uppercase mb-4 font-bold">Gastronomía</p>
            <h2 className="font-heading font-normal text-4xl md:text-5xl text-[#1A445C] mb-6">Nuestra carta en Coria</h2>
            <p className="text-gray-400 font-body text-sm">Selecciona una categoría para explorar nuestra propuesta.</p>
          </AnimatedSection>
          
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {categories.map((cat, i) => (
              <button key={cat.label} onClick={() => setActiveCategory(i)}
                className={`px-6 py-2.5 text-sm font-body tracking-wider transition-all border-b-2 font-medium ${
                  activeCategory === i ? "border-[#1A445C] text-[#1A445C]" : "border-transparent text-gray-400 hover:text-[#1A445C]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {categories[activeCategory]?.items.map((item) => (
              <div key={item.name} className="flex justify-between items-baseline gap-6 border-b border-gray-100 pb-6 group">
                <div className="pr-4">
                  <h4 className="font-heading font-normal text-xl md:text-2xl text-[#1A445C] group-hover:text-[#87CEEB] transition-colors">{item.name}</h4>
                  {item.description && <p className="font-body font-light text-sm md:text-base text-gray-500 mt-2 leading-relaxed">{item.description}</p>}
                </div>
                {item.price && <span className="font-body font-medium text-lg text-gray-400 whitespace-nowrap">{item.price}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <GaleriaSection images={coriaGalleryImages} />
      
      <HorariosSection />
      
      <ReservaLocalSection 
        locationName="Coria" 
        phone="+34 614 940 256" 
        bgImage={coriaHero} 
      />

      <MapSection
        name="Coria"
        phone="+34 614 940 256"
        mapsLink="https://share.google/jsPn75LlDP20kz9i4"
        embedSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50711.6917637508!2d-6.065096577880856!3d37.30799797205165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126efee60633b3%3A0xb5b7fd8f78028ff!2sLa%20Marina!5e0!3m2!1ses!2ses!4v1714312000000!5m2!1ses!2ses"
      />

      <Footer />
    </div>
  );
}
