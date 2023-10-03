import { useEffect, useState } from "react";
import { useNewOrderMutation } from "@api/apiSlice";
import { useDispatch } from "react-redux";
import { resetCart } from "@features/cartSlice";
import { CartTypes } from "@interface/cart.interface";
import { BuyNowTypes } from "@interface/buyNowOrder.interface";
import { Loader } from "./Loader";
import { PiWarningCircleBold } from "react-icons/pi";
import { resetProduct } from "@features/buyNowSlice";
import { useNavigate } from "react-router-dom";
import styles from "@styles/PaymentForm.module.scss";

export const PaymentForm = ({
  cart,
  product,
}: {
  cart: CartTypes[] | null;
  product: BuyNowTypes | null;
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newOrder, { data, isSuccess, isError, isLoading }] =
    useNewOrderMutation();
  const [form, setFormState] = useState({
    name: "",
    lastName: "",
    email: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormState({ ...form, [e.target.name]: e.target.value });

  const handleSubmitProduct = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (product) {
      newOrder({
        amount: product.price,
        order: {
          name: form.name,
          lastName: form.lastName,
          email: form.email,
          address: form.email,
          products: [{ id: product.id, amount: product.amount }],
        },
      });
    }
  };

  const handleSubmitCart = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (cart) {
      const ordersList = cart.map((order) => ({
        id: order.id,
        amount: order.amount,
      }));

      const totalPrice = cart
        .map((item) => item.amount * item.price)
        .reduce((a, b) => a + b, 0);

      newOrder({
        amount: totalPrice,
        order: {
          name: form.name,
          lastName: form.lastName,
          email: form.email,
          address: form.email,
          products: ordersList,
        },
      });
    }
  };

  useEffect(() => {
    if (isSuccess && !isError) {
      window.location.replace(data.paymentLink);
      dispatch(resetCart());
      dispatch(resetProduct());
    }
  }, [cart, data, dispatch, isError, isSuccess]);

  return (
    <div className={styles.paymentFor__container}>
      <h1 className={styles.paymentFor__container__h1}>
        Complete your{" "}
        <span className={styles.paymentFor__container__h1__span}>Purchase</span>
      </h1>
      <form
        className={styles.paymentForm__form}
        onSubmit={cart ? handleSubmitCart : handleSubmitProduct}
      >
        <input
          required
          className={styles.paymentForm__inputs}
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="Name"
        />
        <input
          required
          className={styles.paymentForm__inputs}
          onChange={handleChange}
          name="lastName"
          type="text"
          placeholder="Last Name"
        />
        <input
          required
          className={styles.paymentForm__inputs}
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Email"
        />
        <textarea
          required
          className={`${styles.paymentForm__inputs} ${styles.paymentForm__textarea}`}
          onChange={handleChange}
          name="address"
          cols={20}
          rows={5}
          placeholder="Address"
        />
        <button
          className={`${styles.paymentForm__button} ${styles.paymentForm__submit__button}`}
          type="submit"
        >
          {!isLoading ? "Submit" : <Loader />}
        </button>
        <button
          onClick={() => navigate("/")}
          className={`${styles.paymentForm__button} ${styles.paymentForm__cancel__button}`}
        >
          Cancel
        </button>
      </form>
      {isError && (
        <h3 className={styles.paymentFor__container__error__h3}>
          <span className={styles.paymentFor__container__error__h3__icon}>
            <PiWarningCircleBold />
          </span>
          Error
        </h3>
      )}
    </div>
  );
};
