import { CartTypes } from "@interface/cart.interface";
import { OrderTypes } from "@interface/order.interface";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateTypes {
  cart: CartTypes[];
}

const initialState: InitialStateTypes = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<OrderTypes[]>) => {
      state.cart = [...action.payload];
    },
    deleteOrder: (state, action: PayloadAction<string>) => {
      const findIndex = state.cart.findIndex(
        (order) => order.id === action.payload
      );
      state.cart.splice(findIndex, 1)[0];
    },
    resetCart: (state) => {
      state.cart = [];
    },
  },
});

export const { setCart, deleteOrder, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
