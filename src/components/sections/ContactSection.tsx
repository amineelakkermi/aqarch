/*
  Contact Section: Contact form + info
  White background with Prussian Blue accents
*/
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Phone, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { sendEmail } from "@/lib/email";

export default function ContactSection() {
  const { ref, inView } = useInView(0.05);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    toast.error("يرجى ملء جميع الحقول المطلوبة");
    return;
  }

  toast.loading("جاري إرسال الرسالة...");

  try {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        subject: `استفسار جديد من ${formData.name} - AQ Architects`,
      }),
    });

    const result = await res.json();

    if (result.success) {
      toast.success("تم إرسال رسالتك بنجاح!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      toast.error(result.error || "فشل إرسال الرسالة");
    }
  } catch (err) {
    console.error(err);
    toast.error("حدث خطأ أثناء الإرسال. حاول لاحقًا.");
  }
};

  const contactInfo = [
    {
      icon: Mail,
      label: "البريد الإلكتروني",
      value: "Info@aqarch.com",
      href: "mailto:Info@aqarch.com",
      dir: "ltr" as const,
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 lg:py-36 bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[1px] bg-[#0A3658]/30" />
            <span className="text-[#1F5B85] text-xs tracking-[0.2em] uppercase font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Contact Us
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#0A3658] leading-tight mb-4">
            تواصل معنا
          </h2>
          <p className="text-[#4D5358] text-base lg:text-lg max-w-xl leading-relaxed">
            نسعد بتواصلكم معنا لمناقشة مشروعكم القادم أو للاستفسار عن خدماتنا
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#0A3658] mb-2">الاسم الكامل</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-[#DDE1E6] bg-white text-[#121619] placeholder:text-[#A2A9B0] focus:border-[#0A3658] focus:ring-1 focus:ring-[#0A3658] outline-none transition-all text-sm"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0A3658] mb-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-[#DDE1E6] bg-white text-[#121619] placeholder:text-[#A2A9B0] focus:border-[#0A3658] focus:ring-1 focus:ring-[#0A3658] outline-none transition-all text-sm"
                    placeholder="example@email.com"
                    dir="ltr"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0A3658] mb-2">رقم الجوال</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-[#DDE1E6] bg-white text-[#121619] placeholder:text-[#A2A9B0] focus:border-[#0A3658] focus:ring-1 focus:ring-[#0A3658] outline-none transition-all text-sm"
                  placeholder="+966 5X XXX XXXX"
                  dir="ltr"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0A3658] mb-2">رسالتك</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-[#DDE1E6] bg-white text-[#121619] placeholder:text-[#A2A9B0] focus:border-[#0A3658] focus:ring-1 focus:ring-[#0A3658] outline-none transition-all text-sm resize-none"
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 px-8 py-3.5 bg-[#0A3658] text-white font-semibold text-sm hover:bg-[#14486E] transition-colors duration-300"
              >
                <Send className="w-4 h-4" />
                إرسال الرسالة
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-start gap-4 p-6 bg-[#F2F4F8] hover:bg-[#DDE1E6]/50 transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-[#0A3658] text-white flex-shrink-0">
                    <info.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-[#4D5358] mb-1">{info.label}</p>
                    <p className="text-[#0A3658] font-medium text-sm group-hover:text-[#1F5B85] transition-colors" dir={info.dir}>
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA Box */}
            <div className="mt-8 p-8 bg-[#0A3658] text-white">
              <h3 className="text-lg font-bold mb-3">جاهز لبدء مشروعك؟</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                تواصل معنا اليوم لمناقشة رؤيتك المعمارية. فريقنا مستعد لتحويل أفكارك إلى واقع.
              </p>
              <a
                href="tel:+966561659996"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#347FB2] hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span dir="ltr">+966 56 165 9996</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
