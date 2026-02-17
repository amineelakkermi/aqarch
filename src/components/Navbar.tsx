/*
  Design: Cinematic Architectural Storytelling
  Navbar: Transparent on top, solid white on scroll
  Brand colors: Prussian Blue #0A3658
*/
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "الرئيسية", href: "#hero" },
  { label: "من نحن", href: "#about" },
  { label: "خدماتنا", href: "#services" },
  { label: "أعمالنا", href: "#projects" },
  { label: "لماذا نحن", href: "#why-us" },
  { label: "تواصل معنا", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleClick("#hero"); }}
            className="flex items-center gap-2"
          >
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663056579686/zKgBhhqZhdyhLfpT.png"
              alt="أحمد القصير معماريون"
              className={`h-9 lg:h-11 w-auto object-contain transition-all duration-500 ${
                scrolled ? "brightness-50" : "brightness-0 invert"
              }`}
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                className={`text-sm font-medium transition-colors duration-300 hover:opacity-100 ${
                  scrolled
                    ? "text-[#0A3658]/70 hover:text-[#0A3658]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
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
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="text-white text-2xl font-medium hover:opacity-80 transition-opacity"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="tel:+966561659996"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
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
