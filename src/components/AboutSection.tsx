const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-elegant">
      <div className="container-luxury">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-8 text-gradient-luxury">
            About BEAURA
          </h2>
          
          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-muted-foreground">
            <p className="animate-fade-in-up">
              BEAURA was born from a vision of elegance, inspired by the timeless grace and sophistication of Beatrice—a woman who embodied the perfect balance of strength and beauty, adventure and refinement.
            </p>
            
            <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Our name reflects this duality: <span className="text-primary font-medium">"Beau"</span> representing beauty and <span className="text-secondary font-medium">"Ra"</span> symbolizing radiance. Together, they create an aura of luxury that permeates everything we do.
            </p>
            
            <p className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              From our carefully curated retreats that offer sanctuary for the soul to our exquisite collection of jewelry, perfumes, and home décor, BEAURA is more than a brand—it's a lifestyle. We believe that true luxury lies not in excess, but in the perfect curation of experiences and objects that elevate the everyday into the extraordinary.
            </p>
            
            <div className="mt-12 p-8 card-elegant animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <blockquote className="text-2xl md:text-3xl text-display font-medium text-center italic text-foreground">
                "Every piece, every stay, every moment is crafted with intention—to celebrate the woman who knows her worth and seeks beauty in all its forms."
              </blockquote>
              <p className="mt-4 text-center text-muted-foreground font-medium">— The BEAURA Philosophy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;