import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { dispatch } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const getAvailabilityColor = (availability: Product["availability"]) => {
    switch (availability) {
      case "In Stock":
        return "bg-emerald-500/20 text-emerald-700 dark:text-emerald-400";
      case "Limited Edition":
        return "bg-amber-500/20 text-amber-700 dark:text-amber-400";
      case "Out of Stock":
        return "bg-red-500/20 text-red-700 dark:text-red-400";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="group bg-card rounded-lg border shadow-sm hover:shadow-luxury transition-all duration-300 overflow-hidden">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Overlay Actions */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="icon"
            variant="outline"
            className="bg-white/90 backdrop-blur-sm hover:bg-white"
          >
            <Heart className="w-4 h-4" />
          </Button>
        </div>

        {/* Availability Badge */}
        <div className="absolute top-4 left-4">
          <Badge className={getAvailabilityColor(product.availability)}>
            {product.availability}
          </Badge>
        </div>

        {/* Featured/Sale Badge */}
        {product.featured && (
          <div className="absolute bottom-4 left-4">
            <Badge className="bg-primary text-primary-foreground">
              Featured
            </Badge>
          </div>
        )}
        {product.originalPrice && (
          <div className="absolute bottom-4 right-4">
            <Badge className="bg-red-500 text-white">
              Sale
            </Badge>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="text-2xl font-bold text-primary">
              KSh {product.price}
            </div>
            {product.originalPrice && (
              <div className="text-sm text-muted-foreground line-through">
                KSh {product.originalPrice}
              </div>
            )}
          </div>
          <Button 
            className="group-hover:bg-primary-glow transition-colors flex-shrink-0"
            disabled={product.availability === "Out of Stock"}
            onClick={handleAddToCart}
            size="sm"
          >
            <ShoppingCart className="w-4 h-4 mr-1" />
            {product.availability === "Out of Stock" ? "Sold Out" : "Add to Cart"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;