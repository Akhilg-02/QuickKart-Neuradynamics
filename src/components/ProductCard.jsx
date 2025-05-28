import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';

const ProductCard = ({ product, showFavoriteButton = false }) => {
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-gray-50 h-48">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4">
          <h2 
            className="font-semibold text-gray-800 text-sm leading-tight mb-2 line-clamp-2 truncate group-hover:text-blue-600 transition-colors duration-200"
            title={product.title}
          >
            {product.title}
          </h2>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-blue-600">${product.price}</p>
            <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              {product.category}
            </div>
          </div>
        </div>
      </Link>
      {showFavoriteButton && (
        <div className="p-4 pt-0">
          <FavoriteButton product={product} />
        </div>
      )}
    </div>
  );
};

export default ProductCard;

