// src/components/layout/Header.jsx
import React from "react";
import CategoryTab from "../common/CategoryTab";

const Header = ({ activeTab, setActiveTab }) => {
  const categories = [
    { id: "popular", label: "Popular", icon: "🔥" },
    { id: "healthy", label: "Healthy", icon: "🥗" },
    { id: "smoothie", label: "Smoothie", icon: "🥤" },
    { id: "refresh", label: "Refresh", icon: "🍹" },
  ];

  return (
    <header className="bg-white px-5 py-4 shadow-sm">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-emerald-800">Evergreen</h1>
      </div>

      {/* Category Tabs */}
      <div className="mt-4 flex space-x-4 overflow-x-auto pb-2">
        {categories.map((category) => (
          <CategoryTab
            key={category.id}
            icon={category.icon}
            label={category.label}
            isActive={activeTab === category.id}
            onClick={() =>
              category.id !== "refresh" && setActiveTab(category.id)
            }
          />
        ))}
      </div>
    </header>
  );
};

export default Header;
