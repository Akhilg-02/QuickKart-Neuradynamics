import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/products/productsSlice';
import ProductCard from '../components/ProductCard';
import FilterBar from '../components/FilterBar';
import { TriangleAlert, Search } from 'lucide-react';


const ProductList = () => {
    const dispatch = useDispatch();
    const { items, status, error } = useSelector((state) => state.products);
    const filters = useSelector((state) => state.filters);
    // Apply filters before rendering
    const filteredProducts = items
        .filter((product) =>
            product.title.toLowerCase().includes(filters.searchQuery.toLowerCase())
        )
        .filter((product) =>
            filters.category === 'all' ? true : product.category === filters.category
        )
        .sort((a, b) => {
            if (filters.sortOrder === 'lowToHigh') return a.price - b.price;
            if (filters.sortOrder === 'highToLow') return b.price - a.price;
            return 0;
        });

    // Fetch products on component mount
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);


    // Show loading state
    if (status === 'loading') {
        return (
            <div className="flex flex-col items-center justify-center min-h-96 space-y-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                <p className="text-lg text-gray-600 font-medium">Loading amazing products...</p>
            </div>
        );
    }

    // Show error if fetching failed
    if (status === 'failed') {
        return (
            <div className="flex flex-col items-center justify-center min-h-96 space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md text-center">
                    <TriangleAlert className="w-12 h-12 text-red-500 mx-auto mb-4" />
                    <p className="text-red-600 font-medium">Oops! Something went wrong</p>
                    <p className="text-red-500 text-sm mt-2">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    Discover Amazing Products
                </h1>
                <p className="text-gray-600 text-lg">
                    Find everything you need in our curated collection
                </p>
            </div>

            {/* Filter Bar */}
            <FilterBar />

            {/* Results Counter */}
            <div className="mb-6">
                <p className="text-gray-600 font-medium">
                    Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </p>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
                <div className="text-center py-16">
                    <div className="bg-gray-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                        <Search className="w-12 h-12 text-gray-400" fill="none" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
                    <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                </div>
            ) : (
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductList;

