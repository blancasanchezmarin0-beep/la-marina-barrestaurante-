import { useState } from "react";
import { Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ReservasSection from "@/components/ReservasSection";
import { menuData } from "@/data/menu";

interface LocationPageProps {
  name: string;
  address: string;
  phone: string;
  heroImage: string;
  mapsEmbed: string;
  menuKey: string;
  description: string;
}

export default function LocationPage({ name, address, phone, heroImage, mapsEmbed, menuKey, description }: LocationPageProps) {
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
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">La Marina</p>
          <h1 className="font-heading text-4xl md:text-6xl text-off-white">{name}</h1>
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

      <section className="py-20 bg-sand/30">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection className="text-center mb-10">
            <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Gastronomía</p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">Nuestra carta en {name}</h2>
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
              <div key={item.name} className="flex justify-between items-baseline border-b border-border pb-4">
                <div>
                  <h4 className="font-heading text-lg text-foreground">{item.name}</h4>
                  <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReservasSection />

      <section className="py-16 bg-off-white">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection className="text-center mb-8">
            <h2 className="font-heading text-2xl text-foreground">Cómo llegar</h2>
          </AnimatedSection>
          <div className="aspect-video rounded-sm overflow-hidden">
            <iframe
              src={mapsEmbed}
              width="100%" height="100%" style={{ border: 0 }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa La Marina ${name}`}
            />
          </div>
          <div className="mt-6 text-center">
            <a href={`tel:${phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-gold transition-colors">
              <Phone size={14} /> {phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
