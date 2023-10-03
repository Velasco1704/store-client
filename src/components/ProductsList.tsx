import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineClose } from "react-icons/ai";
import { ProductCard } from "./ProductCard";
import { useGetCategoriesQuery, useGetProductsQuery } from "@api/apiSlice";
import { Loader } from "./Loader";
import styles from "@styles/ProductsList.module.scss";

export const ProductsList = () => {
  const [categorySelected, setCategorySelected] = useState("");
  const [openMenu, setOpenMenu] = useState(false);

  const { data: categoriesList, isLoading: isLoadingCategories } =
    useGetCategoriesQuery(undefined);
  const { data: productsList, isLoading: isLoadingProducts } =
    useGetProductsQuery(categorySelected);

  if (isLoadingProducts || isLoadingCategories) {
    return (
      <div className={styles.productList__loader__container}>
        <Loader />
      </div>
    );
  } else {
    return (
      <section className={styles.productList__section}>
        <div className={styles.productList__section__filter}>
          <div
            onClick={() => setOpenMenu(!openMenu)}
            className={styles.productList__filter__drop__menu}
          >
            <span className={styles.productList__filter__drop__menu__text}>
              Categories
            </span>
            <span className={styles.productList__filter__drop__menu__icon}>
              {openMenu ? <AiOutlineClose /> : <AiOutlineArrowDown />}
            </span>
          </div>
          <ul
            className={`${styles.productList__filter__menu} ${
              openMenu && styles.productList__filter__open__menu
            }`}
          >
            <li
              className={styles.productList__filter__menu__option}
              onClick={() => {
                setCategorySelected("");
                setOpenMenu(false);
              }}
            >
              All
            </li>
            {categoriesList?.map((category) => (
              <li
                className={styles.productList__filter__menu__option}
                onClick={() => {
                  setCategorySelected(category.id);
                  setOpenMenu(false);
                }}
                key={category.id}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        {productsList?.length === 0 ? (
          <div className={styles.productList__section__no__list}>
            <h1 className={styles.productList__section__no__list__h1}>
              There are not{" "}
              <span className={styles.productList__section__no__list__h1__span}>
                Products
              </span>
            </h1>
          </div>
        ) : (
          <div className={styles.productList__section__list}>
            {productsList?.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        )}
      </section>
    );
  }
};
