// src/components/cart/CartItem.jsx
import React from "react";
import { formatPrice } from "../../utils/formatters";
import { useCart } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="bg-white rounded-xl p-3 shadow-sm flex">
      <div className="w-20 h-20 rounded-lg bg-emerald-100 flex-shrink-0 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="ml-3 flex-1">
        <div className="flex justify-between">
          <h3 className="font-medium text-emerald-800">{item.name}</h3>
          <button
            className="text-gray-400 hover:text-red-500"
            onClick={() => removeFromCart(item.id)}
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
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
        <span className="text-emerald-700 font-semibold">
          {formatPrice(item.price)}
        </span>
        <div className="mt-2 flex items-center">
          <button
            className="w-6 h-6 rounded bg-emerald-100 text-emerald-800 flex items-center justify-center"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            </svg>
          </button>
          <span className="w-8 text-center">{item.quantity}</span>
          <button
            className="w-6 h-6 rounded bg-emerald-100 text-emerald-800 flex items-center justify-center"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
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
    </div>
  );
};

export default CartItem;
