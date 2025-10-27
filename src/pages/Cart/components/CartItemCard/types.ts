import type { CartItem } from "@/contexts/CartContext";

export interface CartItemCardProps {
  item: CartItem;
  onRemove: (itemId: string) => void;
  onQuantityChange: (itemId: string, quantity: number) => void;
  className?: string;
}
