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
    price: 39.99,
    image: calamansi,
    description: "Tangy and refreshing calamansi citrus juice with a hint of natural sweetness",
    rating: 4.8,
    originalPrice: 49.99,
    categories: ["popular", "refresh"],
  },
  {
    id: 2,
    name: "Mango Delight",
    price: 39.99,
    image: mango,
    description: "Sweet and luscious mango juice made from premium Carabao mangoes from Davao",
    rating: 4.5,
    categories: ["popular", "fruit"],
  },
  {
    id: 3,
    name: "Coconut Summer",
    price: 39.99,
    image: coconut,
    description: "Pure and hydrating coconut water straight from young green coconuts",
    rating: 4.7,
    categories: ["popular", "refresh"],
  },
  {
    id: 4,
    name: "Lemon Sunny",
    price: 39.99,
    image: lemon,
    description: "Bright and zesty lemon juice blended with cucumber for ultimate refreshment",
    rating: 4.3,
    categories: ["refresh", "fruit"],
  },
  {
    id: 5,
    name: "Sweet Potato Smoothie",
    price: 39.99,
    image: sweet_potato,
    description: "Nutritious purple sweet potato smoothie with coconut milk and cinnamon",
    rating: 4.9,
    discount: "15%",
    originalPrice: 49.99,
    categories: ["smoothie"],
  },
  {
    id: 6,
    name: "Banana Boost",
    price: 39.99,
    image: banana,
    description: "Creamy banana smoothie with a touch of honey and vanilla for natural energy",
    rating: 4.6,
    categories: ["popular", "fruit"],
  },
];

// For backward compatibility - default category is the first in the array
products.forEach(product => {
  product.category = product.categories[0];
});

export default products;