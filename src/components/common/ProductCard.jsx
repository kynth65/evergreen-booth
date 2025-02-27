import React from "react";
import { Star, ShoppingBag, Heart } from "lucide-react";

const ProductCard = ({ product, onClick }) => {
  return (
    <div
      className="group relative bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 flex-shrink-0 w-64 snap-start hover:shadow-md transition-all duration-200 cursor-pointer"
      onClick={() => onClick(product)}
    >
      {/* Discount badge */}
      {product.discount && (
        <div className="absolute top-3 left-3">
          <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
            {product.discount}
          </span>
        </div>
      )}
      ]{" "}
      <div className="pt-6 px-6 pb-2 bg-gradient-to-b from-emerald-50/50 to-white">
        <img
          src={product.image}
          alt={product.name}
          className="h-40 w-full object-contain mx-auto transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-gray-800">{product.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{product.description}</p>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="ml-1 text-xs text-gray-600">{product.rating}</span>
          </div>
          <div className="flex items-center">
            <span className="font-bold text-emerald-800">
              &#8369;{product.price}
            </span>
            {product.originalPrice && (
              <span className="ml-1 text-xs line-through text-gray-400">
                &#8369;{product.originalPrice}
              </span>
            )}
          </div>
        </div>

        {/* Add to cart button */}
        <button className="mt-4 w-full flex items-center justify-center bg-emerald-100 hover:bg-emerald-200 text-emerald-800 rounded-lg py-2 text-sm font-medium transition-colors">
          <ShoppingBag size={14} className="mr-1" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
