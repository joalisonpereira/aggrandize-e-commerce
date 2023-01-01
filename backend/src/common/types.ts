import { PRODUCT_CATEGORIES } from "src/common/constants";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: ProductType;
  thumbnail: string;
  images: string[];
}

export type ProductType = typeof PRODUCT_CATEGORIES[number];

export type NormalizedProduct = Pick<
  Product,
  | "id"
  | "thumbnail"
  | "title"
  | "price"
  | "category"
  | "discountPercentage"
  | "rating"
> & { priceWithDiscount: number };
