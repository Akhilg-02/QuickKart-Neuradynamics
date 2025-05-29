import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery, setCategory, setSortOrder } from '../redux/slices/filters/filtersSlice';
import { Search, ChevronDown } from 'lucide-react';

const FilterBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  // Debounce search input
  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setSearchQuery(searchTerm));
    }, 500);
    return () => clearTimeout(timeout);
  }, [searchTerm, dispatch]);

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        {/* Search Input */}
        <div className="relative flex-1 w-full lg:max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Category Filter */}
        <div className="relative w-full lg:w-auto">
          <select
            className="w-full lg:w-48 px-4 py-3 pr-8 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white appearance-none cursor-pointer"
            onChange={(e) => dispatch(setCategory(e.target.value))}
          >
            <option value="all">All Categories</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Sort Filter */}
        <div className="relative w-full lg:w-auto">
          <select
            className="w-full lg:w-48 px-4 py-3 pr-8 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white appearance-none cursor-pointer"
            onChange={(e) => dispatch(setSortOrder(e.target.value))}
          >
            <option value="">Sort By Price</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;


