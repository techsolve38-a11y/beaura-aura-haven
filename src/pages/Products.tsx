import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { ProductCategory } from "@/types/product";
import { Filter, Grid, List } from "lucide-react";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "All">("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories: (ProductCategory | "All")[] = [
    "All",
    "Jewelry",
    "Perfumes & Fragrances",
    "Bags",
    "Women's Wear",
    "Accessories",
    "Home Essentials"
  ];

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const categoryCount = (category: ProductCategory | "All") => {
    return category === "All" 
      ? products.length 
      : products.filter(p => p.category === category).length;
  };

  return (
    <div className="min-h-screen bg-gradient-elegant">
      {/* Header */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h1 className="text-display text-4xl md:text-5xl font-bold mb-6 text-gradient-luxury">
              BEAURA Collection
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our exclusive collection of luxury goods. Each piece is carefully curated for its exceptional quality and timeless elegance.
            </p>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            {/* Category Filter */}
            <div className="flex-1">
              <Tabs value={selectedCategory} onValueChange={(value) => setSelectedCategory(value as ProductCategory | "All")}>
                <TabsList className="grid grid-cols-3 lg:grid-cols-7 w-full">
                  {categories.map((category) => (
                    <TabsTrigger 
                      key={category} 
                      value={category}
                      className="text-xs lg:text-sm"
                    >
                      {category}
                      <Badge variant="secondary" className="ml-1 lg:ml-2 text-xs">
                        {categoryCount(category)}
                      </Badge>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* View Toggle */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className={`grid gap-8 ${
              viewMode === "grid" 
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                : "grid-cols-1 lg:grid-cols-2"
            }`}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-muted-foreground text-lg mb-4">
                No products found in this category
              </div>
              <Button
                variant="outline"
                onClick={() => setSelectedCategory("All")}
              >
                View All Products
              </Button>
            </div>
          )}

          {/* Featured Products Section */}
          {selectedCategory === "All" && (
            <div className="mt-20">
              <div className="card-elegant p-8 text-center">
                <h3 className="text-display text-2xl font-bold mb-4 text-gradient-luxury">
                  Featured Collection
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Hand-picked pieces from our most coveted collections, featuring exceptional craftsmanship and timeless design.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                  {products.filter(p => p.featured).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;