import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Inicio", path: "/" },
  { label: "Carta", path: "/#carta" },
  { label: "Historia", path: "/historia" },
  { label: "Ubicaciones", path: "/#ubicaciones" },
  { label: "Contacto", path: "/#reservas" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  const handleNavClick = (path: string) => {
    if (path.startsWith("/#")) {
      const id = path.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = path;
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? "bg-deep-blue shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="La Marina" className="h-10 w-auto" />
            <span className="font-heading text-xl md:text-2xl font-bold tracking-wider text-off-white">LA MARINA</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.path.startsWith("/#") ? (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.path)}
                  className="text-sm font-body tracking-wide text-off-white/80 hover:text-gold transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-sm font-body tracking-wide text-off-white/80 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden md:block">
            <Link
              to="/#reservas"
              onClick={() => handleNavClick("/#reservas")}
              className="px-5 py-2.5 text-sm font-body font-medium bg-gold text-off-white rounded-sm hover:bg-gold/90 transition-colors"
            >
              Reservar mesa
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-off-white"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-deep-blue border-t border-off-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) =>
                link.path.startsWith("/#") ? (
                  <button
                    key={link.label}
                    onClick={() => { handleNavClick(link.path); setMobileOpen(false); }}
                    className="block text-off-white/80 hover:text-gold transition-colors font-body"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="block text-off-white/80 hover:text-gold transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                to="/#reservas"
                onClick={() => { handleNavClick("/#reservas"); setMobileOpen(false); }}
                className="block w-full text-center px-5 py-3 font-body font-medium bg-gold text-off-white rounded-sm"
              >
                Reservar mesa
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
