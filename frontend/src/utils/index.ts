import { ProductItemProps } from "src/components/ProductItem";
import { faker } from "@faker-js/faker";

export function chunk(array: any[], size: number) {
  return array.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(array.slice(i, i + size));

    return acc;
  }, []);
}

export function generateMockProduct(size: number) {
  const products: ProductItemProps["item"][] = [];

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
      category: faker.name.firstName(),
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
