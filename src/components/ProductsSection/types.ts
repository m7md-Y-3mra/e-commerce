import type { Product } from "../ProductCard/types";

export interface ProductsSectionProps {
  sectionLabel?: string;
  sectionTitle?: string;
  products: Product[];
  showNavigationArrows?: boolean;
  showViewAllButton?: boolean;
  viewAllText?: string;
  className?: string;
}
