export interface CreateNewOrderTypes {
  amount: number;
  order: {
    name: string;
    lastName: string;
    email: string;
    address: string;
    products: { id: string; amount: number }[];
  };
}
