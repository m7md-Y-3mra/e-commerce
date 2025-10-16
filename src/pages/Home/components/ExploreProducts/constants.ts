import type { Product } from "@/components/ProductCard/types";
import BreedDog from "./assets/breed-dog.png";
import Camera from "./assets/camera.png";
import Curology from "./assets/curology.png";
import GamePad from "./assets/gamepad.png";
import Jacket from "./assets/jacket.png";
import KidsCar from "./assets/kids-car.png";
import Laptop from "./assets/laptop.png";
import SoccerCleats from "./assets/soccer-cleats.png";

export const EXPLORE_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    price: 100,
    rating: 3,
    reviews: 35,
    image: BreedDog,
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    price: 360,
    rating: 4,
    reviews: 95,
    image: Camera,
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    price: 700,
    rating: 5,
    reviews: 325,
    image: Laptop,
  },
  {
    id: 4,
    name: "Curology Product Set",
    price: 500,
    rating: 4,
    reviews: 145,
    image: Curology,
  },
  {
    id: 5,
    name: "Kids Electric Car",
    price: 960,
    rating: 5,
    reviews: 65,
    image: KidsCar,
    isNew: true,
  },
  {
    id: 6,
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    rating: 5,
    reviews: 35,
    image: { "#ffff00": SoccerCleats, "#FF0000": SoccerCleats },
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    rating: 4.5,
    reviews: 55,
    image: { "#FF0000": GamePad, "#000000": GamePad },
    isNew: true,
  },
  {
    id: 8,
    name: "Quilted Satin Jacket",
    price: 660,
    rating: 4.5,
    reviews: 55,
    image: { "#00FF00": Jacket, "#FF0000": Jacket },
  },
];

export const SECTION_LABEL = "Our Products";
export const SECTION_TITLE = "Explore Our Products";
export const VIEW_ALL_TEXT = "View All Products";
