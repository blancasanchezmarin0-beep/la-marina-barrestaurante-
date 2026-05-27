import { motion } from "framer-motion";
import { Phone, DoorOpen, DoorClosed, Bath, Users, Sparkles, MapPin, Heart, Church, Baby, Cake, PartyPopper, Sun, Maximize2, Flame, Gem } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ancla from "@/assets/ancla.png";

import salon1 from "@/assets/salon/salon-1.jpeg";
import salon2 from "@/assets/salon/salon-2.jpeg";
import terraza1 from "@/assets/salon/terraza-1.jpeg";
import terraza2 from "@/assets/salon/terraza-2.jpeg";
import fondoContacto from "@/assets/salon/fondo-contacto.jpeg";

const PHONE = "+34 654 58 18 88";
const PHONE_TEL = "+34654581888";

const gallery = [salon1, salon2, terraza1, terraza2];

const services = [
  { icon: Users, title: "Salón interior", desc: "Amplio espacio diáfano con capacidad para grandes celebraciones." },
  { icon: Sparkles, title: "Terraza exterior", desc: "Ambiente acogedor bajo luces cálidas y techo de madera." },
  { icon: DoorOpen, title: "Entrada independiente", desc: "Acceso privado para tus invitados, sin interferir con el restaurante." },
  { icon: DoorClosed, title: "Salida independiente", desc: "Circulación cómoda y discreta para cualquier tipo de evento." },
  { icon: Bath, title: "Aseos privados", desc: "Aseos de uso exclusivo para los asistentes a la celebración." },
];

