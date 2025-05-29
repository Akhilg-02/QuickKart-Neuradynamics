import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/slices/favorites/favoritesSlice';
import { Heart } from 'lucide-react';

const FavoriteButton = ({ product }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const isFavorited = favorites.some((item) => item.id === product.id);

  const handleClick = () => {
    if (isFavorited) {
      dispatch(removeFavorite(product.id));
    } else {
      dispatch(addFavorite(product));
    }
  };

  return (
    <button
      aria-label="Add to Favorites"
      onClick={handleClick}
      className={`px-4 py-2.5 rounded-lg font-medium text-sm w-full sm:w-auto transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg ${isFavorited
        ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white'
        : 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white'
        }`}
    >
      <span className="flex items-center justify-center gap-2">
        {isFavorited ? (
          <>
            <Heart className="w-4 h-4" />
            Remove from Favorites
          </>
        ) : (
          <>
            <Heart className="w-4 h-4" />
            Add to Favorites
          </>
        )}
      </span>
    </button>
  );
};

export default FavoriteButton;





