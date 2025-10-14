import Camera from "./assets/Category-Camera.svg";
import Phone from "./assets/Category-CellPhone.svg";
import Computer from "./assets/Category-Computer.svg";
import Gamepad from "./assets/Category-Gamepad.svg";
import Headphone from "./assets/Category-Headphone.svg";
import Watch from "./assets/Category-SmartWatch.svg";
import type { Category } from "./types";



export const CATEGORIES: Category[] = [
  { id: 1, name: "Phones", icon: Phone },
  { id: 2, name: "Computers", icon: Computer },
  { id: 3, name: "SmartWatch", icon: Watch },
  { id: 4, name: "Camera", icon: Camera, active: true },
  { id: 5, name: "HeadPhones", icon: Headphone },
  { id: 6, name: "Gaming", icon: Gamepad },
];

export const SECTION_LABEL = "Categories";
export const SECTION_TITLE = "Browse By Category";
