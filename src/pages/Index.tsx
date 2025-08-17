import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StaysSection from "@/components/StaysSection";
import LuxeSection from "@/components/LuxeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import JournalSection from "@/components/JournalSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <StaysSection />
      <LuxeSection />
      <TestimonialsSection />
      <JournalSection />
      <NewsletterSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;