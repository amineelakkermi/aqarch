/*
  Projects Section: Portfolio showcase with large images
  White background, cinematic image cards
  Links to individual project detail pages
*/
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { projects } from "@/lib/projects";

export default function ProjectsSection() {
  const { ref, inView } = useInView(0.05);

  return (
    <section id="projects" ref={ref} className="py-24 lg:py-36 bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-20"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[1px] bg-[#0A3658]/30" />
              <span className="text-[#1F5B85] text-xs tracking-[0.2em] uppercase font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Our Projects
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#0A3658] leading-tight">
              أعمالنا
            </h2>
          </div>
          <p className="text-[#4D5358] text-base max-w-md leading-relaxed mt-4 lg:mt-0">
            مجموعة مختارة من مشاريعنا التي تعكس التزامنا بالتميز والابتكار في التصميم المعماري
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8 lg:space-y-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.2, ease: "easeOut" }}
              className="group"
            >
              <Link href={`/project/${project.id}`} className="block">
                <div className={`grid lg:grid-cols-12 gap-6 lg:gap-10 items-center ${i % 2 === 1 ? "lg:direction-ltr" : ""}`}>
                  {/* Image */}
                  <div className={`lg:col-span-8 overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={project.mainImage}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[#0A3658]/0 group-hover:bg-[#0A3658]/10 transition-all duration-500" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className={`lg:col-span-4 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <span className="text-[#1F5B85] text-xs tracking-[0.15em] uppercase mb-2 block" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {project.categoryEn}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#0A3658] mb-3 group-hover:text-[#1F5B85] transition-colors">
                      {project.title}
                    </h3>
                    <div className="space-y-2 mb-6">
                      <p className="text-[#4D5358] text-sm">{project.location}</p>
                      <p className="text-[#4D5358] text-sm">المساحة: {project.area}</p>
                      <span className="inline-block px-3 py-1 bg-[#F2F4F8] text-[#0A3658] text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[#1F5B85] text-sm font-medium group-hover:gap-3 transition-all">
                      <span>عرض المشروع</span>
                      <ArrowLeft className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Divider */}
              {i < projects.length - 1 && (
                <div className="mt-8 lg:mt-12 h-[1px] bg-[#DDE1E6]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
