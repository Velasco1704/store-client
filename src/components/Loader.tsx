import styles from "@styles/Loader.module.scss";

export const Loader = () => {
  return (
    <div className={styles.loader__container}>
      <div className={styles.loader__dot}></div>
      <div className={styles.loader__dot}></div>
      <div className={styles.loader__dot}></div>
      <div className={styles.loader__dot}></div>
      <div className={styles.loader__dot}></div>
    </div>
  );
};
