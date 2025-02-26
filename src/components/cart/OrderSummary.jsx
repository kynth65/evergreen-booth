// src/components/cart/OrderSummary.jsx
import React from "react";
import { formatPrice } from "../../utils/formatters";
import { useCart } from "../../context/CartContext";

const OrderSummary = ({ onCheckout }) => {
  const { getCartTotal } = useCart();

  const subtotal = getCartTotal();
  const tax = subtotal * 0.1;
  const deliveryFee = 2.5;
  const total = subtotal + tax + deliveryFee;

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <h3 className="font-semibold text-emerald-800 mb-3">Order Summary</h3>
      <div className="space-y-2 mb-3">
        <div className="flex justify-between">
          <span className="text-gray-500">Subtotal</span>
          <span className="font-medium">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Tax</span>
          <span className="font-medium">{formatPrice(tax)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Delivery Fee</span>
          <span className="font-medium">{formatPrice(deliveryFee)}</span>
        </div>
      </div>
      <div className="pt-3 border-t border-gray-200">
        <div className="flex justify-between">
          <span className="font-semibold text-emerald-800">Total</span>
          <span className="font-bold text-lg text-emerald-800">
            {formatPrice(total)}
          </span>
        </div>
      </div>

      <button
        className="w-full py-3 rounded-xl bg-emerald-600 text-white font-medium mt-4"
        onClick={onCheckout}
      >
        Checkout ({formatPrice(total)})
      </button>
    </div>
  );
};

export default OrderSummary;
