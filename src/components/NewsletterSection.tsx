import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Mail } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically handle the newsletter subscription
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-luxury">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12 animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Sparkles className="w-12 h-12 text-primary animate-pulse" />
                <div className="absolute inset-0 animate-glow">
                  <Sparkles className="w-12 h-12 text-primary" />
                </div>
              </div>
            </div>
            
            <h2 className="text-display text-4xl md:text-5xl font-bold mb-6">
              Join the <span className="text-primary">Aura</span>
            </h2>
            
            <p className="text-xl leading-relaxed text-secondary-foreground/90 max-w-2xl mx-auto">
              Be the first to discover new retreats, exclusive collections, and insider stories. Join our community of women who embrace elegance and adventure.
            </p>
          </div>

          {/* Subscription Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-12 bg-background/10 backdrop-blur-sm border-primary/30 text-secondary-foreground placeholder:text-secondary-foreground/60 focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="h-12 px-8 whitespace-nowrap"
                  >
                    Subscribe
                  </Button>
                </div>
              </form>
            ) : (
              <div className="max-w-md mx-auto">
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-center gap-2 text-primary mb-2">
                    <Sparkles className="w-5 h-5" />
                    <span className="font-semibold">Welcome to the Aura!</span>
                  </div>
                  <p className="text-sm text-secondary-foreground/80">
                    Thank you for subscribing. Check your inbox for a welcome gift.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-display text-lg font-semibold mb-2">Exclusive Access</h3>
              <p className="text-sm text-secondary-foreground/80">
                Be first to book new retreats and shop limited collections
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-display text-lg font-semibold mb-2">Curated Content</h3>
              <p className="text-sm text-secondary-foreground/80">
                Weekly inspiration and lifestyle tips from our expert team
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 text-primary font-bold text-lg">%</div>
              </div>
              <h3 className="text-display text-lg font-semibold mb-2">Special Offers</h3>
              <p className="text-sm text-secondary-foreground/80">
                Exclusive discounts and early bird pricing for subscribers
              </p>
            </div>
          </div>

          {/* Privacy Note */}
          <p className="text-xs text-secondary-foreground/60 mt-8 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;