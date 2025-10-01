import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Plus, LogOut, Package } from "lucide-react";
import ProductForm from "@/components/ProductForm";
import ProductList from "@/components/ProductList";

export default function Admin() {
  const { user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    } else if (!loading && !isAdmin) {
      toast.error("Access denied. Admin privileges required.");
      navigate("/");
    }
  }, [user, isAdmin, loading, navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out successfully");
    navigate("/");
  };

  const handleEdit = (product: any) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingProduct(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Package className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Admin Panel</h1>
          </div>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Product Management</CardTitle>
              <Button onClick={() => setShowForm(!showForm)}>
                <Plus className="mr-2 h-4 w-4" />
                Add Product
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {showForm ? (
              <ProductForm
                product={editingProduct}
                onClose={handleFormClose}
              />
            ) : (
              <ProductList onEdit={handleEdit} />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}