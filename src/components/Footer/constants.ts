import type { FooterSection } from "./types";

export const SUBSCRIBE_TITLE = "Subscribe";
export const SUBSCRIBE_TEXT = "Get 10% off your first order";
export const EMAIL_PLACEHOLDER = "Enter your email";

export const SUPPORT_SECTION = {
  title: "Support",
  address: "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.",
  email: "exclusive@gmail.com",
  phone: "+88015-88888-9999",
};

export const ACCOUNT_LINKS: FooterSection = {
  title: "Account",
  links: [
    { label: "My Account", href: "/account" },
    { label: "Login / Register", href: "/auth" },
    { label: "Cart", href: "/cart" },
    { label: "Wishlist", href: "/wishlist" },
    { label: "Shop", href: "/shop" },
  ],
};

export const QUICK_LINKS: FooterSection = {
  title: "Quick Link",
  links: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms Of Use", href: "/terms" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
};

export const APP_DOWNLOAD_TEXT = "Save $3 with App New User Only";
export const COPYRIGHT_TEXT = "© Copyright Rimel 2022. All right reserved";
