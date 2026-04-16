import AnimatedSection from "./AnimatedSection";

export default function CtaFinal() {
  const scrollTo = () => {
    document.getElementById("reservas")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-32 bg-deep-blue text-center">
      <AnimatedSection>
        <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">La Marina</p>
        <h2 className="font-heading text-3xl md:text-5xl text-off-white mb-8">
          El sabor del mar te está esperando
        </h2>
        <button
          onClick={scrollTo}
          className="px-10 py-4 bg-gold text-off-white font-body font-medium text-sm tracking-wide rounded-sm hover:bg-gold/90 transition-colors"
        >
          Reservar ahora
        </button>
      </AnimatedSection>
    </section>
  );
}
