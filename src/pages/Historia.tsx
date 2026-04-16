import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";

export default function HistoriaPage() {
  return (
    <>
      <Navbar />
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="La Marina" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-soft-black/60" />
        </div>
        <div className="relative z-10 text-center">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Nuestra esencia</p>
          <h1 className="font-heading text-4xl md:text-6xl text-off-white">Nuestra Historia</h1>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-off-white">
        <div className="max-w-3xl mx-auto px-4 space-y-8 font-body text-muted-foreground leading-relaxed">
          <AnimatedSection>
            <p>
              La Marina abre sus puertas por primera vez en mayo de 2007, con una apuesta firme por la calidad y el respeto al producto que nos brinda el mar. Un sueño familiar que comenzó con la ilusión de traer lo mejor de la costa a las orillas del Guadalquivir.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p>
              Haciendo de la fritura de pescado y mariscos nuestra gran especialidad, rápidamente nos convertimos en un referente para quienes buscan el sabor auténtico. Nuestras técnicas tradicionales garantizan que cada bocado conserve la frescura original del producto.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <p>
              Con el paso de los años, La Marina evoluciona y madura. Sin perder nuestra esencia marinera, incorporamos una cuidada selección de carnes de alta gama: Frisona, Rubia Gallega, Turina de Portugal... Una apuesta por la variedad y la excelencia en cada corte.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.45}>
            <p>
              Hoy, con dos locales en Gelves y Coria del Río, seguimos fieles a nuestra filosofía: producto de primera, técnica respetuosa y un ambiente donde cada detalle está pensado para que disfrutes de la mejor experiencia gastronómica junto al Guadalquivir.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </>
  );
}
