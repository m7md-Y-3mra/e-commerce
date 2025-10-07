import type { FC } from "react";
import { Link, useLocation } from "react-router";
import type { NavLinkProps } from "./types";

const NavLink: FC<NavLinkProps> = ({ to, label, type }) => {
  const location = useLocation();
  const style =
    type === "desktop"
      ? `hover:text-gray-600 border-b-2 border-transparent transition ${
          location.pathname === to && "border-gray-300!"
        }`
      : `transition ${location.pathname === to && "text-primary"}`;

  return (
    <Link to={to} className={style}>
      {label}
    </Link>
  );
};

export default NavLink;
