import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-soft-black py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="font-heading text-2xl text-off-white mb-4">LA MARINA</h3>
            <p className="font-body text-sm text-off-white/50 leading-relaxed mb-6">
              Pescado y carnes premium en Gelves y Coria del Río.
            </p>
            <div className="flex gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-off-white/20 text-off-white/60 hover:text-gold hover:border-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-off-white/20 text-off-white/60 hover:text-gold hover:border-gold transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-body text-sm text-gold tracking-[0.2em] uppercase mb-4">Enlaces</h4>
            <nav className="space-y-2">
              {["Inicio", "Historia"].map((label) => (
                <Link key={label} to={label === "Inicio" ? "/" : "/historia"} className="block font-body text-sm text-off-white/60 hover:text-gold transition-colors">
                  {label}
                </Link>
              ))}
              <Link to="/gelves" className="block font-body text-sm text-off-white/60 hover:text-gold transition-colors">Gelves</Link>
              <Link to="/coria" className="block font-body text-sm text-off-white/60 hover:text-gold transition-colors">Coria del Río</Link>
            </nav>
          </div>
          <div>
            <h4 className="font-body text-sm text-gold tracking-[0.2em] uppercase mb-4">Contacto</h4>
            <div className="space-y-2 font-body text-sm text-off-white/60">
              <p>Gelves: <a href="tel:+34674322897" className="hover:text-gold transition-colors">+34 674 322 897</a></p>
              <p>Coria: <a href="tel:+34614940256" className="hover:text-gold transition-colors">+34 614 940 256</a></p>
              <p className="pt-2">
                <a href="https://share.google/18HQvkOaVOtBli8Ul" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Pl. de la Marina, 1 · Gelves</a>
              </p>
              <p>
                <a href="https://share.google/jsPn75LlDP20kz9i4" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Calle Batán, 95 · Coria del Río</a>
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-off-white/10 pt-8 text-center">
          <p className="font-body text-xs text-off-white/40">
            © {new Date().getFullYear()} La Marina. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
