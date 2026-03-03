/*
  Design: Cinematic Architectural Storytelling
  Navbar: Transparent on top, solid white on scroll
  Brand colors: Prussian Blue #0A3658
*/
import { useState, useEffect } from "react";
import { Menu, X, Phone, Instagram } from "lucide-react";
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
            
            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/966561659996"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 text-white/80 text-lg"
            >
              <svg 
                className="w-5 h-5" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.221-.322.074-.521-.151-.198-.521-.667-.739-1.018-.218-.351-.436-.298-.598-.305-.162-.006-.347-.006-.531-.006-.184 0-.483.069-.736.347-.253.277-.967.945-.967 2.304 0 1.359.989 2.669 1.128 2.857.139.188 1.951 2.983 4.735 4.186.662.286 1.179.456 1.582.493.413.037.798.149 1.082.074.284-.075 1.758-.866 2.005-1.704.247-.838.247-1.558.173-1.708-.074-.149-.272-.223-.57-.372z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
              </svg>
              <span>واتساب</span>
            </motion.a>
            
            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/aqarch.co?igsh=dzNlZm1nc2FqYnF3&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-2 text-white/80 text-lg"
            >
              <Instagram className="w-5 h-5" />
              <span>aqarch.co</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
