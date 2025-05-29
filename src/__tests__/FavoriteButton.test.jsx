import { render, fireEvent } from '@testing-library/react';
import FavoriteButton from '../components/FavoriteButton';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/app/store';

const renderWithProviders = (ui) => {
  return render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>
  );
};

describe('FavoriteButton', () => {
  const product = { id: 1, title: 'Test Product' };

  beforeEach(() => {
    // Reset store state before each test
    store.dispatch({ type: 'favorites/removeFavorite', payload: product.id });
  });

  test('renders "Add to Favorites" when not active', () => {
    const { getByText } = renderWithProviders(<FavoriteButton product={product} />);
   // expect(getByText('AddtoFavorites')).toBeInTheDocument();
  });

  test('renders "Remove from Favorites" when active', () => {
    store.dispatch({ type: 'favorites/addFavorites', payload: product });
    const { getByText } = renderWithProviders(<FavoriteButton product={product} />);
    //expect(getByText('RemovefromFavorites')).toBeInTheDocument();
  });

  test('toggles favorite status on click', () => {
    const { getByRole } = renderWithProviders(<FavoriteButton product={product} />);
    const button = getByRole('button');

    // Initially not favorite
    expect(button.textContent).toBe('Add to Favorites');

    fireEvent.click(button);
    expect(button.textContent).toBe('Remove from Favorites');

    fireEvent.click(button);
    expect(button.textContent).toBe('Add to Favorites');
  });
});
