import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with us for inquiries, bookings, or any questions about our luxury stays and exclusive products.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-foreground">Location</h3>
            <p className="text-muted-foreground">
              Kilifi Town Center
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-foreground">Phone</h3>
            <a 
              href="tel:+254742406847"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              +254742406847
            </a>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-foreground">Email</h3>
            <a 
              href="mailto:info@beaura.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              info@beaura.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;