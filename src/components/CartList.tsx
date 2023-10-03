import { useNavigate } from "react-router-dom";
import { RootState } from "@app/store";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder } from "@features/cartSlice";
import { BsTrash3Fill } from "react-icons/bs";
import styles from "@styles/CartList.module.scss";

export const CartList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector((state: RootState) => state.cart);
  const handleDeleteOrder = (id: string) => {
    dispatch(deleteOrder(id));
  };

  const totalPrice = cart
    .map((item) => item.amount * item.price)
    .reduce((a, b) => a + b, 0);

  return (
    <>
      <section className={styles.cart__section}>
        <h1 className={styles.cart__section__h1}>Shipping List</h1>
        <ul className={styles.cart__section__ul}>
          {cart.length === 0 ? (
            <p className={styles.cart__section__ul__p}>
              You don`t have products in the{" "}
              <span className={styles.cart__section__ul__p__span}>Cart</span>
            </p>
          ) : (
            cart.map((order) => (
              <li className={styles.cart__section__li} key={order.id}>
                <div className={styles.cart__section__li__header}>
                  <img
                    className={styles.cart__section__li__header__img}
                    src={order.image}
                    alt={order.name}
                  />
                  <p className={styles.cart__section__li__header__p}>
                    {order.name} x {order.amount}
                  </p>
                </div>
                <div className={styles.cart__section__li__info}>
                  <p className={styles.cart__section__li__info__p}>
                    UNI/ ${order.price}
                  </p>
                  <button
                    className={styles.cart__section__li__info__delete__button}
                    onClick={() => handleDeleteOrder(order.id)}
                  >
                    <BsTrash3Fill />
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
        <div className={styles.cart__section__totalPrice}>
          <div className={styles.cart__section__totalPrice__info}>
            <p className={styles.cart__section__totalPrice__info__p}>
              Total Price:
            </p>
            <p className={styles.cart__section__totalPrice__info__amount__p}>
              $ {totalPrice}
            </p>
          </div>
          {cart.length !== 0 && (
            <button
              onClick={() => navigate("/payment-cart")}
              className={styles.cart__section__totalPrice__button__pay}
            >
              Pay
            </button>
          )}
        </div>
      </section>
    </>
  );
};
