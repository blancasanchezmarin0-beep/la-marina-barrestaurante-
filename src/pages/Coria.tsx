import { useState } from "react";
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
import imgSalon from "@/assets/coria/salon.jpg";
import imgTerraza from "@/assets/coria/terraza.jpg";
import imgFachada from "@/assets/coria/fachada.jpg";

const spaces = [
  { title: "Salón interior", image: imgSalon, desc: "Un espacio acogedor con una decoración marinera auténtica." },
  { title: "Terraza", image: imgTerraza, desc: "Disfruta de tu comida al aire libre con vistas a la plaza." },
  { title: "Patio interior", image: imgFachada, desc: "Un rincón tranquilo rodeado del encanto del pueblo." },
];

export default function CoriaPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const categories = menuData["coria"] || [];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={coriaHero} alt="La Marina Coria" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-soft-black/60" />
        </div>
        <div className="relative z-10 text-center">
          <p className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-3">La Marina</p>
          <h1 className="font-heading font-normal text-3xl md:text-5xl text-off-white">Bar restaurante Coria</h1>
          <p className="flex items-center justify-center gap-2 mt-4 font-body text-sm text-off-white/70">
            <MapPin size={14} /> Calle Batán, 95 · Coria del Río
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-off-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="font-body text-muted-foreground leading-relaxed">
              Nuestro local en Coria del Río, en pleno corazón del pueblo, mantiene la esencia de La Marina con una carta que combina nuestra tradicional fritura con carnes de las mejores ganaderías de la península.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 3 Espacios */}
      <section className="py-20 md:py-28 bg-sand/20">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <p className="text-gold font-body text-xs tracking-[0.2em] uppercase mb-3">Nuestros espacios</p>
            <h2 className="font-heading font-normal text-3xl md:text-4xl text-foreground">Tres ambientes, una experiencia</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {spaces.map((space, i) => (
              <AnimatedSection key={space.title} delay={i * 0.15}>
                <div className="group overflow-hidden rounded-sm bg-background">
                  <div className="overflow-hidden aspect-[4/3]">
                    <img
                      src={space.image}
                      alt={space.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-heading font-normal text-xl text-foreground mb-2">{space.title}</h3>
                    <p className="font-body text-sm text-muted-foreground">{space.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Carta */}
      <section className="relative py-20 bg-sand/30 overflow-hidden">
        <img src={ancla} alt="" aria-hidden="true" className="absolute -top-10 -left-16 w-[380px] md:w-[460px] opacity-[0.08] pointer-events-none select-none" style={{ transform: "rotate(35deg)", transformOrigin: "top left" }} />
        <img src={timon} alt="" aria-hidden="true" className="absolute -bottom-16 -right-16 w-[340px] md:w-[420px] opacity-[0.08] pointer-events-none select-none" style={{ transform: "rotate(-30deg)", transformOrigin: "bottom right" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <AnimatedSection className="text-center mb-10">
            <p className="text-gold font-body text-xs tracking-[0.2em] uppercase mb-3">Gastronomía</p>
            <h2 className="font-heading font-normal text-2xl md:text-3xl text-foreground">Nuestra carta en Coria</h2>
          </AnimatedSection>
          
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {categories.map((cat, i) => (
              <button key={cat.label} onClick={() => setActiveCategory(i)}
                className={`px-4 py-2 text-sm font-body transition-all border-b-2 ${
                  activeCategory === i ? "border-gold text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            {categories[activeCategory]?.items.map((item) => (
              <div key={item.name} className="flex justify-between items-baseline gap-4 border-b border-border pb-4">
                <div className="pr-4">
                  <h4 className="font-heading font-normal text-lg md:text-xl text-foreground">{item.name}</h4>
                  {item.description && <p className="font-body font-light text-[13px] md:text-sm text-muted-foreground/80 mt-1">{item.description}</p>}
                </div>
                {item.price && <span className="font-body font-light text-sm md:text-[15px] text-muted-foreground whitespace-nowrap">{item.price}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <GaleriaSection />
      
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
        embedSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175.5!2d-6.05!3d37.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQ2FsbGUgQmF0w6FuLCA5NQ!5e0!3m2!1ses!2ses!4v1"
      />

      <Footer />
    </>
  );
}
