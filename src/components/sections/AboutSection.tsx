/*
  About Section: Company introduction with vision/mission
  Light background, Prussian Blue text, asymmetric layout
*/
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Eye, Target, Gem, Shield } from "lucide-react";

const values = [
  { icon: Gem, title: "الجودة", desc: "نقدم أعلى المعايير في كل مشروع" },
  { icon: Shield, title: "النزاهة", desc: "نعمل بصدق وشفافية مطلقة" },
  { icon: Eye, title: "الإبداع", desc: "نبتكر أفكاراً جديدة في كل تصميم" },
  { icon: Target, title: "التركيز على العميل", desc: "نفهم احتياجات عملائنا ونلبيها" },
];

export default function AboutSection() {
  const { ref: sectionRef, inView } = useInView(0.1);

  return (
    <section id="about" ref={sectionRef} className="py-24 lg:py-36 bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[1px] bg-[#0A3658]/30" />
            <span className="text-[#1F5B85] text-xs tracking-[0.2em] uppercase font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              About Us
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#0A3658] leading-tight">
            من نحن
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-24">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <p className="text-lg lg:text-xl text-[#343A3F] leading-[1.9] mb-8">
              <strong className="text-[#0A3658]">أحمد القصيّر معماريون</strong> للتصميم وإدارة المشاريع هي شركة سعودية متخصصة في التصميم المعماري، وتنفيذ المشاريع، وأعمال المقاولات. نعمل على ابتكار تصاميم تعكس احتياجات عملائنا وتحول أفكارهم إلى واقع. وبفريق متمكن، وتركيز على الجودة والجمال والاستدامة نحرص على تنفيذ كل مشروع بعناية ووفق أعلى المعايير.
            </p>
          </motion.div>

          {/* Vision & Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="p-8 bg-[#F2F4F8] border-r-2 border-[#0A3658]">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-5 h-5 text-[#1F5B85]" />
                <h3 className="text-lg font-bold text-[#0A3658]">رؤيتنــــا</h3>
              </div>
              <p className="text-[#4D5358] leading-relaxed text-sm">
                أن نكون اسماً موثوقاً في العمارة وإدارة المشاريع، نصنع فضاءات تُلهم وتدوم لأجيال.
              </p>
            </div>

            <div className="p-8 bg-[#F2F4F8] border-r-2 border-[#1F5B85]">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-5 h-5 text-[#1F5B85]" />
                <h3 className="text-lg font-bold text-[#0A3658]">رسالتنـــا</h3>
              </div>
              <p className="text-[#4D5358] leading-relaxed text-sm">
                تقديم تصاميم ومشاريع عالية الجودة تجمع بين الجمال والوظيفة والاستدامة، مع تلبية احتياجات عملائنا وتجاوز توقعاتهم.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <h3 className="text-xl font-bold text-[#0A3658] mb-10">قيمنا الأساسية</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.1, ease: "easeOut" }}
                className="group p-6 border border-[#DDE1E6] hover:border-[#0A3658]/30 transition-all duration-300 hover:shadow-sm"
              >
                <v.icon className="w-8 h-8 text-[#1F5B85] mb-4 group-hover:text-[#0A3658] transition-colors" />
                <h4 className="text-base font-bold text-[#0A3658] mb-2">{v.title}</h4>
                <p className="text-sm text-[#4D5358] leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
