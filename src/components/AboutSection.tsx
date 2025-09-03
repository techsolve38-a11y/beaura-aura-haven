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
              BEAURA is a lifestyle and gifting brand inspired by my Mama, Beatrice, whose selflessness, generosity and ability to make others feel special continue to guide our vision. Founded in her honor, BEAURA embodies the belief that true luxury is not just in what we own, but in how we share, give, and create lasting memories.
            </p>
            
            <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Our name reflects this beautiful duality: <span className="text-primary font-medium">"Beau"</span> representing beauty and <span className="text-secondary font-medium">"Ra"</span> symbolizing radiance. Together, they create an aura of luxury that permeates everything we do, just as Mama's spirit radiates through every aspect of our brand.
            </p>
            
            <p className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Our collections are thoughtfully curated to reflect elegance, meaning and timeless style. From our carefully curated retreats that offer sanctuary for the soul to our exquisite collection of jewelry, perfumes, and home essentials, every piece carries the essence of Mama's spirit, reminding us that the greatest gift is making others feel valued.
            </p>
            
            <div className="mt-12 p-8 card-elegant animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <blockquote className="text-2xl md:text-3xl text-display font-medium text-center italic text-foreground">
                "Every piece, every stay, every moment is crafted with intention—to celebrate those who know their worth and seek beauty in all its forms."
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