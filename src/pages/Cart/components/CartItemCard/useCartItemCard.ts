import { useCallback } from "react";
import type { CartItem } from "@/contexts/CartContext";

interface UseCartItemCardProps {
  item: CartItem;
  onRemove: (itemId: string) => void;
  onQuantityChange: (itemId: string, quantity: number) => void;
}

export const useCartItemCard = ({ item, onRemove, onQuantityChange }: UseCartItemCardProps) => {
  const handleRemove = useCallback(() => {
    onRemove(item.id);
  }, [item.id, onRemove]);

  const handleQuantityChange = useCallback(
    (newQuantity: number) => {
      onQuantityChange(item.id, newQuantity);
    },
    [item.id, onQuantityChange],
  );

  const calculateSubtotal = useCallback(() => {
    return item.price * item.quantity;
  }, [item.price, item.quantity]);

  return {
    handleRemove,
    handleQuantityChange,
    subtotal: calculateSubtotal(),
  };
};
