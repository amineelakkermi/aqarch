/*
  Footer: Dark Prussian Blue footer with links and copyright
*/
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const quickLinks = [
  { label: "الرئيسية", href: "#hero" },
  { label: "من نحن", href: "#about" },
  { label: "خدماتنا", href: "#services" },
  { label: "أعمالنا", href: "#projects" },
  { label: "تواصل معنا", href: "#contact" },
];

const services = [
  "التصميم المعماري",
  "التصميم الداخلي",
  "إدارة المشاريع",
  "خدمات البناء والمقاولات",
];

export default function Footer() {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A3658] text-white">
      {/* Main Footer */}
      <div className="container py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">


          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-white/80">تواصل معنا</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:Info@aqarch.com" className="flex items-center gap-3 text-white/50 text-sm hover:text-white transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span dir="ltr">Info@aqarch.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+966561659996" className="flex items-center gap-3 text-white/50 text-sm hover:text-white transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span dir="ltr">+966 56 165 9996</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/50 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>الرياض والقصيم، المملكة العربية السعودية</span>
                </div>
              </li>
              <li>
                <a 
                  href="https://wa.me/966561659996" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 text-sm hover:text-white transition-colors"
                >
                  <svg 
                    className="w-4 h-4 flex-shrink-0" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.221-.322.074-.521-.151-.198-.521-.667-.739-1.018-.218-.351-.436-.298-.598-.305-.162-.006-.347-.006-.531-.006-.184 0-.483.069-.736.347-.253.277-.967.945-.967 2.304 0 1.359.989 2.669 1.128 2.857.139.188 1.951 2.983 4.735 4.186.662.286 1.179.456 1.582.493.413.037.798.149 1.082.074.284-.075 1.758-.866 2.005-1.704.247-.838.247-1.558.173-1.708-.074-.149-.272-.223-.57-.372z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                  </svg>
                  <span dir="ltr">+966 56 165 9996</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/aqarch.co?igsh=dzNlZm1nc2FqYnF3&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 text-sm hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4 flex-shrink-0" />
                  <span>@aqarch.co</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
جميع الحقوق محفوظة &copy; {new Date().getFullYear()}
          </p>

        </div>
      </div>
    </footer>
  );
}
