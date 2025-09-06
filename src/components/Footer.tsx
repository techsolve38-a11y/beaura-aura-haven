import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Star } from "lucide-react";
import ContactForm from "./ContactForm";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-luxury">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-display text-2xl font-bold mb-4 text-primary">
              BEAURA
            </h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Inspired by Her, Created for You. Where luxury meets authenticity in every experience and curated piece.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-display font-semibold mb-4 text-background">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-background/80 hover:text-primary transition-colors">About BEAURA</a></li>
              <li><a href="#stays" className="text-background/80 hover:text-primary transition-colors">BEAURA Homes</a></li>
              <li><a href="#luxe" className="text-background/80 hover:text-primary transition-colors">BEAURA Luxe</a></li>
              <li><a href="/products" className="text-background/80 hover:text-primary transition-colors">Shop Collection</a></li>
              <li><a href="https://www.google.com/maps/place/Natna+studio+-cozy+stay+near+baobab+beach,kilifi/@-3.6257599,39.8627327,17z/data=!4m8!3m7!1s0x183fdd71c1822be7:0x7c91fcb32fcfb472!8m2!3d-3.6257653!4d39.8653076!9m1!1b1!16s%2Fg%2F11l6_9j8dg?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDgzMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-primary transition-colors flex items-center gap-1">
                <Star className="w-4 h-4" />
                Google Reviews
              </a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-display font-semibold mb-4 text-background">Support</h4>
            <ul className="space-y-2">
              <li>
                <ContactForm 
                  trigger={
                    <button className="text-background/80 hover:text-primary transition-colors text-left">
                      Contact Us
                    </button>
                  } 
                />
              </li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Booking Help</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Returns</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-display font-semibold mb-4 text-background">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-background/80">
                  <p>Kilfi Town, Kilifi County - Kenya</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+254742406847" className="text-background/80 hover:text-primary transition-colors">
                  +254 742 406847
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:hello@beaura.com" className="text-background/80 hover:text-primary transition-colors">
                  hello@beaura.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} BEAURA. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;