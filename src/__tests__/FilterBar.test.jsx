import { render, fireEvent, getAllByLabelText } from '@testing-library/react';
import FilterBar from '../components/FilterBar';
import { Provider } from 'react-redux';
import store from '../redux/app/store';

const renderWithProvider = (ui) => {
  return render(<Provider store={store}>{ui}</Provider>);
};

describe('FilterBar', () => {
  test('renders category options', () => {
    const { getByPlaceholderText } = renderWithProvider(<FilterBar />);
    expect(getByPlaceholderText('Search')).toBeInTheDocument();
  });

  test('calls onFilterChange when a one category is clicked', () => {
    const { getByLabelText } = renderWithProvider(<FilterBar />);
    //const selectCategory = getByLabelText("All Categories");
    // fireEvent.click(selectCategory);
    // expect(selectCategory).toBe(true);
  });
});

