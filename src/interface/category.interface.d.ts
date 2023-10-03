import { ProductTypes } from "./products.interface";

export interface CategoryTypes {
  id: string;
  name: string;
  products: ProductTypes[];
}
