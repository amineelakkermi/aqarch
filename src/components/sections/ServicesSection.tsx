/*
  Services Section: 4 services with cinematic image backgrounds
  Prussian Blue dark section for contrast
*/
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { IMAGES } from "@/lib/images";
// Removed icons import

const services = [
  {
    title: "التصميم المعماري",
    desc: "ابتكار تصاميم مبتكرة وعملية مصممة خصيصاً لكل مشروع، تجمع بين الجمال والوظيفة.",
    image: IMAGES.hero,
  },
  {
    title: "التصميم الداخلي",
    desc: "تصميم مساحات داخلية تجمع بين الجمال والراحة والعملية، لتعكس شخصية ساكنيها.",
    image: IMAGES.interior,
  },
  {
    title: "إدارة المشاريع والإشراف",
    desc: "الإشراف على كل مرحلة لضمان الجودة والكفاءة والتسليم في الوقت المحدد.",
    image: IMAGES.commercial,
  },
  {
    title: "خدمات البناء والمقاولات",
    desc: "تنفيذ استثنائي مع الاهتمام بالتفاصيل ومواد عالية الجودة وحرفية ماهرة تضمن نتائج دائمة.",
    image: IMAGES.construction,
  },
];

export default function ServicesSection() {
  const { ref, inView } = useInView(0.05);

  return (
    <section id="services" ref={ref} className="py-24 lg:py-36 bg-[#0A3658]">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[1px] bg-white/30" />
            <span className="text-white/50 text-xs tracking-[0.2em] uppercase font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Our Services
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-4">
            خدماتنا
          </h2>
          <p className="text-white/50 text-base lg:text-lg max-w-xl leading-relaxed">
            نقدم مجموعة متكاملة من الخدمات المعمارية والهندسية لتحويل رؤيتك إلى واقع
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: "easeOut" }}
              className="group relative overflow-hidden h-72 lg:h-80"
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A3658]/95 via-[#0A3658]/60 to-[#0A3658]/20 group-hover:from-[#0A3658]/98 transition-all duration-500" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8">

                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-md">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
