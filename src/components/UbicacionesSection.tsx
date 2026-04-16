import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import gelvesImg from "@/assets/gelves-hero.jpg";
import coriaImg from "@/assets/coria-hero.jpg";

const locations = [
  {
    name: "Gelves",
    address: "Pl. de la Marina, 1 · Gelves",
    image: gelvesImg,
    link: "/gelves",
    maps: "https://maps.google.com/?q=Plaza+de+la+Marina+1+Gelves",
  },
  {
    name: "Coria del Río",
    address: "Calle Batán, 95 · Coria del Río",
    image: coriaImg,
    link: "/coria",
    maps: "https://maps.google.com/?q=Calle+Batan+95+Coria+del+Rio",
  },
];

export default function UbicacionesSection() {
  return (
    <section id="ubicaciones" className="py-20 md:py-28 bg-off-white">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Encuéntranos</p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">
            Dos ubicaciones, una misma esencia
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((loc, i) => (
            <AnimatedSection key={loc.name} delay={i * 0.15}>
              <div className="group overflow-hidden rounded-sm bg-background">
                <div className="overflow-hidden aspect-[16/10]">
                  <img
                    src={loc.image}
                    alt={`La Marina ${loc.name}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl text-foreground mb-2">{loc.name}</h3>
                  <p className="flex items-center gap-2 font-body text-sm text-muted-foreground mb-6">
                    <MapPin size={14} /> {loc.address}
                  </p>
                  <div className="flex gap-3">
                    <Link
                      to={loc.link}
                      className="px-5 py-2.5 text-sm font-body bg-deep-blue text-off-white rounded-sm hover:bg-deep-blue/90 transition-colors"
                    >
                      Explorar restaurante
                    </Link>
                    <a
                      href={loc.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 text-sm font-body border border-foreground/20 text-foreground rounded-sm hover:bg-foreground/5 transition-colors"
                    >
                      Cómo llegar
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
