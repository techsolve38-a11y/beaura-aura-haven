import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import jewelryImage from "@/assets/jewelry-display.jpg";
import perfumeImage from "@/assets/perfume-collection.jpg";
import homeDecorImage from "@/assets/home-decor.jpg";

const LuxeSection = () => {
  const navigate = useNavigate();
  const categories = [
    {
      id: 1,
      name: "Jewelry",
      description: "Handcrafted pieces that tell your story",
      image: jewelryImage,
      featured: "Gold Aura Collection",
      items: "50+ Pieces"
    },
    {
      id: 2,
      name: "Perfumes & Fragrances",
      description: "Signature scents that capture the essence of luxury",
      image: perfumeImage,
      featured: "Beatrice Signature",
      items: "12 Fragrances"
    },
    {
      id: 3,
      name: "Bags",
      description: "Luxury accessories for every occasion",
      image: homeDecorImage,
      featured: "Elegance Collection",
      items: "25+ Styles"
    },
    {
      id: 4,
      name: "Women's Wear",
      description: "Sophisticated fashion for the modern woman",
      image: jewelryImage,
      featured: "Grace Collection",
      items: "40+ Pieces"
    },
    {
      id: 5,
      name: "Accessories",
      description: "Perfect finishing touches for any look",
      image: perfumeImage,
      featured: "Aura Line",
      items: "30+ Items"
    },
    {
      id: 6,
      name: "Home Essentials",
      description: "Curated pieces that transform spaces into sanctuaries",
      image: homeDecorImage,
      featured: "Aura Living Collection",
      items: "60+ Items"
    }
  ];

  return (
    <section id="luxe" className="section-padding bg-gradient-elegant">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-6 text-gradient-luxury">
            BEAURA Luxe
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated collection of luxury goods. Each piece is selected for its exceptional quality, timeless design, and ability to elevate your everyday moments.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => navigate(`/products?category=${encodeURIComponent(category.name)}`)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-elegant hover:shadow-luxury transition-all duration-500">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-display text-2xl font-bold">{category.name}</h3>
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <p className="text-white/90 mb-3 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-primary font-medium">{category.featured}</span>
                      <span className="text-white/70">{category.items}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Collection */}
        <div className="card-elegant p-8 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-display text-2xl font-bold mb-4 text-gradient-luxury">
            The Beatrice Collection
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our signature collection featuring the finest jewelry, most coveted fragrances, and most elegant pieces. Limited edition items crafted exclusively for the discerning BEAURA customer.
          </p>
          <Button variant="luxury" size="lg" className="group">
            <a href="/products" className="flex items-center">
              Explore Collection
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LuxeSection;