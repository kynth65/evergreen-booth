// src/components/common/HeroBanner.jsx
import React from "react";
import CoconutJuice from "../../assets/coconut-juice.png";

const HeroBanner = () => {
  return (
    <div className="mt-4 mx-4">
      <div className="rounded-3xl overflow-hidden bg-emerald-100 relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="/api/placeholder/400/200"
              alt="Background pattern"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="relative z-10 p-6 flex">
          <div className="w-2/3">
            <h2 className="text-xl font-bold text-emerald-800">
              Choose the
              <br />
              Drink you love
            </h2>
          </div>
          <div className="w-1/3 flex items-center justify-center">
            <div className="w-24 h-24 relative">
              <img
                src={CoconutJuice}
                alt="Fruit drink"
                className=" rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
