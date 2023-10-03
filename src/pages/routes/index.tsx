import { NotFound } from "@pages/NotFound";
import { Home } from "../Home";
import { ProductDetails } from "@pages/ProductDetails";
import { Cart } from "@pages/Cart";
import { PaymentCart } from "@pages/payments-routes/PaymentCart";
import { PaymentBuyNow } from "@pages/payments-routes/PaymentBuyNow";
import { PaymentSuccess } from "@pages/payments-routes/PaymentSuccess";
import { PaymentCanceled } from "@pages/payments-routes/PaymentCanceled";
import { PaymentReject } from "@pages/payments-routes/PaymentReject";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product-details/:id",
    element: <ProductDetails />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/payment-cart",
    element: <PaymentCart />,
  },
  {
    path: "/payment-buy-now",
    element: <PaymentBuyNow />,
  },
  {
    path: "/payment-success",
    element: <PaymentSuccess />,
  },
  {
    path: "/payment-canceled",
    element: <PaymentCanceled />,
  },
  {
    path: "/payment-reject",
    element: <PaymentReject />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
