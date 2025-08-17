import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const phoneNumber = "1234567890"; // Replace with actual BEAURA phone number
  const message = "Hello BEAURA, I have an inquiry.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        variant="hero"
        size="lg"
        className="rounded-full w-16 h-16 animate-glow"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppFloat;