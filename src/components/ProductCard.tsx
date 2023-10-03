import { ProductTypes } from "@interface/products.interface";
import { useNavigate } from "react-router-dom";
import styles from "@styles/ProductCard.module.scss";

export const ProductCard = ({ product }: { product: ProductTypes }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/product-details/${product.id}`)}
      className={styles.productCard__list__card}
      key={product.id}
    >
      <img
        className={styles.productCard__list__card__img}
        src={product.image}
        alt={product.name}
      />
      <div className={styles.productCard__list__card__info}>
        <h3 className={styles.productCard__list__card__name}>{product.name}</h3>
        <p className={styles.productCard__list__card__p}>
          {product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      </div>
    </div>
  );
};
