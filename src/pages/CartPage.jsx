// src/pages/CartPage.jsx
import React from "react";
import CartItem from "../components/cart/CartItem";
import OrderSummary from "../components/cart/OrderSummary";
import EmptyCart from "../components/cart/EmptyCart";
import { useCart } from "../context/CartContext";

const CartPage = ({ onClose }) => {
  const { cart, clearCart } = useCart();

  const handleCheckout = () => {
    // In a real app, we would submit order to backend
    alert("Order successful! Thank you for your purchase.");
    clearCart();
    onClose();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white p-4 shadow-sm flex items-center">
        <button
          className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mr-4"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
        <h1 className="text-xl font-semibold text-emerald-800">Your Cart</h1>
      </header>

      <div className="flex-1 p-4">
        {cart.length === 0 ? (
          <EmptyCart onStartShopping={onClose} />
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <OrderSummary onCheckout={handleCheckout} />
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
