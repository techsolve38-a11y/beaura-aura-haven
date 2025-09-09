import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, X } from "lucide-react";

const CartSidebar = () => {
  const { state, dispatch, totalItems, totalPrice } = useCart();

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const handleWhatsAppCheckout = () => {
    const phoneNumber = "254742406847"; // Remove + and country code formatting
    
    let message = "Hello! I'd like to place an order:\n\n";
    
    state.items.forEach((item, index) => {
      message += `${index + 1}. ${item.product.name}\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: KSh ${item.product.price} each\n`;
      message += `   Subtotal: KSh ${(item.product.price * item.quantity).toFixed(2)}\n\n`;
    });
    
    message += `*Total Amount: KSh ${totalPrice.toFixed(2)}*\n\n`;
    message += "Please confirm the order and let me know the delivery details. Thank you!";
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Sheet open={state.isOpen} onOpenChange={(open) => dispatch({ type: open ? 'OPEN_CART' : 'CLOSE_CART' })}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between">
            <span>Shopping Cart</span>
            <Badge variant="secondary">{totalItems} items</Badge>
          </SheetTitle>
        </SheetHeader>

        {state.items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-96 text-center">
            <div className="text-muted-foreground text-lg mb-2">Your cart is empty</div>
            <p className="text-sm text-muted-foreground mb-4">Add some products to get started</p>
            <Button onClick={() => dispatch({ type: 'CLOSE_CART' })}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-4 py-4">
                {state.items.map((item) => (
                  <div key={item.product.id} className="flex gap-4 p-4 border rounded-lg">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-medium text-sm line-clamp-2">{item.product.name}</h4>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 text-muted-foreground hover:text-destructive"
                          onClick={() => removeItem(item.product.id)}
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">
                          KSh {item.product.price}
                          {item.product.originalPrice && (
                            <span className="text-xs text-muted-foreground line-through ml-2">
                              KSh {item.product.originalPrice}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t pt-4 space-y-4">
              <div className="flex items-center justify-between text-lg font-semibold">
                <span>Total</span>
                <span>KSh {totalPrice.toFixed(2)}</span>
              </div>
              
              <div className="space-y-2">
                <Button className="w-full" size="lg" onClick={handleWhatsAppCheckout}>
                  Checkout via WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => dispatch({ type: 'CLEAR_CART' })}
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;