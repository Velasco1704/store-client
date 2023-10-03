import { useNavigate } from "react-router-dom";
import styles from "@styles/NotFound.module.scss";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.notFound__container}>
      <div className={styles.notFound__404}>
        <h1>404</h1>
        <p>
          <span>Whoops!!</span> You should go back to the Menu
        </p>
      </div>
      <button className={styles.notFound__button} onClick={() => navigate("/")}>
        Back
      </button>
    </section>
  );
};
