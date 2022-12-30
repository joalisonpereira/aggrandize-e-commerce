import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Container, ContainerProps, METRICS } from "./styles";

export interface ProductItemProps extends ContainerProps {
  item: {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  };
}

function ProductItem({ item }: ProductItemProps) {
  return (
    <Container>
      <Image
        src={item.thumbnail}
        width={METRICS.width}
        height={METRICS.height}
        alt={item.title}
      />
      <button className="star">
        <FaStar />
      </button>
      <div className="legend">
        <h3>{item.title}</h3>
        <p>$ {item.price}</p>
      </div>
    </Container>
  );
}

export default ProductItem;
