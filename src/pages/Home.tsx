/*
  Design Philosophy: Cinematic Architectural Storytelling
  - White canvas with Prussian Blue accents
  - Large imagery, generous whitespace
  - Cinematic scroll with fade-in animations
  - Brand: AQ Architects / أي كيو معماريون
*/
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
