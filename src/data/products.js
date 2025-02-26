// src/data/products.js
import calamansi from "../assets/calamansi-juice.png";
import mango from "../assets/mango-juice.png";
import coconut from "../assets/coconut-juice.png";
import banana from "../assets/banana-juice.png";
import lemon from "../assets/lemon-juice.png";
import sweet_potato from "../assets/sweet-potato-juice.png";

export const products = [
  {
    id: 1,
    name: "Calamansi Citrus",
    price: 6.95,
    image: calamansi,
    description: "Fresh green apple juice with a hint of mint",
    rating: 4.8,

    originalPrice: 7.95,
    category: "popular",
  },
  {
    id: 2,
    name: "Mango Delight",
    price: 7.85,
    image: mango,
    description: "Blend of kiwi and green grapes",
    rating: 4.5,
    category: "popular",
  },
  {
    id: 3,
    name: "Coconut summer",
    price: 8.5,
    image: coconut,
    description: "Premium matcha with almond milk",
    rating: 4.7,
    category: "popular",
  },
  {
    id: 4,
    name: "Lemon Sunny",
    price: 5.95,
    image: lemon,
    description: "Hydrating cucumber water with lime",
    rating: 4.3,
    category: "healthy",
  },
  {
    id: 5,
    name: "Sweet Potato Smoothie",
    price: 9.95,
    image: sweet_potato,
    description: "Creamy avocado with banana and spinach",
    rating: 4.9,
    discount: "15%",
    originalPrice: 11.95,
    category: "smoothie",
  },
  {
    id: 6,
    name: "Banana Boost",
    price: 6.5,
    image: banana,
    description: "Refreshing lime juice with fresh mint",
    rating: 4.6,
    category: "popular",
  },
];

export default products;
