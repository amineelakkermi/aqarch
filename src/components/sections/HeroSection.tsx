/*
  Hero Section: Full-screen cinematic hero with architectural image
  Dark image background → white text
*/
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { IMAGES } from "@/lib/images";

export default function HeroSection() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="عمارة حديثة"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A3658]/70 via-[#0A3658]/40 to-[#0A3658]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 lg:pb-32 container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-white/50" />
            <span className="text-white/70 text-sm tracking-widest uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Architectural Vision
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.15] mb-6">
            تصاميمنا
            <br />
            <span className="text-white/90">تعكس رؤيتك</span>
          </h1>

          <p className="text-white/70 text-lg lg:text-xl max-w-xl leading-relaxed mb-10">
            نبتكـــر اليــوم ونشكّـل الغــد
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="px-8 py-3.5 bg-white text-[#0A3658] font-semibold text-sm hover:bg-white/90 transition-all duration-300"
            >
              استكشف أعمالنا
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="px-8 py-3.5 border border-white/30 text-white font-medium text-sm hover:bg-white/10 transition-all duration-300"
            >
              تواصل معنا
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors"
          aria-label="اسحب للأسفل"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.button>
      </div>

      {/* Side decorative line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "30%" }}
        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-8 lg:left-16 w-[1px] bg-white/20 hidden lg:block"
      />
    </section>
  );
}
