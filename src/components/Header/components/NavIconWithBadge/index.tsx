import type { FC } from "react";
import NavIcon from "../NavIcon";
import type { NavIconWithBadgeProps } from "./types";

export const NavIconWithBadge: FC<NavIconWithBadgeProps> = ({ count, children }) => {
  return (
    <NavIcon>
      {children}
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
        {count}
      </span>
    </NavIcon>
  );
};
