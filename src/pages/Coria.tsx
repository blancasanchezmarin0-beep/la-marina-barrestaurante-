import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ReservaLocalSection from "@/components/ReservaLocalSection";
import GaleriaSection from "@/components/GaleriaSection";
import HorariosSection from "@/components/HorariosSection";
import MapSection from "@/components/MapSection";
import { menuData } from "@/data/menu";
import { MapPin } from "lucide-react";
import ancla from "@/assets/ancla.png";
import timon from "@/assets/timon.png";

import coriaHero from "@/assets/coria-hero-2055.jpg";
import imgSalonCoria from "@/assets/coria/salon-interior-real.jpg";
import imgTerrazaCoria from "@/assets/coria/terraza-exterior-real.jpg";
import imgPatioBarriles from "@/assets/coria/patio-barriles.jpg";
import imgCelebracionesCoria from "@/assets/coria/celebraciones.jpg";
import imgPatioNoche from "@/assets/coria/patio-noche.jpg";

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
    <div className="bg-[#FDFBF9] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] md:h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={coriaHero} alt="La Marina Coria" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-[#0D2B35]/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <AnimatedSection>
            <p className="text-[#87CEEB] font-body text-[10px] tracking-[0.5em] uppercase mb-4 font-bold">La Marina Coria</p>
            <h1 className="font-heading font-normal text-4xl md:text-6xl text-white mb-6">Bar Restaurante Coria</h1>
            <p className="flex items-center justify-center gap-2 mt-4 font-body text-sm text-white/80">
              <MapPin size={16} className="text-[#87CEEB]" /> Calle Batán, 95 · Coria del Río
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="font-body text-gray-500 text-base md:text-lg leading-relaxed font-light italic">
              "En el corazón de Coria, donde la esencia marinera se encuentra con la brisa del Guadalquivir."
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* NUESTROS ESPACIOS - Bento Grid Asimétrico */}
      <section className="py-24 md:py-40 bg-[#F3E9E2]">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <AnimatedSection className="mb-16 md:mb-24">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-[2px] bg-[#87CEEB]"></span>
              <p className="text-[#87CEEB] font-body text-xs tracking-[0.4em] uppercase font-bold">Concepto</p>
            </div>
            <h2 className="font-heading font-normal text-4xl md:text-7xl text-[#0D2B35] mb-6">Nuestros Espacios</h2>
            <p className="text-[#0D2B35]/60 font-body text-sm md:text-base max-w-xl">Cuatro ambientes diseñados para elevar tu experiencia gastronómica.</p>
          </AnimatedSection>

          {/* Desktop Bento Grid / Mobile Horizontal Scroll */}
          <div className="flex md:grid md:grid-cols-12 gap-6 md:gap-8 overflow-x-auto md:overflow-visible no-scrollbar -mx-5 px-5 md:mx-0 md:px-0">
            
            {/* Card 1: Salón de Celebraciones (Wide & Tall in Bento) */}
            <Link to="/celebraciones" className="flex-shrink-0 w-[85vw] md:w-auto md:col-span-8 md:row-span-2 group relative h-[500px] md:h-[700px] rounded-[40px] overflow-hidden shadow-2xl block">
              <img src={imgCelebracionesCoria} alt="Salón de Celebraciones" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
              <div className="absolute top-10 left-10">
                <h3 className="font-heading text-3xl md:text-5xl text-white drop-shadow-xl">Salón de Celebraciones</h3>
              </div>
              {/* "Bitten" Text Block */}
              <div className="absolute bottom-0 right-0 bg-[#0D2B35] p-10 md:p-12 w-[85%] md:w-[60%] rounded-tl-[40px]">
                {/* Corner Fix (Inverse rounds) - Top Right */}
                <div className="absolute -top-10 right-0 w-10 h-10 bg-transparent shadow-[20px_20px_0_20px_#0D2B35] rounded-br-[40px] pointer-events-none" />
                {/* Corner Fix (Inverse rounds) - Bottom Left */}
                <div className="absolute bottom-0 -left-10 w-10 h-10 bg-transparent shadow-[20px_20px_0_20px_#0D2B35] rounded-br-[40px] pointer-events-none" />
                
                <p className="text-white font-body text-sm md:text-base leading-relaxed font-light">
                  El lugar perfecto para eventos especiales, diseñado para momentos que merecen ser recordados por siempre.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="text-[#87CEEB] text-[10px] tracking-widest uppercase font-bold">Descubre el espacio →</span>
                  <div className="h-[1px] flex-grow bg-[#87CEEB]/30"></div>
                </div>
              </div>
            </Link>

            {/* Card 2: Salón Interior */}
            <div className="flex-shrink-0 w-[85vw] md:w-auto md:col-span-4 group relative h-[450px] md:h-auto rounded-[40px] overflow-hidden shadow-xl">
              <img src={imgSalonCoria} alt="Salón Interior" className="w-full h-full object-cover" />
              <div className="absolute top-8 left-8">
                <h3 className="font-heading text-2xl md:text-3xl text-white">Salón Interior</h3>
              </div>
              <div className="absolute bottom-0 left-0 bg-[#0D2B35] p-8 w-[90%] rounded-tr-[40px]">
                {/* Inverse round fix */}
                <div className="absolute -top-10 left-0 w-10 h-10 bg-transparent shadow-[-20px_20px_0_20px_#0D2B35] rounded-bl-[40px] pointer-events-none" />
                <p className="text-white font-body text-xs md:text-sm leading-relaxed font-light">
                  Ambiente acogedor con decoración marinera auténtica para disfrutar con calma.
                </p>
              </div>
            </div>

            {/* Card 3: Terraza */}
            <div className="flex-shrink-0 w-[85vw] md:w-auto md:col-span-4 group relative h-[450px] md:h-auto rounded-[40px] overflow-hidden shadow-xl">
              <img src={imgTerrazaCoria} alt="Terraza" className="w-full h-full object-cover" />
              <div className="absolute top-8 left-8">
                <h3 className="font-heading text-2xl md:text-3xl text-white">Terraza</h3>
              </div>
              <div className="absolute bottom-0 right-0 bg-[#0D2B35] p-8 w-[90%] rounded-tl-[40px]">
                {/* Inverse round fix */}
                <div className="absolute -top-10 right-0 w-10 h-10 bg-transparent shadow-[20px_20px_0_20px_#0D2B35] rounded-br-[40px] pointer-events-none" />
                <p className="text-white font-body text-xs md:text-sm leading-relaxed font-light">
                  Abierta al Guadalquivir, donde la brisa crea una experiencia única al aire libre.
                </p>
              </div>
            </div>

            {/* Card 4: Patio Interior (Bottom card stretching if needed or just part of bento) */}
            <div className="flex-shrink-0 w-[85vw] md:w-auto md:col-span-12 group relative h-[400px] md:h-[500px] rounded-[40px] overflow-hidden shadow-xl md:mt-4">
              <img src={imgPatioBarriles} alt="Patio Interior" className="w-full h-full object-cover" />
              <div className="absolute top-10 left-10">
                <h3 className="font-heading text-3xl md:text-4xl text-white">Patio Interior</h3>
              </div>
              <div className="absolute bottom-0 left-0 bg-[#0D2B35] p-10 w-[70%] md:w-[40%] rounded-tr-[40px]">
                <div className="absolute -top-10 left-0 w-10 h-10 bg-transparent shadow-[-20px_20px_0_20px_#0D2B35] rounded-bl-[40px] pointer-events-none" />
                <p className="text-white font-body text-sm leading-relaxed font-light">
                  Un oasis de luz natural que combina tranquilidad y frescura en un ambiente íntimo.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Carta Section remains same but consistent colors */}
      <section id="carta" className="relative py-24 md:py-40 bg-white overflow-hidden">
        <img src={ancla} alt="" aria-hidden="true" className="absolute -top-10 -left-16 w-[380px] md:w-[500px] opacity-[0.04] pointer-events-none select-none" style={{ transform: "rotate(35deg)", transformOrigin: "top left" }} />
        <img src={timon} alt="" aria-hidden="true" className="absolute -bottom-16 -right-16 w-[340px] md:w-[460px] opacity-[0.04] pointer-events-none select-none" style={{ transform: "rotate(-30deg)", transformOrigin: "bottom right" }} />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#87CEEB] font-body text-[10px] tracking-[0.3em] uppercase mb-4 font-bold">Gastronomía</p>
            <h2 className="font-heading font-normal text-4xl md:text-5xl text-[#0D2B35] mb-6">Carta de Coria</h2>
          </AnimatedSection>
          
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {categories.map((cat, i) => (
              <button key={cat.label} onClick={() => setActiveCategory(i)}
                className={`px-6 py-2.5 text-sm font-body tracking-wider transition-all border-b-2 font-medium ${
                  activeCategory === i ? "border-[#87CEEB] text-[#0D2B35]" : "border-transparent text-gray-400 hover:text-[#0D2B35]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {categories[activeCategory]?.items.map((item) => (
              <div key={item.name} className="flex justify-between items-baseline gap-6 border-b border-gray-100 pb-6">
                <div className="pr-4">
                  <h4 className="font-heading font-normal text-xl md:text-2xl text-[#0D2B35]">{item.name}</h4>
                  {item.description && <p className="font-body font-light text-sm md:text-base text-gray-400 mt-2">{item.description}</p>}
                </div>
                {item.price && <span className="font-body font-medium text-lg text-[#87CEEB] whitespace-nowrap">{item.price}</span>}
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
