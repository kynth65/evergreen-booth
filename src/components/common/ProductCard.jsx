// src/components/common/ProductCard.jsx
import React from "react";
import { formatPrice } from "../../utils/formatters";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product, onClick }) => {
  const { addToCart } = useCart();

  return (
    <div
      className="flex-shrink-0 w-36 snap-center bg-white rounded-xl p-3 shadow-sm"
      onClick={() => onClick(product)}
    >
      <div className="relative w-full h-40 bg-emerald-100 rounded-lg mb-2">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
        {product.discount && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            {product.discount} OFF
          </span>
        )}
      </div>
      <h3 className="font-semibold text-sm text-emerald-800 truncate">
        {product.name}
      </h3>
      <div className="flex justify-between items-center mt-1">
        <div>
          {product.discount ? (
            <div className="flex items-baseline space-x-1">
              <span className="font-bold text-emerald-700">
                {formatPrice(product.price)}
              </span>
              <span className="text-xs text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            </div>
          ) : (
            <span className="font-bold text-emerald-700">
              {formatPrice(product.price)}
            </span>
          )}
        </div>
        <button
          className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white"
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
