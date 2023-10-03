import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { LuMenu } from "react-icons/lu";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@app/store";
import styles from "@styles/Nav.module.scss";

export const Nav = () => {
  const { cart } = useSelector((state: RootState) => state.cart);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className={styles.nav__header}>
      <h1 className={styles.nav__header__h1}>
        <span className={styles.nav__header__h1__span}>My</span>Store
      </h1>

      <button
        className={styles.nav__header__button__open__menu}
        onClick={() => setOpenMenu(true)}
      >
        <LuMenu />
      </button>

      <div
        className={`${styles.nav__header__container__menu} ${
          openMenu
            ? styles.nav__header__open__menu
            : styles.nav__header__close__menu
        }`}
      >
        <nav className={styles.nav__header__nav}>
          <Link className={styles.nav__header__nav__link} to="/">
            Home
          </Link>
          <Link className={styles.nav__header__nav__link__cart} to="/cart">
            <BsCart />
            {cart.length !== 0 && (
              <span className={styles.nav__header__nav__link__span}>
                {cart.length}
              </span>
            )}
          </Link>
          <button
            className={styles.nav__header__nav__close__button}
            onClick={() => setOpenMenu(false)}
          >
            <GrClose />
          </button>
        </nav>
      </div>
    </header>
  );
};
