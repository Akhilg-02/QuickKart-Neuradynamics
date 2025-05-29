import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      // Add to favorites if not already there
      const exists = state.find((item) => item.id === action.payload.id);
      if (!exists) state.push(action.payload);
    },
    removeFavorite: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;

