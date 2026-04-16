import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { menuData } from "@/data/menu";

const locations = [
  { key: "coria", label: "Coria del Río" },
  { key: "gelves", label: "Gelves" },
];

export default function CartaSection() {
  const [activeLocation, setActiveLocation] = useState("coria");
  const [activeCategory, setActiveCategory] = useState(0);
  const categories = menuData[activeLocation];

  return (
    <section id="carta" className="py-20 md:py-28 bg-off-white">
      <div className="max-w-5xl mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Gastronomía</p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-4">Nuestra carta</h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Selecciona tu restaurante y descubre nuestra propuesta gastronómica.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="flex justify-center gap-3 mb-10">
          {locations.map((loc) => (
            <button
              key={loc.key}
              onClick={() => { setActiveLocation(loc.key); setActiveCategory(0); }}
              className={`px-6 py-2.5 text-sm font-body tracking-wide rounded-sm transition-all ${
                activeLocation === loc.key
                  ? "bg-deep-blue text-off-white"
                  : "bg-sand/50 text-foreground hover:bg-sand"
              }`}
            >
              {loc.label}
            </button>
          ))}
        </AnimatedSection>

        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(i)}
              className={`px-4 py-2 text-sm font-body transition-all border-b-2 ${
                activeCategory === i
                  ? "border-gold text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {categories[activeCategory].items.map((item) => (
            <div key={item.name} className="flex justify-between items-baseline gap-4 border-b border-border pb-4">
              <div>
                <h4 className="font-heading text-lg text-foreground">{item.name}</h4>
                {item.description && <p className="font-body text-sm text-muted-foreground">{item.description}</p>}
              </div>
              {item.price && <span className="font-body text-sm text-gold whitespace-nowrap">{item.price}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
