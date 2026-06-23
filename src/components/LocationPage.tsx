import { useState } from "react";
import { MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ReservaLocalSection from "@/components/ReservaLocalSection";
import GaleriaSection from "@/components/GaleriaSection";
import { menuData } from "@/data/menu";
import ancla from "@/assets/ancla.png";
import timon from "@/assets/timon.png";
import HorariosSection from "@/components/HorariosSection";
import MapSection from "@/components/MapSection";

interface LocationPageProps {
  name: string;
  address: string;
  phone: string;
  heroImage: string;
  reservaImage?: string;
  mapsEmbed: string;
  menuKey: string;
  description: string;
  mapsLink?: string;
  galleryImages?: any[];
  hoursLocation?: "coria" | "gelves";
}

export default function LocationPage({ 
  name, address, phone, heroImage, reservaImage, mapsEmbed, menuKey, description, mapsLink, galleryImages, hoursLocation 
}: LocationPageProps) {
  const [activeCategory, setActiveCategory] = useState(0);
  const categories = menuData[menuKey] || [];

  return (
    <>
      <Navbar />
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt={`La Marina ${name}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-soft-black/60" />
        </div>
        <div className="relative z-10 text-center">
          <p className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-3">La Marina</p>
          <h1 className="font-heading font-normal text-3xl md:text-5xl text-off-white">{name}</h1>
          <p className="flex items-center justify-center gap-2 mt-4 font-body text-sm text-off-white/70">
            <MapPin size={14} /> {address}
          </p>
        </div>
      </section>

      <section className="py-20 bg-off-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="font-body text-muted-foreground leading-relaxed">{description}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative py-20 bg-sand/30 overflow-hidden">
        {/* Anchor watermark top-left */}
        <img
          src={ancla}
          alt=""
          aria-hidden="true"
          className="absolute -top-10 -left-16 w-[380px] md:w-[460px] opacity-[0.08] pointer-events-none select-none"
          style={{ transform: "rotate(35deg)", transformOrigin: "top left" }}
        />
        {/* Timón watermark bottom-right */}
        <img
          src={timon}
          alt=""
          aria-hidden="true"
          className="absolute -bottom-16 -right-16 w-[340px] md:w-[420px] opacity-[0.08] pointer-events-none select-none"
          style={{ transform: "rotate(-30deg)", transformOrigin: "bottom right" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <AnimatedSection className="text-center mb-10">
            <p className="text-gold font-body text-xs tracking-[0.2em] uppercase mb-3">Gastronomía</p>
            <h2 className="font-heading font-normal text-2xl md:text-3xl text-foreground">Nuestra carta en {name}</h2>
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

      <GaleriaSection images={galleryImages} />

      <HorariosSection />

      <ReservaLocalSection 
        locationName={name}
        phone={phone}
        bgImage={reservaImage || heroImage}
      />

      <MapSection
        name={name}
        phone={phone}
        mapsLink={mapsLink}
        embedSrc={mapsEmbed}
      />

      <Footer />
    </>
  );
}
