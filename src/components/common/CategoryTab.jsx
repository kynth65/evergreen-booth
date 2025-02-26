// src/components/common/CategoryTab.jsx
import React from "react";

const CategoryTab = ({ icon, label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center px-3 py-1 whitespace-nowrap"
    >
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center mb-1 ${
          isActive
            ? "bg-emerald-100 text-emerald-600"
            : "bg-gray-100 text-gray-500"
        }`}
      >
        <span role="img" aria-label={label} className="text-lg">
          {icon}
        </span>
      </div>
      <span
        className={`text-xs ${
          isActive ? "text-emerald-600 font-medium" : "text-gray-500"
        }`}
      >
        {label}
      </span>
    </button>
  );
};

export default CategoryTab;
