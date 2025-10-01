import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StaysSection from "@/components/StaysSection";
import LuxeSection from "@/components/LuxeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StaysSection />
      <LuxeSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;