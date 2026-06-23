import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import ancla from "@/assets/ancla.png";
import { supabase } from "@/integrations/supabase/client";

type ScheduleItem = { day: string; hours: string; closed: boolean };

const fallbackSchedule: ScheduleItem[] = [
  { day: "Lunes", hours: "Cerrado", closed: true },
  { day: "Martes", hours: "12:00 – 18:00  |  20:30 – 0:30", closed: false },
  { day: "Miércoles", hours: "12:00 – 18:00  |  20:30 – 0:30", closed: false },
  { day: "Jueves", hours: "12:00 – 18:00  |  20:30 – 0:30", closed: false },
  { day: "Viernes", hours: "12:00 – 17:00  |  20:00 – 24:00", closed: false },
  { day: "Sábado", hours: "12:00 – 17:00  |  20:00 – 24:00", closed: false },
  { day: "Domingo", hours: "12:00 – 18:00", closed: false },
];

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function parseWeekday(line: string): ScheduleItem {
  // Format: "lunes: Cerrado" / "martes: 12:00–18:00, 20:30–0:30"
  const idx = line.indexOf(":");
  if (idx === -1) return { day: line, hours: "", closed: false };
  const day = capitalize(line.slice(0, idx).trim());
  let hours = line.slice(idx + 1).trim();
  const closed = /cerrado/i.test(hours);
  if (!closed) {
    hours = hours
      .replace(/–/g, " – ")
      .replace(/,\s*/g, "  |  ")
      .replace(/\s+/g, " ")
      .trim();
  }
  return { day, hours, closed };
}

export default function HorariosSection() {
  const [schedule, setSchedule] = useState<ScheduleItem[]>(fallbackSchedule);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { data, error } = await supabase.functions.invoke("coria-hours");
        if (error) throw error;
        const lines: string[] | undefined = data?.weekdayDescriptions;
        if (!cancelled && Array.isArray(lines) && lines.length === 7) {
          setSchedule(lines.map(parseWeekday));
        }
      } catch (e) {
        console.warn("coria-hours fetch failed, using fallback", e);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

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
            <AnimatedSection key={item.day} delay={i * 0.05}>
              <div
                className={`flex justify-between items-baseline gap-6 py-5 ${
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
                  className={`font-body font-normal text-sm md:text-base whitespace-nowrap ${
                    item.closed ? "text-[#1A445C]/30 italic" : "text-[#1A445C]"
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
          <p className="mt-6 text-[10px] tracking-[0.3em] uppercase text-[#1A445C]/40 font-body">
            Horarios sincronizados con Google
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
