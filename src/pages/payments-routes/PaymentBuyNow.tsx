import { RootState } from "@app/store";
import { PaymentForm } from "@components/PaymentForm";
import { useSelector } from "react-redux";

export const PaymentBuyNow = () => {
  const { product } = useSelector((state: RootState) => state.product);
  return (
    <section>
      <PaymentForm cart={null} product={product} />
    </section>
  );
};
