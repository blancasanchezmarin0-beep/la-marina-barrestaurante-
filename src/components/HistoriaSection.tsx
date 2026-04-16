import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

export default function HistoriaSection() {
  return (
    <section className="py-20 md:py-28 bg-sand/30">
      <div className="max-w-4xl mx-auto px-4">
        <AnimatedSection className="text-center mb-10">
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Nuestra esencia</p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-8">
            Una historia de mar, familia y evolución
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="space-y-6 font-body text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
            <p>
              La Marina abre sus puertas por primera vez en mayo de 2007, con una apuesta firme por la calidad y el respeto al producto que nos brinda el mar. Un sueño familiar que comenzó con la ilusión de traer lo mejor de la costa a las orillas del Guadalquivir.
            </p>
            <p>
              Haciendo de la fritura de pescado y mariscos nuestra gran especialidad, rápidamente nos convertimos en un referente para quienes buscan el sabor auténtico.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="text-center mt-10">
          <Link
            to="/historia"
            className="inline-block px-8 py-3 border border-foreground/20 text-foreground font-body text-sm tracking-wide hover:bg-foreground/5 transition-colors rounded-sm"
          >
            Leer historia completa
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
