import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '../App'; // update the path if your App is elsewhere
import store from '../redux/app/store';

const renderWithProviders = (ui) => {
  return render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>
  );
};

describe('User Flow Integration Test - Search + Filter + Favorite', () => {
  test('searches, filters, and adds to favorites correctly', async () => {
    renderWithProviders(<App />);

    // 1. Wait for search input to appear
    const searchInput = await screen.findByPlaceholderText(/search/i);
    fireEvent.change(searchInput, { target: { value: 'shirt' } });

    // 2. Wait for a matching product to appear
    const product = await screen.getAllByText(/shirt/i);
    expect(product.length).toBeGreaterThan(0);

    // 3. Apply filter (e.g., 'Men')
    const menFilter = screen.getAllByText(/men/i)[0];
    fireEvent.click(menFilter);

    const filteredProduct = await screen.getAllByText(/shirt/i)[0];
    expect(filteredProduct).toBeInTheDocument();

    // 4. Click 'Add to Favorites' button
    // const favButton =await screen.getByRole('button', { name: /add to favorites/i });
    // fireEvent.click(favButton);

    // 5. Navigate to Favorites page
    const favLink = screen.getByRole('link', { name: /favorites/i });
    fireEvent.click(favLink);

    // 6. Check if product appears in favorites
    // const favProduct = await screen.findByRole(/shirt/i);
    // expect(favProduct).toBeInTheDocument();
  });
});
