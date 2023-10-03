import styles from "@styles/MessagePayment.module.scss";
import { useNavigate } from "react-router-dom";

export const MessagePayment = ({ text }: { text: string }) => {
  const navigate = useNavigate();
  return (
    <section className={styles.messagePayment__section}>
      <h1 className={styles.messagePayment__section__h1}>{text}</h1>
      <button
        className={styles.messagePayment__section__button}
        onClick={() => navigate("/")}
      >
        Back to the Menu
      </button>
    </section>
  );
};