export default function CelebracionesPage() {
  return (
    <div className="bg-[#FDFBF9] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[65vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={salon1} alt="Salón de celebraciones La Marina" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-[#0D2B35]/65" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-[#87CEEB] font-body text-[11px] tracking-[0.5em] uppercase mb-6 font-semibold">La Marina · Eventos</p>
            <h1 className="font-heading font-normal text-5xl md:text-7xl text-white leading-none mb-6">
              Salón de Celebraciones
            </h1>
            <p className="font-heading italic text-lg md:text-2xl text-white/85 max-w-2xl mx-auto leading-relaxed">
              Un espacio elegante donde tus momentos más importantes cobran vida.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Marquee de eventos */}
      <section className="py-8 md:py-10 bg-white border-y border-[#87CEEB]/15 overflow-hidden group">
        <div className="flex items-center gap-16 md:gap-24 animate-marquee group-hover:[animation-duration:60s] whitespace-nowrap">
          {[...Array(2)].flatMap((_, loop) =>
            [
              { icon: Heart, label: "Bodas" },
              { icon: Church, label: "Comuniones" },
              { icon: Baby, label: "Bautizos" },
              { icon: Cake, label: "Cumpleaños" },
              { icon: PartyPopper, label: "Eventos Privados" },
            ].map((item, i) => (
              <div
                key={`${loop}-${i}`}
                className="flex items-center gap-4 shrink-0 text-[#1A445C] hover:text-[#87CEEB] transition-colors duration-300"
              >
                <item.icon size={22} strokeWidth={1.4} className="text-[#87CEEB]" />
                <span className="font-heading text-xl md:text-2xl tracking-wide">{item.label}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#87CEEB]/40 ml-12 md:ml-20" aria-hidden="true" />
              </div>
            ))
          )}
        </div>
      </section>


      {/* Salón interior — Editorial premium */}
      <section className="relative py-28 md:py-44 bg-[#FDFBF9] overflow-hidden">
        {/* Marca tipográfica de fondo */}
        <div className="absolute top-10 right-0 pointer-events-none select-none hidden md:block">
          <span className="font-heading italic text-[180px] lg:text-[240px] leading-none text-[#1A445C]/[0.035] tracking-tighter">
            Interior
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Imagen — protagonista */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative group"
          >
            {/* Etiqueta flotante */}
            <div className="absolute -top-5 left-6 md:-left-5 z-20 bg-white shadow-xl px-5 py-3 rounded-full flex items-center gap-3 border border-[#87CEEB]/20">
              <span className="w-2 h-2 rounded-full bg-[#87CEEB] animate-pulse" />
              <span className="font-body text-[10px] tracking-[0.35em] uppercase text-[#1A445C] font-semibold">
                Espacio principal
              </span>
            </div>

            {/* Marco decorativo */}
            <div className="absolute -inset-3 md:-inset-5 border border-[#87CEEB]/25 translate-x-3 translate-y-3 md:translate-x-5 md:translate-y-5 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700" />

            <div className="aspect-[4/5] md:aspect-[5/6] rounded-sm overflow-hidden shadow-2xl relative">
              <motion.img
                src={salon2}
                alt="Salón interior La Marina"
                className="w-full h-full object-cover"
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
              />
              {/* Overlay cinematic sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B35]/30 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
            </div>

            {/* Cita visual inferior */}
            <div className="absolute -bottom-8 right-6 md:-right-6 bg-[#1A445C] text-white px-7 py-5 max-w-[280px] shadow-2xl rounded-sm">
              <p className="font-heading italic text-sm md:text-base leading-snug">
                "Cada celebración encuentra aquí su escenario."
              </p>
            </div>
          </motion.div>

          {/* Contenido */}
          <AnimatedSection delay={0.2} className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-7">
              <span className="w-12 h-[1px] bg-[#87CEEB]" />
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-[#87CEEB] font-bold">
                El interior
              </p>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#1A445C] leading-[1.05] mb-8 tracking-tight">
              Donde cada detalle <span className="italic text-[#87CEEB]">celebra</span>.
            </h2>

            <p className="font-body text-gray-600 text-base md:text-[17px] leading-[1.85] font-light mb-6">
              Un salón <span className="text-[#1A445C] font-normal">amplio y luminoso</span>, diseñado para
              acoger los momentos más importantes con la calidez de un espacio cuidado al detalle. Mesas
              vestidas con elegancia, iluminación envolvente y una atmósfera que invita a celebrar sin prisa.
            </p>

            <blockquote className="relative font-heading italic text-xl md:text-2xl text-[#1A445C] leading-snug pl-6 border-l-2 border-[#87CEEB] mb-10">
              Sobriedad, luz y carácter. <br />
              <span className="text-[#87CEEB]">Un escenario hecho para recordar.</span>
            </blockquote>

            {/* Características con iconos */}
            <div className="grid grid-cols-2 gap-5 md:gap-6">
              {[
                { icon: Maximize2, label: "Amplio y versátil" },
                { icon: Sun, label: "Luz natural" },
                { icon: Flame, label: "Iluminación cálida" },
                { icon: Gem, label: "Montaje cuidado" },
              ].map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <div className="p-2.5 border border-[#87CEEB]/30 rounded-full group-hover:bg-[#87CEEB]/10 group-hover:border-[#87CEEB] transition-all duration-500">
                    <f.icon className="text-[#1A445C]" size={16} strokeWidth={1.3} />
                  </div>
                  <span className="font-body text-sm text-gray-700 font-light tracking-wide">{f.label}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>


      {/* Terraza exterior */}
      <section className="py-24 md:py-36 bg-[#1A445C] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          <AnimatedSection delay={0.1} className="order-2 lg:order-1">
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-[#87CEEB] font-bold mb-6">El exterior</p>
            <h2 className="font-heading text-3xl md:text-5xl leading-tight mb-8">Terraza exterior</h2>
            <p className="font-body text-gray-300 text-base md:text-[17px] leading-[1.8] font-light mb-5">
              Un porche cubierto con techo de madera y guirnaldas de luces que crean una atmósfera mágica al
              caer la tarde. Ideal para cócteles de bienvenida, sobremesas largas o como complemento al salón principal.
            </p>
            <p className="font-body text-gray-300 text-base md:text-[17px] leading-[1.8] font-light italic border-l-2 border-[#87CEEB] pl-6 py-1">
              Una experiencia al aire libre, íntima y acogedora.
            </p>
          </AnimatedSection>
          <AnimatedSection className="order-1 lg:order-2">
            <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
              <img src={terraza1} alt="Terraza exterior" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Servicios y comodidades */}
      <section className="py-24 md:py-36 bg-[#F3E9E2] relative overflow-hidden">
        <img src={ancla} alt="" aria-hidden="true" className="absolute -bottom-10 -right-10 w-[320px] opacity-[0.05] pointer-events-none select-none" style={{ transform: "rotate(-20deg)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#87CEEB] font-body text-xs tracking-[0.4em] uppercase font-bold mb-4">Servicios</p>
            <h2 className="font-heading text-4xl md:text-6xl text-[#0D2B35]">Comodidades del espacio</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.08}>
                <div className="bg-white p-8 md:p-10 rounded-[24px] shadow-sm hover:shadow-xl transition-all duration-500 h-full border-t-2 border-[#87CEEB]/40 group">
                  <div className="p-4 inline-flex bg-[#87CEEB]/10 rounded-full mb-6 group-hover:bg-[#87CEEB]/20 transition-colors">
                    <s.icon className="text-[#1A445C]" size={28} />
                  </div>
                  <h3 className="font-heading text-2xl text-[#1A445C] mb-3">{s.title}</h3>
                  <p className="font-body text-gray-500 text-sm leading-relaxed font-light">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={fondoContacto} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0D2B35]/70" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-[#87CEEB] font-body text-xs tracking-[0.4em] uppercase font-bold mb-6">Reserva tu evento</p>
            <h2 className="font-heading text-4xl md:text-6xl text-white mb-6 leading-tight">
              Hablemos de tu celebración
            </h2>
            <p className="font-body text-white/70 text-base md:text-lg leading-relaxed mb-12 font-light">
              Consulta disponibilidad de fechas y condiciones de alquiler llamando directamente al local.
            </p>

            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-4 bg-white/95 text-[#1A445C] px-10 md:px-14 py-5 md:py-6 rounded-full hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl group"
            >
              <div className="p-3 bg-[#87CEEB]/20 rounded-full group-hover:bg-[#87CEEB]/30 transition-colors">
                <Phone className="text-[#1A445C]" size={22} />
              </div>
              <div className="text-left">
                <p className="font-body text-[10px] tracking-[0.4em] uppercase text-[#1A445C]/70 mb-1">Llámanos</p>
                <p className="font-heading text-xl md:text-2xl">{PHONE}</p>
              </div>
            </a>

            <p className="font-body text-white/50 text-xs mt-10 flex items-center justify-center gap-2">
              <MapPin size={14} className="text-[#87CEEB]" /> La Marina · Coria del Río
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-28 bg-[#F3E9E2]">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <AnimatedSection className="mb-12 md:mb-16">
            <p className="text-[#87CEEB] font-body text-xs tracking-[0.4em] uppercase font-bold mb-4">Galería</p>
            <h2 className="font-heading font-normal text-4xl md:text-6xl text-[#0D2B35]">Espacios & ambientes</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
            {gallery.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-[24px] shadow-lg hover:shadow-2xl transition-shadow duration-500 ${
                  i === 0 ? "md:col-span-8 aspect-[16/10]" :
                  i === 1 ? "md:col-span-4 aspect-[3/4]" :
                  i === 2 ? "md:col-span-4 aspect-[3/4]" :
                  "md:col-span-8 aspect-[16/10]"
                }`}
              >
                <img src={src} alt={`Salón de celebraciones ${i + 1}`} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
