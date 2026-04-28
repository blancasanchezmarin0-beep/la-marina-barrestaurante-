import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#F9F7F2]"
        >
          <motion.img
            src={logo}
            alt="La Marina"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-52 md:w-64 mb-6 drop-shadow-2xl"
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-heading font-normal text-2xl md:text-3xl tracking-[0.25em] text-[#004865] uppercase"
          >
            La Marina
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, delay: 0.5, ease: "easeInOut" }}
            className="mt-8 h-[1px] w-24 bg-[#78D4EC] origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
