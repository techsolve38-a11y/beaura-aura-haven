import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Star } from "lucide-react";

const StaysSection = () => {
  const properties = [
    {
      id: 1,
      name: "BEAURA Kilifi Retreat",
      location: "Kilifi, Kenya",
      description: "Welcome to Kilifi! Long term rates are negotiable.",
      image: "/api/placeholder/600/400",
      rating: 4.9,
      price: "Contact for rates",
      amenities: ["📌 5 minutes walk to the beach", "📌 Ample parking", "📌 Tight security", "📌 Toiletries provided", "📌 Free WiFi", "📌 Close proximity to town, Pwani University, and all government offices/institutions"],
      mapsLink: "https://g.co/kgs/Mg3JZA9"
    }
  ];

  return (
    <section id="stays" className="section-padding bg-background">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-6 text-gradient-luxury">
            BEAURA Homes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover boutique retreats that redefine luxury travel. Each property is carefully selected and curated to offer an unforgettable experience that nurtures both body and soul.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 gap-8 mb-12">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="card-luxury hover-lift overflow-hidden group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="text-sm font-medium">{property.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{property.location}</span>
                </div>
                
                <h3 className="text-display text-xl font-semibold mb-3 text-foreground">
                  {property.name}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {property.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {property.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-display text-xl font-semibold text-primary">
                    {property.price}
                  </span>
                  <div className="flex gap-2">
                    {property.mapsLink && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={property.mapsLink} target="_blank" rel="noopener noreferrer">
                          View Location
                        </a>
                      </Button>
                    )}
                    <Button variant="elegant" size="sm">
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="luxury" size="lg" className="group">
            <Calendar className="w-5 h-5 mr-2" />
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StaysSection;