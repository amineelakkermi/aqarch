/*
  Project Detail Page
  Design: Cinematic Architectural Storytelling
  Colors: Prussian Blue #0A3658, Mid Blue #1F5B85
  Fonts: Tajawal (Arabic), Space Grotesk (English)
*/
import { useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Maximize, Calendar, Clock, User, CheckCircle2, ChevronLeft, ChevronRight, X, Menu, Phone } from "lucide-react";
import { getProjectById, type ProjectDetail as ProjectDetailType } from "@/lib/projects";
import Footer from "@/components/sections/Footer";

function ProjectNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-[#0A3658]/80 backdrop-blur-sm"
        }`}
      >
        <div className="container flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663056579686/zKgBhhqZhdyhLfpT.png"
              alt="أحمد القصير معماريون"
              className={`h-9 lg:h-11 w-auto object-contain transition-all duration-500 ${
                scrolled ? "brightness-50" : "brightness-0 invert"
              }`}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
                scrolled
                  ? "text-[#0A3658]/70 hover:text-[#0A3658]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <span>العودة للرئيسية</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+966561659996"
              className={`flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-sm transition-all duration-300 ${
                scrolled
                  ? "bg-[#0A3658] text-white hover:bg-[#14486E]"
                  : "bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 border border-white/20"
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span dir="ltr">+966 56 165 9996</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 transition-colors ${
              scrolled ? "text-[#0A3658]" : "text-white"
            }`}
            aria-label="القائمة"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0A3658] flex flex-col items-center justify-center gap-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="text-white text-2xl font-medium hover:opacity-80 transition-opacity flex items-center gap-3"
              >
                <span>العودة للرئيسية</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
            </motion.div>
            <motion.a
              href="tel:+966561659996"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 text-white/80 text-lg mt-4"
            >
              <Phone className="w-5 h-5" />
              <span dir="ltr">+966 56 165 9996</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ImageLightbox({ images, currentIndex, onClose, onNext, onPrev }: {
  images: { src: string; alt: string }[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNext();
      if (e.key === "ArrowRight") onPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onNext, onPrev]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 left-6 text-white/70 hover:text-white transition-colors z-10"
        aria-label="إغلاق"
      >
        <X className="w-8 h-8" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10"
        aria-label="السابق"
      >
        <ChevronRight className="w-10 h-10" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10"
        aria-label="التالي"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>

      <motion.img
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="max-w-[90vw] max-h-[85vh] object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentIndex ? "bg-white w-6" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function ProjectDetail() {
  const params = useParams<{ id: string }>();
  const project = getProjectById(params.id || "");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white" dir="rtl">
        <ProjectNavbar />
        <h1 className="text-3xl font-bold text-[#0A3658] mb-4">المشروع غير موجود</h1>
        <p className="text-[#4D5358] mb-8">عذراً، لم نتمكن من العثور على المشروع المطلوب.</p>
        <Link
          href="/"
          className="flex items-center gap-2 text-[#1F5B85] font-medium hover:text-[#0A3658] transition-colors"
        >
          <span>العودة للرئيسية</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => setLightboxIndex((prev) => (prev + 1) % project.gallery.length);
  const prevImage = () => setLightboxIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <ProjectNavbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
        <img
          src={project.mainImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A3658]/90 via-[#0A3658]/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 pb-12 lg:pb-16">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-[1px] bg-white/40" />
                <span className="text-white/70 text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  COMMERCIAL
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-3 leading-tight">
                {project.title}
              </h1>
              <p className="text-white/60 text-sm lg:text-base" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {project.titleEn}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Info Bar */}
      <section className="bg-[#F7F8FA] border-b border-[#E8EAEE]">
        <div className="container py-6 lg:py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#1F5B85] flex-shrink-0" />
              <div>
                <p className="text-[10px] text-[#4D5358]/60 uppercase tracking-wider mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>الموقع</p>
                <p className="text-sm text-[#0A3658] font-medium">{project.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Maximize className="w-5 h-5 text-[#1F5B85] flex-shrink-0" />
              <div>
                <p className="text-[10px] text-[#4D5358]/60 uppercase tracking-wider mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>المساحة</p>
                <p className="text-sm text-[#0A3658] font-medium">{project.area}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-[#1F5B85] flex-shrink-0" />
              <div>
                <p className="text-[10px] text-[#4D5358]/60 uppercase tracking-wider mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>السنة</p>
                <p className="text-sm text-[#0A3658] font-medium">{project.year}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#1F5B85] flex-shrink-0" />
              <div>
                <p className="text-[10px] text-[#4D5358]/60 uppercase tracking-wider mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>المدة</p>
                <p className="text-sm text-[#0A3658] font-medium">{project.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-[#1F5B85] flex-shrink-0" />
              <div>
                <p className="text-[10px] text-[#4D5358]/60 uppercase tracking-wider mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>العميل</p>
                <p className="text-sm text-[#0A3658] font-medium">{project.client}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#1F5B85] flex-shrink-0" />
              <div>
                <p className="text-[10px] text-[#4D5358]/60 uppercase tracking-wider mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>الحالة</p>
                <p className="text-sm text-[#0A3658] font-medium">{project.status}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description & Details */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-7"
            >
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-[1px] bg-[#0A3658]/30" />
                  <span className="text-[#1F5B85] text-xs tracking-[0.2em] uppercase font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    About The Project
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#0A3658] mb-6">
                  نبذة عن المشروع
                </h2>
                <p className="text-[#4D5358] text-base lg:text-lg leading-[1.9]">
                  {project.description}
                </p>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-10">
                <div className="bg-[#F7F8FA] p-6 lg:p-8 border-r-4 border-[#0A3658]">
                  <h3 className="text-lg font-bold text-[#0A3658] mb-3">التحدي</h3>
                  <p className="text-[#4D5358] text-sm lg:text-base leading-[1.8]">
                    {project.challenge}
                  </p>
                </div>
                <div className="bg-[#F7F8FA] p-6 lg:p-8 border-r-4 border-[#1F5B85]">
                  <h3 className="text-lg font-bold text-[#0A3658] mb-3">الحل</h3>
                  <p className="text-[#4D5358] text-sm lg:text-base leading-[1.8]">
                    {project.solution}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="lg:col-span-5"
            >
              {/* Features */}
              <div className="mb-10">
                <h3 className="text-lg font-bold text-[#0A3658] mb-5 flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-[#0A3658]/30" />
                  مميزات المشروع
                </h3>
                <div className="space-y-3">
                  {project.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                      className="flex items-start gap-3 p-3 bg-[#F7F8FA] hover:bg-[#EEF1F5] transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1F5B85] mt-2 flex-shrink-0" />
                      <span className="text-[#4D5358] text-sm leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Scope of Work */}
              <div className="bg-[#0A3658] p-6 lg:p-8">
                <h3 className="text-lg font-bold text-white mb-5">نطاق العمل</h3>
                <div className="space-y-3">
                  {project.scope.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#347FB2] flex-shrink-0" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24 bg-[#F7F8FA]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-[1px] bg-[#0A3658]/30" />
              <span className="text-[#1F5B85] text-xs tracking-[0.2em] uppercase font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Project Gallery
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0A3658] mb-10">
              معرض الصور
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {project.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
                className="group cursor-pointer relative aspect-[4/3] overflow-hidden"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0A3658]/0 group-hover:bg-[#0A3658]/30 transition-all duration-500 flex items-center justify-center">
                  <Maximize className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-[#0A3658]">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              هل لديك مشروع مشابه؟
            </h2>
            <p className="text-white/60 text-base max-w-lg mx-auto mb-8">
              تواصل معنا اليوم لمناقشة رؤيتك المعمارية. فريقنا مستعد لتحويل أفكارك إلى واقع.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="tel:+966599582615"
                className="px-8 py-3.5 bg-white text-[#0A3658] text-sm font-bold hover:bg-white/90 transition-colors"
              >
                اتصل بنا الآن
              </a>
              <Link
                href="/"
                className="px-8 py-3.5 border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors"
              >
                العودة للرئيسية
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <ImageLightbox
            images={project.gallery}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxOpen(false)}
            onNext={nextImage}
            onPrev={prevImage}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
