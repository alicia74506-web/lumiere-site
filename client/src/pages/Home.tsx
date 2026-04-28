/*
 * LUMIÈRE — Art of Scents
 * Main Home Page
 * Design: Wabi-Sabi Luxe — Japanese Wabi-Sabi × French Minimalism × Luxury Branding
 * Sections: Hero → About → Services → B2B → Founder → Partners → Contact → Footer
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import B2BSection from "@/components/sections/B2BSection";
import FounderSection from "@/components/sections/FounderSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#EDE8E0" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <B2BSection />
      <FounderSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
