import type { Product } from "@/components/ProductCard/types";
import Chair from "./assets/chair.png";
import Keyboard from "./assets/keyboard.png";
import PlayStation from "./assets/playstation.png";
import Screen from "./assets/screen.png";

export const FLASH_SALES_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    discount: "40%",
    rating: 5,
    reviews: 88,
    image: PlayStation,
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: 960,
    originalPrice: 1160,
    discount: "35%",
    rating: 4,
    reviews: 75,
    image: Keyboard,
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    originalPrice: 400,
    discount: "30%",
    rating: 5,
    reviews: 99,
    image: Screen,
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    price: 375,
    originalPrice: 400,
    discount: "25%",
    rating: 4.5,
    reviews: 99,
    image: Chair,
  },
];

export const SECTION_LABEL = "Today's";
export const SECTION_TITLE = "Flash Sales";
export const VIEW_ALL_TEXT = "View All Products";
