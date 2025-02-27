import React from "react";
import { Leaf } from "lucide-react";

const Header = ({ activeTab, setActiveTab }) => {
  const categories = [
    { id: "popular", label: "Popular", emoji: "🔥" },
    { id: "smoothie", label: "Smoothie", emoji: "🥤" },
    { id: "refresh", label: "Refresh", emoji: "🍹" },
  ];

  return (
    <header className="bg-white px-4 pt-4 pb-2 shadow-sm sticky top-0 z-10">
      <div className="max-w-5xl mx-auto">
        {/* Logo and Brand */}
        <div className="flex items-center justify-center md:justify-start">
          <Leaf className="h-6 w-6 text-emerald-600" />
          <h1 className="text-lg font-bold ml-2 text-emerald-800">
            Evergreen Booth
          </h1>
        </div>

        {/* Category Tabs - Scrollable */}
        <div className="mt-4 flex flex-col gap-2 md:flex-row space-x-2 justify-center overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <CategoryTab
              key={category.id}
              emoji={category.emoji}
              label={category.label}
              isActive={activeTab === category.id}
              onClick={() => setActiveTab(category.id)}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

const CategoryTab = ({ emoji, label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center whitespace-nowrap px-4 py-2 rounded-full transition-all duration-200 ${
        isActive
          ? "bg-emerald-100 text-emerald-800 font-medium shadow-sm"
          : "bg-gray-50 text-gray-600 hover:bg-gray-100"
      }`}
    >
      <span className="mr-2">{emoji}</span>
      <span>{label}</span>
    </button>
  );
};

export default Header;
