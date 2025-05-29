import productsReducer, { fetchProducts } from '../redux/slices/products/productsSlice';
import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

describe('productsSlice async', () => {
  it('fetchProducts should load products successfully', async () => {
    const products = [{ id: 1, title: 'Mock Product' }];
    mock.onGet('https://fakestoreapi.com/products').reply(200, products);

    const store = configureStore({
      reducer: {
        products: productsReducer
      },
    });

    await store.dispatch(fetchProducts());

    const state = store.getState();
    expect(state.products.items).toEqual(products);
    expect(state.products.status).toBe('succeeded');
  });
});
