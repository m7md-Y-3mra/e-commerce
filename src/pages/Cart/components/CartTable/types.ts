import type { CartItem } from "@/contexts/CartContext";

export interface CartTableProps {
  items: CartItem[];
  onRemove: (itemId: string) => void;
  onQuantityChange: (itemId: string, quantity: number) => void;
  className?: string;
}
