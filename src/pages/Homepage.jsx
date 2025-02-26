// src/pages/HomePage.jsx
import React, { useState } from "react";
import { CartProvider } from "../context/CartContext";
import Header from "../components/layout/Header";
import HeroBanner from "../components/common/HeroBanner";
import ProductCard from "../components/common/ProductCard";
import BottomNavigation from "../components/layout/BottomNavigation";
import ProductDetailPage from "./ProductDetailPage";
import CartPage from "./CartPage";
import products from "../data/products";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("popular");
  const [showProductDetail, setShowProductDetail] = useState(null);
  const [showCart, setShowCart] = useState(false);

  const filteredProducts = products.filter(
    (product) => product.category === activeTab
  );

  // Main homepage content
  const renderHomePage = () => (
    <div className="flex flex-col min-h-screen bg-emerald-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <HeroBanner />
      {/* Product Carousel */}
      <div className="px-4 mt-4 flex-1">
        <h2 className="text-lg font-semibold text-emerald-800 mb-3">
          Most Popular
        </h2>
        <div className="flex overflow-x-auto pb-4 space-x-3 snap-x">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={setShowProductDetail}
            />
          ))}
        </div>
      </div>
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
