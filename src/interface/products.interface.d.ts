export interface ProductTypes {
  id: string;
  name: string;
  price: number;
  stock: number;
  image: string;
  categoryId: string;
  category: {
    id: string;
    name: string;
  };
}
