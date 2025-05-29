import favoritesReducer, { addFavorite, removeFavorite } from '../redux/slices/favorites/favoritesSlice';

describe('favoritesSlice', () => {
  const product = { id: 1, title: 'Test Product' };

  it('should add product to favorites', () => {
    const state = favoritesReducer([], addFavorite(product));
    expect(state).toContainEqual(product);
  });

  it('should remove product from favorites', () => {
    const state = favoritesReducer([product], removeFavorite(product.id));
    expect(state).not.toContainEqual(product);
  });
});
