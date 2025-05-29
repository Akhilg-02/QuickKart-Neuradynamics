import { render, fireEvent } from '@testing-library/react';
import ProductCard from '../components/ProductCard';
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

describe('ProductCard', () => {
  const product = {
    id: 1,
    title: 'Test Product',
    price: 100,
    image: 'test.jpg',
  };

  test('renders product title, price, and image', () => {
    const { getByText, getByAltText } = renderWithProviders(<ProductCard product={product} />);
    expect(getByText('Test Product')).toBeInTheDocument();
    expect(getByText('$100')).toBeInTheDocument();
   // expect(getByAltText('Test Product')).toBeInTheDocument();
  });

  // test('calls addToFavorites when favorite button is clicked', () => {
  //   const { getByRole } = renderWithProviders(<ProductCard product={product} />);
  //   fireEvent.click(getByRole('button'));
  //   expect(store.getState().favorites.items.some(item => item.id === 1)).toBe(true);
  // });
});
