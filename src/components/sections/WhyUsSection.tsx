/*
  Why Us Section: Stats + reasons to choose AQ Architects
  Light gray background with counters
*/
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Award, Users, Building2, Clock, CheckCircle2 } from "lucide-react";

const stats = [
  { icon: Building2, number: "50+", label: "مشروع منجز" },
  { icon: Users, number: "30+", label: "عميل سعيد" },
  { icon: Clock, number: "10+", label: "سنوات خبرة" },
  { icon: Award, number: "100%", label: "التزام بالجودة" },
];

const reasons = [
  {
    title: "خبرة محلية عميقة",
    desc: "فهم شامل للبيئة السعودية ومتطلبات البناء المحلية والأنظمة والتشريعات.",
  },
  {
    title: "تصاميم مخصصة",
    desc: "كل مشروع فريد من نوعه، نصمم حلولاً تناسب احتياجاتك وتعكس رؤيتك الخاصة.",
  },
  {
    title: "فريق متكامل",
    desc: "مهندسون ومصممون ومديرو مشاريع يعملون بتناغم لتحقيق أفضل النتائج.",
  },
  {
    title: "التزام بالمواعيد",
    desc: "نحترم الجداول الزمنية ونسعى لتسليم المشاريع في الوقت المحدد وبالميزانية المتفق عليها.",
  },
  {
    title: "جودة لا تتنازل",
    desc: "نستخدم أفضل المواد ونتبع أعلى معايير الجودة في التنفيذ والتشطيب.",
  },
  {
    title: "دعم ما بعد التسليم",
    desc: "علاقتنا مع العميل لا تنتهي بتسليم المشروع، بل نقدم دعماً مستمراً.",
  },
];

export default function WhyUsSection() {
  const { ref, inView } = useInView(0.05);

  return (
    <section id="why-us" ref={ref} className="py-24 lg:py-36 bg-[#F2F4F8]">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[1px] bg-[#0A3658]/30" />
            <span className="text-[#1F5B85] text-xs tracking-[0.2em] uppercase font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Why Choose Us
            </span>
            <div className="w-10 h-[1px] bg-[#0A3658]/30" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#0A3658] leading-tight">
            لماذا تختارنا ؟
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: "easeOut" }}
              className="text-center p-6 lg:p-8 bg-white"
            >
              <stat.icon className="w-8 h-8 text-[#1F5B85] mx-auto mb-4" />
              <div className="text-3xl lg:text-4xl font-bold text-[#0A3658] mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {stat.number}
              </div>
              <p className="text-[#4D5358] text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: "easeOut" }}
              className="p-6 lg:p-8 bg-white hover:shadow-md transition-shadow duration-300"
            >
              <CheckCircle2 className="w-5 h-5 text-[#1F5B85] mb-4" />
              <h3 className="text-base font-bold text-[#0A3658] mb-3">{reason.title}</h3>
              <p className="text-sm text-[#4D5358] leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
