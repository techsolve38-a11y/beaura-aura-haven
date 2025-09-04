import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const CartButton = () => {
  const { totalItems, dispatch } = useCart();

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative"
      onClick={() => dispatch({ type: 'TOGGLE_CART' })}
    >
      <ShoppingCart className="w-5 h-5" />
      {totalItems > 0 && (
        <Badge 
          className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-primary text-primary-foreground"
        >
          {totalItems}
        </Badge>
      )}
    </Button>
  );
};

export default CartButton;