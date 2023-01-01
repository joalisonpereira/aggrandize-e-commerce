import Image from "next/image";
import { FaStar } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
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
    rating: number;
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
      <button
        onClick={() => onFavorite(item.id)}
        className="star"
        data-testid="star-btn"
      >
        <FaStar />
      </button>
      <div className="legend">
        <h3>{item.title}</h3>
        <div title={String(item.rating)}>
          <ReactStars
            count={5}
            onChange={() => {}}
            size={24}
            value={item.rating}
            isHalf={true}
            activeColor="#ffd700"
            edit={false}
          />
        </div>
        <p className="original">De: $ {item.price}</p>
        <p className="discount">
          Por: <span>$ {item.priceWithDiscount}</span>
        </p>
      </div>
    </Container>
  );
}

export default ProductItem;
