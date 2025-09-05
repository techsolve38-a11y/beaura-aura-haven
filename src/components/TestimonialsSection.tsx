import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "James 'Jemo'",
      role: "Guest",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "Your hospitality made my time in Kilifi truly enjoyable and memorable. I leave with deep appreciation and memories.",
      category: "stays"
    },
    {
      id: 2,
      name: "Bena",
      role: "Guest",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "This place rekindled my relationship. Very wonderful, I truly enjoyed.",
      category: "stays"
    },
    {
      id: 3,
      name: "Jeff",
      role: "Guest",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "Ambience, serene!! The ambience is spectacular. Great host!! Will definitely visit again.",
      category: "stays"
    },
    {
      id: 4,
      name: "Jarred Onyango",
      role: "Nairobi, Kenya",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "Hospitality at its best!!! Excellent communication, excellent room service/decoration, affordable, perfect stay, peaceful. Future referrals guaranteed and revisit.",
      category: "stays"
    },
    {
      id: 5,
      name: "Christine Mumbua",
      role: "Mombasa, Kenya",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "Great place to stay: modern, comfortable and close to the beach. Good communication, perfect room service, very clean and affordable. Will surely refer friends.",
      category: "stays"
    },
    {
      id: 6,
      name: "Maulid Mubarak",
      role: "Mombasa, Kenya",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "I had a wonderful stay, perfectly situated, had everything I needed and good hospitality. I will highly recommend the studio to solo traveller or a couple.",
      category: "stays"
    },
    {
      id: 7,
      name: "Ms. Sophie",
      role: "Tanzania",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "I am so much excited to express my feelings to be in Kilifi as my first visit and at BEAURA Homes as my special home. The place is excellent for any guest, clean place, cool and exciting.",
      category: "stays"
    },
    {
      id: 8,
      name: "Esther Family",
      role: "Guest",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "We wish to register our appreciation for the warm welcome during our four weeks stay. The environment, service was awesome. BEAURA Homes is a home away from home.",
      category: "stays"
    },
    {
      id: 9,
      name: "Rachel Kish",
      role: "Guest",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "Awesome experience. Loved the communication, the clean space, the customer care. Highly recommend.",
      category: "stays"
    },
    {
      id: 10,
      name: "Kevin",
      role: "Guest",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "Great host. Awesome experience staying here. Place is neat, well organised, and host was friendly and constantly communicating. Will visit again!!!",
      category: "stays"
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