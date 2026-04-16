import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import imgFritura from "@/assets/gallery-fritura.jpg";
import imgMariscos from "@/assets/gallery-mariscos.jpg";
import imgCocina from "@/assets/historia-cocina.jpg";
import imgAmbiente from "@/assets/gallery-ambiente.jpg";

export default function HistoriaSection() {
  return (
    <section className="py-24 md:py-36 bg-sand/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <AnimatedSection className="text-center mb-20 md:mb-28">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">Nuestra esencia</p>
          <h2 className="font-heading text-4xl md:text-6xl text-foreground leading-tight">
            Una historia de mar,<br className="hidden md:block" /> familia y evolución
          </h2>
        </AnimatedSection>

        {/* Block 1: Image left, text right */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-20 md:mb-32">
          <AnimatedSection>
            <motion.div
              className="overflow-hidden rounded-sm aspect-[4/5]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={imgFritura}
                alt="Fritura de pescado tradicional La Marina"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-4">Mayo 2007</p>
            <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-6 leading-snug">
              Un sueño familiar junto al Guadalquivir
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              La Marina abre sus puertas por primera vez en mayo de 2007, con una apuesta firme por la calidad y el respeto al producto que nos brinda el mar. Un sueño familiar que comenzó con la ilusión de traer lo mejor de la costa a las orillas del Guadalquivir.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Haciendo de la fritura de pescado y mariscos nuestra gran especialidad, rápidamente nos convertimos en un referente para quienes buscan el sabor auténtico.
            </p>
          </AnimatedSection>
        </div>

        {/* Quote */}
        <AnimatedSection className="text-center py-12 md:py-20 mb-20 md:mb-32 border-y border-gold/20">
          <blockquote className="font-heading text-2xl md:text-4xl italic text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            "El respeto por el producto del mar define todo lo que hacemos"
          </blockquote>
        </AnimatedSection>

        {/* Block 2: Text left, image right */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-20 md:mb-32">
          <AnimatedSection className="order-2 md:order-1" delay={0.2}>
            <p className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-4">Evolución</p>
            <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-6 leading-snug">
              Técnica tradicional, frescura original
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Nuestras técnicas tradicionales garantizan que cada bocado conserve la frescura original del producto. La fritura en aceite de oliva, el punto exacto de cocción, el respeto por los tiempos.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Cada pieza que llega a nuestra cocina es seleccionada con esmero, manteniendo la cadena de frío desde el mar hasta tu mesa.
            </p>
          </AnimatedSection>
          <AnimatedSection className="order-1 md:order-2">
            <motion.div
              className="overflow-hidden rounded-sm aspect-[4/5]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={imgMariscos}
                alt="Mariscos frescos seleccionados"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Block 3: Image left, text right */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-20 md:mb-32">
          <AnimatedSection>
            <motion.div
              className="overflow-hidden rounded-sm aspect-[4/5]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={imgCocina}
                alt="Cocina en acción en La Marina"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-4">Madurez</p>
            <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-6 leading-snug">
              Del mar a las mejores ganaderías
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Con el paso de los años, La Marina evoluciona y madura. Sin perder nuestra esencia marinera, incorporamos una cuidada selección de carnes de alta gama: Frisona, Rubia Gallega, Turina de Portugal...
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Una apuesta por la variedad y la excelencia en cada corte, para ofrecer a nuestros comensales una experiencia completa.
            </p>
          </AnimatedSection>
        </div>

        {/* Full width ambient image */}
        <AnimatedSection className="mb-20 md:mb-28">
          <motion.div
            className="overflow-hidden rounded-sm aspect-[21/9]"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={imgAmbiente}
              alt="Ambiente del restaurante La Marina"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <Link
            to="/historia"
            className="inline-block px-10 py-3.5 border border-foreground/20 text-foreground font-body text-sm tracking-wide rounded-sm transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            Leer historia completa
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
