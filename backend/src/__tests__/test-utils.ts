import { faker } from "@faker-js/faker";
import { PRODUCT_CATEGORIES } from "src/common/constants";
import { NormalizedProduct, Product } from "src/common/types";

export function generateMockNormalizedProduct(size: number) {
  const products: NormalizedProduct[] = [];

  for (let i = 0; i < size; i++) {
    products.push({
      id: i,
      title: faker.name.firstName(),
      price: Number(faker.random.numeric()),
      discountPercentage: Number(faker.random.numeric()),
      category: PRODUCT_CATEGORIES[0],
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      priceWithDiscount: Number(faker.random.numeric()),
      rating: Math.min(5, Number(faker.random.numeric(1))),
    });
  }

  return products;
}

export function generateMockProduct(size: number) {
  const products: Product[] = [];

  for (let i = 0; i < size; i++) {
    products.push({
      id: i,
      title: faker.name.firstName(),
      description: faker.lorem.sentence(),
      price: Number(faker.random.numeric()),
      discountPercentage: Number(faker.random.numeric()),
      rating: Number(faker.random.numeric()),
      stock: Number(faker.random.numeric()),
      brand: faker.name.firstName(),
      category: PRODUCT_CATEGORIES[2],
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    });
  }

  return products;
}
