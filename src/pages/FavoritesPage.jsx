import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { Heart, Search } from 'lucide-react';

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-3">
          <Heart className="w-10 h-10 text-red-500" fill="currentColor" viewBox="0 0 23 23" />
          Your Favorites
        </h1>
        <p className="text-gray-600 text-lg">
          {favorites.length > 0
            ? `You have ${favorites.length} favorite ${favorites.length === 1 ? 'product' : 'products'}`
            : 'Start adding products to your favorites'
          }
        </p>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-16">
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-16 h-16 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">No favorites yet</h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Discover amazing products and add them to your favorites to keep track of items you love.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            <Search className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" />
            Explore Products
          </a>
        </div>
      ) : (
        <>
          {/* Stats Card */}
          <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-xl text-white p-6 mb-8 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-1">
                  {favorites.length} Favorite{favorites.length !== 1 ? 's' : ''}
                </h2>
                <p className="text-red-100">
                  Keep shopping and find more amazing products!
                </p>
              </div>
              <div className="bg-white/20 rounded-full p-3">
                <Heart className="w-8 h-8" fill="currentColor" viewBox="0 0 23 23" />
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {favorites.map((product) => (
              <ProductCard key={product.id} product={product} showFavoriteButton />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FavoritesPage;