import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// Thunk to fetch products from the Fake Store API
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data; // Return the products array
  }
);

// Initial state for products
const initialState = {
  items: [],
  status: 'idle', // idle | loading | succeeded | failed
  error: null,
};

// Slice for products
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // When fetching starts, set status to loading
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      // When fetching succeeds, store products and set status
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      // When fetching fails, store error
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
