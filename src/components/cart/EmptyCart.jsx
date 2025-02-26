// src/components/cart/EmptyCart.jsx
import React from "react";

const EmptyCart = ({ onStartShopping }) => {
  return (
    <div className="text-center py-12">
      <div className="w-24 h-24 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-emerald-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>
      <h2 className="text-xl font-semibold text-emerald-800 mb-2">
        Your cart is empty
      </h2>
      <p className="text-gray-500 mb-6">
        Add drinks that you love to your cart
      </p>
      <button
        className="px-6 py-2 rounded-full bg-emerald-600 text-white"
        onClick={onStartShopping}
      >
        Start Shopping
      </button>
    </div>
  );
};

export default EmptyCart;
