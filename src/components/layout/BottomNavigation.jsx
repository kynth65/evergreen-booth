import React from "react";
import { useCart } from "../../context/CartContext";
import { Home, ShoppingBag } from "lucide-react";

const BottomNavigation = ({ setShowCart }) => {
  const { getCartItemCount } = useCart();

  return (
    <div className="sticky bottom-0 bg-white border-t border-gray-100 shadow-lg py-3 px-4 mt-auto">
      <div className="flex justify-around max-w-md mx-auto">
        <NavButton icon={<Home size={20} />} label="Home" active />
        <NavButton
          icon={<ShoppingBag size={20} />}
          label="Cart"
          onClick={() => setShowCart(true)}
          badge={getCartItemCount() > 0 ? getCartItemCount() : null}
        />
      </div>
    </div>
  );
};

// Helper component for nav buttons
const NavButton = ({ icon, label, active = false, onClick, badge = null }) => {
  return (
    <button
      className={`flex flex-col items-center ${
        active ? "text-emerald-600" : "text-gray-500"
      }`}
      onClick={onClick}
    >
      <div className="relative">
        {icon}
        {badge !== null && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {badge}
          </span>
        )}
      </div>
      <span className={`text-xs mt-1 ${active ? "font-medium" : ""}`}>
        {label}
      </span>
    </button>
  );
};

export default BottomNavigation;
