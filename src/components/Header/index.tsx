import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import Cart from "./assets/images/cart.svg";
import Profile from "./assets/images/profile.svg";
import Wishlist from "./assets/images/wishlist.svg";
import Navbar from "./components/Navbar";
import NavIcon from "./components/NavIcon";
import { NavIconWithBadge } from "./components/NavIconWithBadge";
import SearchBar from "./components/SearchBar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="font-bold text-2xl">Exclusive</div>

          {/* Desktop Navigation */}
          <Navbar style="hidden md:flex items-center gap-8" type="desktop" />

          {/* Search & Icons */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <SearchBar style="hidden md:flex" />

            {/* Icons */}
            <NavIconWithBadge count={2}>
              <img src={Wishlist} alt="wishlist-icon" />
            </NavIconWithBadge>
            <NavIconWithBadge count={2}>
              <img src={Cart} alt="cart-icon" />
            </NavIconWithBadge>
            <NavIcon>
              <img src={Profile} alt="profile-icon" />
            </NavIcon>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <Navbar style="md:hidden mt-4 pb-4 flex flex-col gap-4 text-center" type="mobile" />
        )}
      </div>
    </header>
  );
};

export default Header;
