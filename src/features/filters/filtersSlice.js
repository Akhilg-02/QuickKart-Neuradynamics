import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchQuery: '',
  category: 'all',
  sortOrder: '', // 'lowToHigh' or 'highToLow'
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
});

export const { setSearchQuery, setCategory, setSortOrder } = filtersSlice.actions;
export default filtersSlice.reducer;
