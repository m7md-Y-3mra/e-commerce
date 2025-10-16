export interface NavLinkProps {
  to: string;
  label: string;
  type: "mobile" | "desktop";
}

export interface NavItem {
  label: string;
  href: string;
}
