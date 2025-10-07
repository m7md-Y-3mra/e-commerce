import type { FC } from "react";
import NavLink from "../NavLink";
import { navItems } from "../NavLink/constant";
import type { NavbarProps } from "./types";

const Navbar: FC<NavbarProps> = ({ style, type }) => {
  //md:hidden mt-4 pb-4 flex flex-col gap-4 text-center
  //md:hidden mt-4 pb-4 flex flex-col gap-4 text-center
  //hidden md:flex items-center gap-8
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
