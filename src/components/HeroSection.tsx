import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-luxury-room.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury boutique retreat interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white container-luxury">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Logo/Brand Name */}
          <h1 className="text-display text-6xl md:text-8xl font-bold mb-6 tracking-wider">
            BEAURA
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl font-light mb-12 tracking-wide font-body max-w-2xl mx-auto leading-relaxed">
            Inspired by Excellence, Created for You
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl font-light mb-12 text-white/90 max-w-3xl mx-auto font-body">
            Discover a world where luxury meets authenticity. From boutique retreats that inspire wanderlust to curated collections that elevate everyday moments.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              variant="hero"
              size="xl"
              className="min-w-48"
              onClick={() => document.getElementById('stays')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Stays
            </Button>
            <Button
              variant="ghost_luxury"
              size="xl"
              className="min-w-48 text-white border-white hover:bg-white hover:text-primary"
              onClick={() => document.getElementById('luxe')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Shop Luxe
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-luxury-float">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;