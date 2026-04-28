import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import gelvesImg from "@/assets/historia-fachada.jpg";
import coriaImg from "@/assets/ubicaciones-coria-new.jpg";

const locations = [
  {
    name: "Gelves",
    address: "Pl. de la Marina, 1 · Gelves",
    image: gelvesImg,
    link: "/gelves",
    maps: "https://share.google/18HQvkOaVOtBli8Ul",
  },
  {
    name: "Coria del Río",
    address: "Calle Batán, 95 · Coria del Río",
    image: coriaImg,
    link: "/coria",
    maps: "https://share.google/jsPn75LlDP20kz9i4",
  },
];

export default function UbicacionesSection() {
  return (
    <section id="ubicaciones" className="flex flex-col md:flex-row w-full h-auto md:h-screen">
      {locations.map((loc, i) => (
        <motion.div
          key={loc.name}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.2 }}
          className="relative w-full md:w-1/2 h-[90vh] md:h-full flex items-center justify-center overflow-hidden group"
        >
          {/* Background image */}
          <img
            src={loc.image}
            alt={`La Marina ${loc.name}`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#004865]/55 group-hover:bg-[#004865]/65 transition-colors duration-500" />

          {/* Content centered */}
          <div className="relative z-10 text-center px-6 flex flex-col items-center">
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-white/70 mb-4">
              Encuéntranos
            </p>
            <h3 className="font-heading font-normal text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              {loc.name}
            </h3>
            <p className="flex items-center gap-2 font-body text-sm text-white/80 mb-10">
              <MapPin size={14} /> {loc.address}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={loc.link}
                className="px-8 py-3.5 text-sm font-body font-medium bg-white text-[#004865] rounded-sm hover:bg-[#78D4EC] transition-all duration-300 tracking-wide"
              >
                Explorar restaurante
              </Link>
              <a
                href={loc.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 text-sm font-body font-medium border border-white/60 text-white rounded-sm hover:bg-white/15 transition-all duration-300 tracking-wide"
              >
                Cómo llegar
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
