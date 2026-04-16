import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-soft-black py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="font-heading text-2xl text-off-white mb-4">LA MARINA</h3>
            <p className="font-body text-sm text-off-white/50 leading-relaxed">
              Pescado, marisco y carnes premium en Gelves y Coria del Río.
            </p>
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
              <p className="pt-2">Pl. de la Marina, 1 · Gelves</p>
              <p>Calle Batán, 95 · Coria del Río</p>
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
