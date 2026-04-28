import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import ancla from "@/assets/ancla.png";

const schedule = [
  { day: "Lunes", hours: "Cerrado", closed: true },
  { day: "Martes, Miércoles y Jueves", hours: "12:00 – 18:00" },
  { day: "Viernes y Sábado", hours: "12:00 – 17:00  |  20:00 – 1:00" },
  { day: "Domingo", hours: "12:00 – 17:00" },
];

export default function HorariosSection() {
  return (
    <section className="relative py-28 md:py-40 bg-white overflow-hidden">
      {/* Anchor watermark */}
      <img
        src={ancla}
        alt=""
        aria-hidden="true"
        className="absolute -top-8 -left-12 w-[360px] md:w-[440px] opacity-[0.08] pointer-events-none select-none"
        style={{ transform: "rotate(35deg)", transformOrigin: "top left" }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4">
        {/* Title */}
        <AnimatedSection className="text-center mb-20">
          <p className="font-body text-[10px] tracking-[0.5em] uppercase text-[#87CEEB] mb-4">
            La Marina
          </p>
          <h2 className="font-heading font-normal text-3xl md:text-4xl lg:text-5xl text-[#1A445C] tracking-wide">
            Nuestros Horarios
          </h2>
          <div className="mt-6 h-[1px] w-16 bg-[#87CEEB]/40 mx-auto" />
        </AnimatedSection>

        {/* Schedule list */}
        <div className="max-w-lg mx-auto">
          {schedule.map((item, i) => (
            <AnimatedSection
              key={item.day}
              delay={i * 0.08}
            >
              <div
                className={`flex justify-between items-baseline gap-6 py-7 ${
                  i < schedule.length - 1 ? "border-b border-[#87CEEB]/20" : ""
                }`}
              >
                <h4
                  className={`font-body font-light text-sm md:text-base tracking-[0.15em] uppercase ${
                    item.closed ? "text-[#87CEEB]/40" : "text-[#87CEEB]"
                  }`}
                >
                  {item.day}
                </h4>
                <span
                  className={`font-body font-normal text-base md:text-lg whitespace-nowrap ${
                    item.closed
                      ? "text-[#1A445C]/30 italic"
                      : "text-[#1A445C]"
                  }`}
                >
                  {item.hours}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Button */}
        <AnimatedSection delay={0.4} className="text-center mt-16">
          <Link
            to="/#reservas"
            className="inline-block px-10 py-4 bg-[#1A445C] text-white font-body text-sm tracking-[0.2em] uppercase rounded-sm hover:bg-[#004865] transition-all duration-300"
          >
            Reservar mesa
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
