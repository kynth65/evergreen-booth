// src/pages/ProductDetailPage.jsx
import React from "react";
import { formatPrice, calculateDiscountPercentage } from "../utils/formatters";
import { useCart } from "../context/CartContext";

const ProductDetailPage = ({ product, onClose }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-white p-4 flex items-center justify-between">
        <button
          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h1 className="text-lg font-semibold text-emerald-800">Fruity</h1>
        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
          <img
            src="/api/placeholder/32/32"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      <div className="flex-1 p-4">
        <div className="mx-auto max-w-xs">
          {/* Discount Tag */}
          {product.discount && (
            <div className="mb-2">
              <div className="inline-block px-3 py-1 rounded-lg bg-red-50 text-red-500 font-medium text-sm">
                {product.discount} OFF
              </div>
            </div>
          )}

          {/* Product Image */}
          <div className="bg-emerald-50 rounded-lg p-6 flex items-center justify-center mb-6">
            <img
              src={product.image}
              alt={product.name}
              className="h-48 object-contain"
            />
          </div>

          {/* Product Details */}
          <div>
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-bold text-gray-800">
                {product.name}
              </h2>
              <div className="flex items-center bg-emerald-50 px-2 py-1 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-700">
                  {product.rating}
                </span>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-4">{product.description}</p>

            {/* Price */}
            <div className="mb-6">
              {product.discount ? (
                <div className="flex items-baseline">
                  <div className="mr-3">
                    <div className="text-xs text-gray-500 mb-1">Price</div>
                    <div className="flex items-baseline">
                      <span className="font-bold text-2xl text-gray-800">
                        {formatPrice(product.price)}
                      </span>
                      <span className="ml-2 text-sm text-gray-500 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Savings</div>
                    <div className="text-sm font-medium text-emerald-600">
                      {calculateDiscountPercentage(
                        product.originalPrice,
                        product.price
                      )}
                      %
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="text-xs text-gray-500 mb-1">Price</div>
                  <span className="font-bold text-2xl text-gray-800">
                    {formatPrice(product.price)}
                  </span>
                </div>
              )}
            </div>

            {/* Reviews */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 text-sm mb-2">
                Reviews
              </h3>
              <div className="flex space-x-2">
                <div className="w-6 h-6 rounded-full bg-emerald-200 overflow-hidden">
                  <img
                    src="/api/placeholder/24/24"
                    alt="Reviewer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-6 h-6 rounded-full bg-emerald-300 overflow-hidden">
                  <img
                    src="/api/placeholder/24/24"
                    alt="Reviewer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-6 h-6 rounded-full bg-emerald-400 overflow-hidden">
                  <img
                    src="/api/placeholder/24/24"
                    alt="Reviewer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-6 h-6 rounded-full bg-emerald-500 overflow-hidden">
                  <img
                    src="/api/placeholder/24/24"
                    alt="Reviewer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600 font-medium">
                  +5
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white shadow-md">
        <button
          className="w-full py-3 rounded-xl bg-emerald-600 text-white font-medium"
          onClick={handleAddToCart}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
