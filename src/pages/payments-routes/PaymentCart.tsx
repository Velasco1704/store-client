import { RootState } from "@app/store";
import { PaymentForm } from "@components/PaymentForm";
import { useSelector } from "react-redux";

export const PaymentCart = () => {
  const { cart } = useSelector((state: RootState) => state.cart);
  return (
    <section>
      <PaymentForm cart={cart} product={null} />
    </section>
  );
};
