import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../slices/products/productsSlice';
import filtersReducer from '../slices/filters/filtersSlice';
import favoritesReducer from '../slices/favorites/favoritesSlice';

// Configure the Redux store with product, filter and favorites reducers
const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
    favorites: favoritesReducer,
  },
});

export default store;
