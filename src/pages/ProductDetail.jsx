import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import FavoriteButton from '../components/FavoriteButton';
import { Link } from 'react-router-dom';
import { ChevronLeft, Star, ShoppingCart, Check  } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams(); // get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch product by ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(res.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  const productFeature = ['Free Shipping', 'Secure Payment', '30-Day Returns', '24/7 Support' ]

    if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-96 space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <p className="text-lg text-gray-600 font-medium">Loading product details...</p>
      </div>
    );
  }
  return (
    <div className="max-w-6xl mx-auto">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link 
          to="/" 
          className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4"/>
          Back to Products
        </Link>
      </nav>

      {/* Product Details */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Product Image */}
          <div className="lg:w-1/2 bg-gray-50 p-8 lg:p-12 flex items-center justify-center">
            <div className="relative group">
              <img
                src={product.image}
                alt={product.title}
                className="w-full max-w-md h-80 lg:h-96 object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2 p-8 lg:p-12">
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full capitalize">
                {product.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              {product.title}
            </h1>

            {/* Rating (if available) */}
            {product.rating && (
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating.rate)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 23 22"
                    />
                  ))}
                </div>
                <span className="text-gray-600 text-sm">
                  {product.rating.rate} ({product.rating.count} reviews)
                </span>
              </div>
            )}

            {/* Price */}
            <div className="mb-6">
              <span className="text-4xl font-bold text-blue-600">${product.price}</span>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {product.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <FavoriteButton product={product} />
              <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
                <span className="flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5"/>
                  Add to Cart
                </span>
              </button>
            </div>

            {/* Product Features */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                {productFeature.map((features, i) => (
                    <div 
                    key={i}
                    className="flex items-center gap-2"
                    >
                     <Check className="w-5 h-5 text-green-500"/>
                      {features}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;