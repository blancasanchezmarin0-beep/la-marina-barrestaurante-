import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

import imgSalon from "@/assets/coria/salon.jpg";
import imgBarril from "@/assets/coria/barril.jpg";
import imgTerraza from "@/assets/coria/terraza.jpg";
import imgExterior from "@/assets/coria/fachada.jpg";
import imgHero from "@/assets/coria/hero.jpg";

const defaultImages = [
  { src: imgSalon, title: "Nuestro salón principal", category: "Ambiente", size: "wide" },
  { src: imgExterior, title: "Nos vemos en La Marina", category: "Nosotros", size: "medium" },
  { src: imgBarril, title: "Rincones de La Marina", category: "Ambiente", size: "tall" },
  { src: imgHero, title: "Vistas y atardeceres", category: "Entorno", size: "medium" },
  { src: imgTerraza, title: "Disfruta al aire libre", category: "Terraza", size: "wide" },
];

export interface GalleryImage {
  src: string;
  title: string;
  category: string;
  size: string;
}

interface GaleriaSectionProps {
  images?: GalleryImage[];
}

export default function GaleriaSection({ images }: GaleriaSectionProps) {
  const galleryImages = images || defaultImages;
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section className="py-24 md:py-36 bg-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection className="text-center mb-16 md:mb-24">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">Galería</p>
          <h2 className="font-heading text-4xl md:text-6xl text-foreground max-w-2xl mx-auto leading-tight">
            Nuestra esencia en imágenes
          </h2>
        </AnimatedSection>

        {/* Desktop Masonry Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 auto-rows-[250px] lg:auto-rows-[300px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative group cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-500 ${
                img.size === 'tall' ? 'md:row-span-2' : 
                img.size === 'wide' ? 'md:col-span-2' : ''
              }`}
              onClick={() => setSelectedImage(i)}
            >
              <motion.img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-soft-black/0 group-hover:bg-soft-black/60 transition-colors duration-500 flex flex-col justify-end p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                >
                  <p className="text-gold font-body text-xs tracking-widest uppercase mb-2">{img.category}</p>
                  <h3 className="text-off-white font-heading text-xl md:text-2xl">{img.title}</h3>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Horizontal Carousel */}
        <div className="md:hidden">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 no-scrollbar"
          >
            {galleryImages.map((img, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 w-[85vw] snap-center"
                onClick={() => setSelectedImage(i)}
              >
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-soft-black/80 to-transparent p-6">
                    <p className="text-gold font-body text-xs tracking-widest uppercase mb-1">{img.category}</p>
                    <h3 className="text-off-white font-heading text-lg">{img.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {galleryImages.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-gold/30" />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-soft-black/95 p-4 md:p-8"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-off-white/70 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 text-off-white/50 hover:text-white transition-colors"
            >
              <ChevronLeft size={48} />
            </button>

            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                className="w-full h-full object-contain rounded-sm"
              />
              <div className="absolute -bottom-12 left-0 right-0 text-center">
                <h3 className="text-off-white font-heading text-xl">{galleryImages[selectedImage].title}</h3>
              </div>
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 text-off-white/50 hover:text-white transition-colors"
            >
              <ChevronRight size={48} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
