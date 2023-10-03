import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { CartList } from "@components/CartList";
import styles from "@styles/Cart.module.scss";

export const Cart = () => {
  const navigate = useNavigate();
  const refSpan = useRef<HTMLSpanElement>(null);

  const backArrowIn = () =>
    refSpan.current?.classList.add(`${styles.cart__back__button__span__in}`);
  const backArrowOut = () =>
    refSpan.current?.classList.remove(`${styles.cart__back__button__span__in}`);

  return (
    <section className={styles.cart__section}>
      <button
        onClick={() => navigate("/")}
        onMouseEnter={backArrowIn}
        onMouseLeave={backArrowOut}
        className={styles.cart__back__button}
      >
        back
        <span ref={refSpan} className={styles.cart__back__button__span}>
          <RxDoubleArrowLeft />
        </span>
      </button>
      <CartList />
    </section>
  );
};
