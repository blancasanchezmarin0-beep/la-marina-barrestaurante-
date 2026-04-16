import AnimatedSection from "./AnimatedSection";
import imgFritura from "@/assets/gallery-fritura.jpg";
import imgMariscos from "@/assets/gallery-mariscos.jpg";
import imgCarnes from "@/assets/gallery-carnes.jpg";
import imgLocal from "@/assets/gallery-local.jpg";
import imgAmbiente from "@/assets/gallery-ambiente.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const images = [
  { src: imgFritura, alt: "Fritura de pescado La Marina" },
  { src: imgMariscos, alt: "Mariscos frescos" },
  { src: imgCarnes, alt: "Carnes premium a la brasa" },
  { src: imgLocal, alt: "Interior del restaurante" },
  { src: imgAmbiente, alt: "Ambiente del restaurante" },
  { src: heroBg, alt: "Comedor principal" },
];

export default function GaleriaSection() {
  return (
    <section className="py-20 md:py-28 bg-sand/30">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Galería</p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">Nuestra esencia en imágenes</h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.08} className={i < 2 ? "lg:col-span-2 lg:row-span-2" : ""}>
              <div className="overflow-hidden rounded-sm aspect-square">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
