import type { FC } from "react";
import type { NavIconProps } from "./types";

const NavIcon: FC<NavIconProps> = ({ children }) => {
  return (
    <button className="relative hover:text-gray-600 transition">
      {children}
    </button>
  );
};

export default NavIcon;
