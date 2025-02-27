// src/components/common/HeroBanner.jsx
import React from "react";

const HeroBanner = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 py-6 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex  md:flex-row ">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-white text-2xl md:text-3xl font-bold">
              Fresh & Organic
            </h2>
            <p className="text-emerald-100 mt-2 max-w-md">
              Start your day with our healthy, refreshing drinks made from 100%
              natural ingredients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
