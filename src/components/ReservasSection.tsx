import { useState } from "react";
import { Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useToast } from "@/hooks/use-toast";

export default function ReservasSection() {
  const { toast } = useToast();
  const [form, setForm] = useState({
    nombre: "", telefono: "", personas: "", fecha: "", hora: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "¡Reserva enviada!", description: "Nos pondremos en contacto contigo para confirmar." });
    setForm({ nombre: "", telefono: "", personas: "", fecha: "", hora: "" });
  };

  const update = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  return (
    <section id="reservas" className="py-20 md:py-28 bg-off-white">
      <div className="max-w-4xl mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Reservas</p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">Reserva tu mesa</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
            <input
              type="text" required placeholder="Nombre" value={form.nombre}
              onChange={(e) => update("nombre", e.target.value)}
              className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-sm focus:outline-none focus:ring-1 focus:ring-gold"
            />
            <input
              type="tel" required placeholder="Teléfono" value={form.telefono}
              onChange={(e) => update("telefono", e.target.value)}
              className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-sm focus:outline-none focus:ring-1 focus:ring-gold"
            />
            <div className="grid grid-cols-3 gap-3">
              <select
                required value={form.personas}
                onChange={(e) => update("personas", e.target.value)}
                className="px-4 py-3 bg-background border border-border rounded-sm font-body text-sm focus:outline-none focus:ring-1 focus:ring-gold"
              >
                <option value="">Personas</option>
                {[1,2,3,4,5,6,7,8].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? "persona" : "personas"}</option>
                ))}
                <option value="9+">Más de 8</option>
              </select>
              <input
                type="date" required value={form.fecha}
                onChange={(e) => update("fecha", e.target.value)}
                className="px-4 py-3 bg-background border border-border rounded-sm font-body text-sm focus:outline-none focus:ring-1 focus:ring-gold"
              />
              <input
                type="time" required value={form.hora}
                onChange={(e) => update("hora", e.target.value)}
                className="px-4 py-3 bg-background border border-border rounded-sm font-body text-sm focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 bg-gold text-off-white font-body font-medium text-sm tracking-wide rounded-sm hover:bg-gold/90 transition-colors"
            >
              Reservar mesa
            </button>
          </form>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="mt-10 flex flex-col sm:flex-row justify-center gap-6 text-center">
          <a href="tel:+34674322897" className="flex items-center justify-center gap-2 font-body text-sm text-muted-foreground hover:text-gold transition-colors">
            <Phone size={14} /> Gelves: +34 674 322 897
          </a>
          <a href="tel:+34614940256" className="flex items-center justify-center gap-2 font-body text-sm text-muted-foreground hover:text-gold transition-colors">
            <Phone size={14} /> Coria: +34 614 940 256
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
