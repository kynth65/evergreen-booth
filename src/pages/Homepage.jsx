import React, { useState, useEffect } from "react";
import { CartProvider } from "../context/CartContext";
import Header from "../components/layout/Header";
import ProductCard from "../components/common/ProductCard";
import BottomNavigation from "../components/layout/BottomNavigation";
import ProductDetailPage from "./ProductDetailPage";
import CartPage from "./CartPage";
import products from "../data/products";
import { Search, Star, X } from "lucide-react";
import HeroBanner from "../components/common/HeroBanner";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("popular");
  const [showProductDetail, setShowProductDetail] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Filter products based on category and search term
  useEffect(() => {
    if (searchTerm.trim() === "") {
      // If no search term, filter by category
      setDisplayedProducts(
        products.filter(
          (product) =>
            // Check if the product belongs to the active category
            product.categories && product.categories.includes(activeTab)
        )
      );
      setIsSearching(false);
    } else {
      // If searching, filter across all products
      const searchResults = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setDisplayedProducts(searchResults);
      setIsSearching(true);
    }
  }, [searchTerm, activeTab]);

  // Get the category label for the heading
  const getCategoryLabel = () => {
    if (isSearching) {
      return `Search Results for "${searchTerm}"`;
    }

    const categories = {
      popular: "Popular Picks",
      smoothie: "Fresh Smoothies",
      refresh: "Refreshing Drinks",
      fruit: "Fruit Juices",
    };
    return categories[activeTab] || "Popular Picks";
  };

  // Clear search
  const clearSearch = () => {
    setSearchTerm("");
  };

  // Handle search input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Main homepage content
  const renderHomePage = () => (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Hero Banner - Always visible */}

      <HeroBanner />

      {/* Search Bar */}
      <div className="bg-white px-4 py-3 border-b border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-10 py-2 border border-gray-200 rounded-full bg-gray-50 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
              placeholder="Search for juices, smoothies..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchTerm && (
              <button
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={clearSearch}
              >
                <X size={18} className="text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-bold text-3xl">Menu</h1>
          <div className="border-b mb-10 mt-2"></div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              {getCategoryLabel()}
            </h2>
          </div>

          {/* Products Grid - Responsive */}
          {displayedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {displayedProducts.map((product) => (
                <div className="w-full flex justify-center" key={product.id}>
                  <ProductCard
                    product={product}
                    onClick={setShowProductDetail}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg p-8 text-center">
              {isSearching ? (
                <>
                  <h3 className="text-gray-500">
                    No products found matching "{searchTerm}"
                  </h3>
                  <button
                    className="mt-4 text-emerald-600 font-medium"
                    onClick={clearSearch}
                  >
                    Clear search
                  </button>
                </>
              ) : (
                <>
                  <h3 className="text-gray-500">
                    No products found in this category
                  </h3>
                  <button
                    className="mt-4 text-emerald-600 font-medium"
                    onClick={() => setActiveTab("popular")}
                  >
                    Browse popular products
                  </button>
                </>
              )}
            </div>
          )}

          {/* Featured Section - Show based on preference */}
          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              {isSearching ? "You May Also Like" : "Featured Products"}
            </h2>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {products.slice(0, 2).map((product) => (
                  <div
                    key={product.id}
                    className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                    onClick={() => setShowProductDetail(product)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-contain"
                    />
                    <div>
                      <h3 className="font-medium text-gray-800">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {product.description}
                      </p>
                      <div className="mt-1 flex justify-between">
                        <span className="font-bold text-emerald-700">
                          &#8369;{product.price}
                        </span>
                        <div className="flex items-center">
                          <Star
                            size={14}
                            className="text-yellow-400 fill-yellow-400"
                          />
                          <span className="ml-1 text-xs">{product.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <BottomNavigation setShowCart={() => setShowCart(true)} />
    </div>
  );

  return (
    <CartProvider>
      {!showProductDetail && !showCart && renderHomePage()}

      {showProductDetail && (
        <ProductDetailPage
          product={showProductDetail}
          onClose={() => setShowProductDetail(null)}
        />
      )}

      {showCart && <CartPage onClose={() => setShowCart(false)} />}
    </CartProvider>
  );
};

export default HomePage;
