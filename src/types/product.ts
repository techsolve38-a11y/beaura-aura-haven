export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  availability: "In Stock" | "Limited Edition" | "Out of Stock";
  featured?: boolean;
}

export type ProductCategory = 
  | "Jewelry"
  | "Perfumes & Fragrances"
  | "Bags"
  | "Women's Wear"
  | "Accessories"
  | "Home Essentials";