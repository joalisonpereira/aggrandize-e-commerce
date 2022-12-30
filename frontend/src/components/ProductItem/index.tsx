import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Container, ContainerProps, METRICS } from "./styles";

export interface ProductItemProps extends ContainerProps {
  item: {
    id: number;
    thumbnail: string;
    title: string;
    price: number;
    category: string;
    discountPercentage: number;
    stock: number;
    priceWithDiscount: number;
  };
  onFavorite: (id: number) => void;
  isFavorited: boolean;
}

function ProductItem({ item, onFavorite, isFavorited }: ProductItemProps) {
  return (
    <Container isFavorited={isFavorited}>
      <Image
        src={item.thumbnail}
        width={METRICS.width}
        height={METRICS.height}
        alt={item.title}
      />
      <button onClick={() => onFavorite(item.id)} className="star">
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
