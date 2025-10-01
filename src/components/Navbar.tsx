import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { User, LogOut, Shield } from "lucide-react";
import { toast } from "sonner";
import CartButton from "./CartButton";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, isAdmin } = useAuth();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out successfully");
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container-luxury flex items-center justify-between py-4">
        <button
          onClick={() => navigate("/")}
          className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
        >
          BEAURA
        </button>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/products")}
          >
            Products
          </Button>

          {user ? (
            <>
              {isAdmin && (
                <Button
                  variant="ghost"
                  onClick={() => navigate("/admin")}
                >
                  <Shield className="mr-2 h-4 w-4" />
                  Admin
                </Button>
              )}
              <Button
                variant="ghost"
                onClick={handleSignOut}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </>
          ) : (
            <Button
              variant="ghost"
              onClick={() => navigate("/auth")}
            >
              <User className="mr-2 h-4 w-4" />
              Sign In
            </Button>
          )}

          <CartButton />
        </div>
      </div>
    </nav>
  );
}