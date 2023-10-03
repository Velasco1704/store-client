import { CategoryTypes } from "@interface/category.interface";
import { CreateNewOrderTypes } from "@interface/createNewOrder.interface";
import { ProductTypes } from "@interface/products.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://store-server-iii2.onrender.com",
  }),
  tagTypes: ["Product", "Category"],
  endpoints: (builder) => ({
    //Categories
    getCategories: builder.query<CategoryTypes[], undefined>({
      query: () => "/categories",
      transformResponse: (response: { result: CategoryTypes[] }) =>
        response.result,
      providesTags: ["Category"],
    }),
    //Products
    getProducts: builder.query<ProductTypes[], string>({
      query: (id) => (id === "" ? "/products" : `/products-by-category/${id}`),
      transformResponse: (response: { result: ProductTypes[] }) =>
        response.result,
      providesTags: ["Product"],
    }),
    getProductById: builder.query<ProductTypes, string>({
      query: (id) => `/product/${id}`,
      transformResponse: (response: { result: ProductTypes }) =>
        response.result,
      providesTags: ["Product"],
    }),
    // CreateOrder
    newOrder: builder.mutation({
      query: (payload: CreateNewOrderTypes) => ({
        url: "/create-order",
        method: "POST",
        body: {
          amount: payload.amount,
          order: {
            name: payload.order.name,
            lastName: payload.order.lastName,
            email: payload.order.email,
            address: payload.order.address,
            products: payload.order.products,
          },
        },
      }),
    }),
  }),
});
export const {
  //Categories
  useGetCategoriesQuery,
  //Products
  useGetProductsQuery,
  useGetProductByIdQuery,
  //CreateOrder
  useNewOrderMutation,
} = apiSlice;
