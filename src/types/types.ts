export type ProductCategory = "Chair" | "Beds" | "Sofa" | "Lamp";

export interface Product {
  id: number;
  name: string;
  price: number;
  category: ProductCategory;
  image: string;
  rating: number;
}

export interface TestimonialCardProps {
  name: string;
  title: string;
  quote: string;
  rating: number; // 0-5
  profileImage: string;
  backgroundImage: string;
}
