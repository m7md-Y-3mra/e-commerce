import type { FC } from "react";
import NavLink from "../NavLink";
import { navItems } from "../NavLink/constant";
import type { NavbarProps } from "./types";

const Navbar: FC<NavbarProps> = ({ style, type }) => {
  return (
    <nav className={style}>
      {navItems.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          label={item.label}
          type={type}
        />
      ))}
    </nav>
  );
};

export default Navbar;
