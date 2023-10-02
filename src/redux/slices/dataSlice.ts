import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: IData = {
  loading: true,
  data: [],
  error: false,
  cart: [],
  likedProducts: [],
};

export const getProducts = createAsyncThunk("getData", async () => {
  try {
    const response = await axios.get(
      "https://honey-badgers-ecommerce.glitch.me/products"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    deleteCart: (state, action) => {
      const removedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removedCart;
    },
    likeProduct: (state, action) => {
      state.likedProducts = [...state.likedProducts, action.payload];
    },
    unlikeProduct: (state, action) => {
      const unlikedProduct = state.likedProducts.filter(
        (item) => item.id !== action.payload
      );
      state.likedProducts = unlikedProduct;
    },
    sortData: (state, action) => {
      let sortedData: IProducts["card"] = [];
      if (action.payload === "asc") {
        sortedData = (state.data as IData["data"]).sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
      } else if (action.payload === "desc") {
        sortedData = (state.data as IData["data"]).sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
      }
      state.data = sortedData;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.error = true;
      });
  },
});

export const { addCart, deleteCart, likeProduct, unlikeProduct, sortData } =
  dataSlice.actions;

export const selectCount = (state: RootState) => state;

export default dataSlice.reducer;
