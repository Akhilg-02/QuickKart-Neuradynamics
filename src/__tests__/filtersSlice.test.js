import filtersReducer, { setSearchQuery, setCategory, setSortOrder } from '../redux/slices/filters/filtersSlice';

describe('filtersSlice', () => {
  const initialState = {
    searchQuery: '',
    category: 'all',
    sortOrder: '',
  };

  it('should return the initial state', () => {
    expect(filtersReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle setSearchQuery', () => {
    const nextState = filtersReducer(initialState, setSearchQuery('shirt'));
    expect(nextState.searchQuery).toBe('shirt');
  });

  it('should handle setCategory', () => {
    const nextState = filtersReducer(initialState, setCategory('electronics'));
    expect(nextState.category).toBe('electronics');
  });

  it('should handle setSortOrder', () => {
    const nextState = filtersReducer(initialState, setSortOrder('lowToHigh'));
    expect(nextState.sortOrder).toBe('lowToHigh');
  });
});
