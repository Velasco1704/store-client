import { BuyNowTypes } from "@interface/buyNowOrder.interface";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateTypes {
  product: BuyNowTypes | null;
}

const initialState: InitialStateTypes = {
  product: null,
};

export const buyNowSlice = createSlice({
  name: "buyNow",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<BuyNowTypes>) => {
      state.product = action.payload;
    },
    resetProduct: (state) => {
      state.product = null;
    },
  },
});

export const { setProduct, resetProduct } = buyNowSlice.actions;
export default buyNowSlice.reducer;
