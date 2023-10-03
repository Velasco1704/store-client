import { Nav } from "@components/Nav";
import { ProductsList } from "@components/ProductsList";

export const Home = () => {
  return (
    <>
      <Nav />
      <main>
        <ProductsList />
      </main>
    </>
  );
};
