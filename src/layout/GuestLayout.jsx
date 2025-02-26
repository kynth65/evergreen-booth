// src/layout/GuestLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

const GuestLayout = () => {
  return (
    <div className="min-h-screen bg-emerald-50">
      <Outlet />
    </div>
  );
};

export default GuestLayout;
