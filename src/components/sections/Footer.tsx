/*
  Footer: Dark Prussian Blue footer with links and copyright
*/
import { Phone, Mail, MapPin } from "lucide-react";

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
                <a href="mailto:hello@aqarch.co" className="flex items-center gap-3 text-white/50 text-sm hover:text-white transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span dir="ltr">hello@aqarch.co</span>
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
