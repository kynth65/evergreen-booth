import React from "react";
import { useCart } from "../context/CartContext";
import { ArrowLeft, Star, Plus, Minus } from "lucide-react";
import { useState } from "react";

const ProductDetailPage = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onClose();
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <div className="relative p-4 flex justify-between items-center">
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/90 shadow-sm hover:bg-white transition-colors"
        >
          <ArrowLeft size={20} className="text-emerald-800" />
        </button>
        <h1 className="font-bold text-emerald-800 text-xl">Fruity</h1>
        <div className="w-10"></div> {/* Spacer for alignment */}
      </div>

      {/* Product Image */}
      <div className="relative mx-4 rounded-3xl bg-emerald-50/80 p-8 shadow-sm">
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="h-64 object-contain max-w-full"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="flex-1 px-6 pt-6">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
          <div className="flex items-center bg-emerald-50 px-3 py-1 rounded-full">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span className="ml-1 font-medium text-gray-700">
              {product.rating}
            </span>
          </div>
        </div>

        <p className="mt-2 text-gray-600">{product.description}</p>

        {/* Price Section */}
        <div className="mt-6">
          <p className="text-sm text-gray-500">Price</p>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-gray-800">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="ml-2 text-sm line-through text-gray-400">
                P{product.originalPrice}
              </span>
            )}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-8">
          <h3 className="font-semibold text-gray-800 mb-3">Reviews</h3>
          <div className="flex">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-gray-200 -ml-2 first:ml-0 border-2 border-white"
              ></div>
            ))}
            <div className="w-10 h-10 rounded-full bg-emerald-100 -ml-2 border-2 border-white flex items-center justify-center text-sm font-medium text-emerald-800">
              +5
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="sticky bottom-0 p-4 bg-white border-t border-gray-100 shadow-lg">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center bg-gray-100 rounded-full">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={18} className="text-gray-700" />
            </button>
            <span className="px-4 font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={18} className="text-gray-700" />
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="flex-1 bg-emerald-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg active:scale-98"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
