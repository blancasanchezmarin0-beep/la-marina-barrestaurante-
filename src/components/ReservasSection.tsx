import { Phone, MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function ReservasSection() {
  return (
    <section id="reservas" className="py-20 md:py-28 bg-off-white">
      <div className="max-w-4xl mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Reservas</p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-4">Reserva tu mesa</h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Llámanos y reserva tu experiencia gastronómica
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {[
            { location: "Gelves", phone: "+34 674 322 897", phoneRaw: "+34674322897", address: "Pl. de la Marina, 1", mapsLink: "https://share.google/18HQvkOaVOtBli8Ul" },
            { location: "Coria del Río", phone: "+34 614 940 256", phoneRaw: "+34614940256", address: "Calle Batán, 95", mapsLink: "https://share.google/jsPn75LlDP20kz9i4" },
          ].map((item, i) => (
            <AnimatedSection key={item.location} delay={i * 0.15}>
              <a
                href={`tel:${item.phoneRaw}`}
                className="group block p-8 bg-deep-blue rounded-sm text-center hover:bg-deep-blue/95 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-gold/30 mb-5 group-hover:border-gold/60 transition-colors">
                  <Phone size={22} className="text-gold" />
                </div>
                <h3 className="font-heading text-xl text-off-white mb-2">{item.location}</h3>
                <p className="font-body text-2xl font-light text-gold tracking-wide mb-3">
                  {item.phone}
                </p>
                <p className="flex items-center justify-center gap-1.5 font-body text-xs text-off-white/50">
                  <MapPin size={12} /> {item.address}
                </p>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
