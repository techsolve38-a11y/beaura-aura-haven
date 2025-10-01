import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { z } from "zod";

const productSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  price: z.number().min(0, "Price must be positive"),
  description: z.string().min(1, "Description is required").max(1000),
  image: z.string().url("Must be a valid URL"),
  category: z.string().min(1, "Category is required"),
  availability: z.enum(["In Stock", "Limited Edition", "Out of Stock"]),
});

interface ProductFormProps {
  product?: any;
  onClose: () => void;
}

export default function ProductForm({ product, onClose }: ProductFormProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    original_price: "",
    description: "",
    image: "",
    category: "",
    availability: "In Stock",
    featured: false,
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        price: product.price?.toString() || "",
        original_price: product.original_price?.toString() || "",
        description: product.description || "",
        image: product.image || "",
        category: product.category || "",
        availability: product.availability || "In Stock",
        featured: product.featured || false,
      });
    }
  }, [product]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = productSchema.parse({
        name: formData.name,
        price: parseFloat(formData.price),
        description: formData.description,
        image: formData.image,
        category: formData.category,
        availability: formData.availability,
      });

      setLoading(true);

      const productData = {
        name: validatedData.name,
        price: validatedData.price,
        description: validatedData.description,
        image: validatedData.image,
        category: validatedData.category,
        availability: validatedData.availability,
        original_price: formData.original_price ? parseFloat(formData.original_price) : null,
        featured: formData.featured,
      };

      if (product) {
        const { error } = await supabase
          .from('products')
          .update(productData)
          .eq('id', product.id);

        if (error) throw error;
        toast.success("Product updated successfully!");
      } else {
        const { error } = await supabase
          .from('products')
          .insert([productData]);

        if (error) throw error;
        toast.success("Product created successfully!");
      }

      onClose();
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error("Failed to save product");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Product Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Input
            id="category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="price">Price (KSh)</Label>
          <Input
            id="price"
            type="number"
            step="0.01"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="original_price">Original Price (Optional)</Label>
          <Input
            id="original_price"
            type="number"
            step="0.01"
            value={formData.original_price}
            onChange={(e) => setFormData({ ...formData, original_price: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="availability">Availability</Label>
          <Select
            value={formData.availability}
            onValueChange={(value) => setFormData({ ...formData, availability: value })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="In Stock">In Stock</SelectItem>
              <SelectItem value="Limited Edition">Limited Edition</SelectItem>
              <SelectItem value="Out of Stock">Out of Stock</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="image">Image URL</Label>
          <Input
            id="image"
            type="url"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={4}
          required
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="featured"
          checked={formData.featured}
          onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
        />
        <Label htmlFor="featured">Featured Product</Label>
      </div>

      <div className="flex gap-2 justify-end">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" disabled={loading}>
          {loading ? "Saving..." : product ? "Update Product" : "Create Product"}
        </Button>
      </div>
    </form>
  );
}