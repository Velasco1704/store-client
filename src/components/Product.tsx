import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "@api/apiSlice";
import { useDispatch } from "react-redux";
import { setCart } from "@features/cartSlice";
import { RootState } from "@app/store";
import { useSelector } from "react-redux";
import { setProduct } from "@features/buyNowSlice";
import styles from "@styles/Product.module.scss";
import { Loader } from "./Loader";

export const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector((state: RootState) => state.cart);
  const [amount, setAmount] = useState(1);
  const { id: productId } = useParams();
  const { data: product } = useGetProductByIdQuery(productId ?? "");
  const findOrder = cart.find((order) => order.id === product?.id);
  const handleAddToCart = () => {
    if (!findOrder) {
      const newOrder = {
        id: product?.id ?? "",
        name: product?.name ?? "",
        image: product?.image ?? "",
        price: product?.price ?? 0,
        amount,
      };
      dispatch(setCart([...cart, newOrder]));
      navigate("/");
    }
  };

  const handleBuyNow = (id: string, price: number) => {
    dispatch(setProduct({ id, price, amount: 1 }));
    navigate("/payment-buy-now");
  };
  if (product === undefined) {
    return (
      <div className={styles.product__loader__container}>
        <Loader />;
      </div>
    );
  } else {
    return (
      <>
        <section className={styles.product__section}>
          <img
            className={styles.product__section__img}
            src={product?.image}
            alt={product?.name}
          />
          <div className={styles.product__section__info}>
            <h1 className={styles.product__section__info__h1}>
              {product?.name}
            </h1>
            <div className={styles.product__section__info__product}>
              <p className={styles.product__section__info__product__price}>
                {product.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              <div>
                <div className={styles.product__section__info__product__amount}>
                  <label
                    className={
                      styles.product__section__info__product__amount__label
                    }
                  >
                    Amount
                  </label>
                  <span
                    className={
                      styles.product__section__info__product__amount__span
                    }
                  >
                    (Available {product?.stock})
                  </span>
                </div>
                <input
                  onChange={({ target }) => setAmount(+target.value)}
                  className={
                    styles.product__section__info__product__input__amount
                  }
                  type="number"
                />
              </div>
            </div>
            <div className={styles.product__section__info__buttons}>
              <button
                onClick={() =>
                  handleBuyNow(product?.id ?? "", product?.price ?? 0)
                }
                className={`${styles.product__section__info__button} ${styles.product__section__info__buy__now__button}`}
              >
                Buy Now
              </button>
              <button
                disabled={amount > (product?.stock ?? 0) || !!findOrder}
                onClick={handleAddToCart}
                className={`${styles.product__section__info__button} ${styles.product__section__info__add__to__cart__button}`}
              >
                Add to Card
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }
};
