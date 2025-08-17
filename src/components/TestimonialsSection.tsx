import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Isabella Chen",
      role: "Travel Enthusiast",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "The Aura Retreat was absolutely magical. Every detail was thoughtfully curated, from the minimalist design to the breathtaking sunset views. BEAURA truly understands luxury.",
      category: "stays"
    },
    {
      id: 2,
      name: "Sophia Martinez",
      role: "Jewelry Collector",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "The Gold Aura Collection is exquisite. Each piece tells a story of elegance and craftsmanship. I've never felt more beautiful than when wearing BEAURA jewelry.",
      category: "luxe"
    },
    {
      id: 3,
      name: "Emma Thompson",
      role: "Interior Designer",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "BEAURA's home collection transformed my living space into a sanctuary. The attention to detail and quality is unmatched. It's luxury that you can feel.",
      category: "luxe"
    },
    {
      id: 4,
      name: "Victoria Laurent",
      role: "Wellness Coach",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "Forest Whispers Lodge provided the perfect escape. The connection with nature combined with luxurious amenities created an unforgettable retreat experience.",
      category: "stays"
    },
    {
      id: 5,
      name: "Camille Dubois",
      role: "Fragrance Enthusiast",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "Beatrice Signature is my signature scent now. It captures sophistication and femininity perfectly. The fragrance evolves beautifully throughout the day.",
      category: "luxe"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-6 text-gradient-luxury">
            What Our Guests Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover why women choose BEAURA for their most cherished moments and spaces.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="card-elegant p-8 md:p-12 text-center relative animate-fade-in-up">
            <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />
            
            <blockquote className="text-xl md:text-2xl text-display font-medium leading-relaxed mb-8 text-foreground">
              "{currentTestimonial.text}"
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
              />
              <div className="text-left">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-semibold text-foreground">{currentTestimonial.name}</p>
                <p className="text-sm text-muted-foreground">{currentTestimonial.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center gap-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary scale-125"
                  : "bg-muted hover:bg-primary/50"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl md:text-4xl font-bold text-display text-primary mb-2">
              500+
            </div>
            <p className="text-muted-foreground">Happy Guests</p>
          </div>
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl md:text-4xl font-bold text-display text-primary mb-2">
              4.9
            </div>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-3xl md:text-4xl font-bold text-display text-primary mb-2">
              98%
            </div>
            <p className="text-muted-foreground">Return Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;