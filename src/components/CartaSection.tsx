import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { menuData } from "@/data/menu";
import ancla from "@/assets/ancla.png";
import timon from "@/assets/timon.png";

const locations = [
  { key: "gelves", label: "Gelves" },
  { key: "coria", label: "Coria del Río" },
];

export default function CartaSection() {
  const [activeLocation, setActiveLocation] = useState("gelves");
  const [activeCategory, setActiveCategory] = useState(0);
  const categories = menuData[activeLocation];

  return (
    <section id="carta" className="relative py-20 md:py-28 bg-off-white overflow-hidden">
      {/* Anchor watermark */}
      <img
        src={ancla}
        alt=""
        aria-hidden="true"
        className="absolute -top-10 -left-16 w-[420px] md:w-[520px] opacity-[0.08] pointer-events-none select-none"
        style={{ transform: "rotate(35deg)", transformOrigin: "top left" }}
      />
      {/* Timón watermark bottom-right */}
      <img
        src={timon}
        alt=""
        aria-hidden="true"
        className="absolute -bottom-16 -right-16 w-[380px] md:w-[460px] opacity-[0.08] pointer-events-none select-none"
        style={{ transform: "rotate(-30deg)", transformOrigin: "bottom right" }}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <p className="text-gold font-body text-xs tracking-[0.2em] uppercase mb-3">Gastronomía</p>
          <h2 className="font-heading font-normal text-3xl md:text-4xl text-foreground mb-4">Nuestra carta</h2>
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
              <div className="pr-4">
                <h4 className="font-heading font-normal text-lg md:text-xl text-foreground">{item.name}</h4>
                {item.description && <p className="font-body font-light text-[13px] md:text-[14px] text-muted-foreground/80 mt-1">{item.description}</p>}
              </div>
              {item.price && <span className="font-body font-light text-sm md:text-[15px] text-muted-foreground whitespace-nowrap">{item.price}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
