import { Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface MapSectionProps {
  name: string;
  phone: string;
  mapsLink?: string;
  /** Google Maps embed src - centered on the specific location */
  embedSrc: string;
}

export default function MapSection({ name, phone, mapsLink, embedSrc }: MapSectionProps) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-[#87CEEB] mb-3">
            Encuéntranos
          </p>
          <h2 className="font-heading font-normal text-3xl md:text-4xl text-[#1A445C]">
            Cómo llegar
          </h2>
          <div className="mt-4 h-[1px] w-12 bg-[#87CEEB]/40 mx-auto" />
        </AnimatedSection>

        {/* Map container with grayscale editorial styling */}
        <AnimatedSection>
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-sm overflow-hidden shadow-lg group">
            <iframe
              src={embedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa La Marina ${name}`}
              className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </AnimatedSection>

        {/* Contact info */}
        <AnimatedSection delay={0.2} className="mt-10 text-center">
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-3 font-body text-base text-[#1A445C] hover:text-[#87CEEB] transition-colors"
          >
            <Phone size={18} className="text-[#87CEEB]" />
            {phone}
          </a>
          {mapsLink && (
            <div className="mt-4">
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs tracking-[0.15em] uppercase text-[#87CEEB] hover:text-[#1A445C] transition-colors"
              >
                Abrir en Google Maps →
              </a>
            </div>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
