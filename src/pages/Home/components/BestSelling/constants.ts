import type { Product } from "@/components/ProductCard/types";
import Bag from "./assets/bag.png";
import BookSelf from "./assets/book-self.png";
import Coat from "./assets/coat.png";
import CPUCooler from "./assets/CPU-cooler.png";

export const BEST_SELLING_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "The north coat",
    price: 260,
    originalPrice: 360,
    rating: 5,
    reviews: 65,
    image: Coat,
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    price: 960,
    originalPrice: 1160,
    rating: 4.5,
    reviews: 65,
    image: Bag,
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    price: 160,
    originalPrice: 170,
    rating: 4.5,
    reviews: 65,
    image: CPUCooler,
  },
  {
    id: 4,
    name: "Small BookSelf",
    price: 360,
    rating: 5,
    reviews: 65,
    image: BookSelf,
  },
];

export const SECTION_LABEL = "This Month";
export const SECTION_TITLE = "Best Selling Products";
export const VIEW_ALL_TEXT = "View All";
