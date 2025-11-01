import { useCallback } from "react";
import type { CartItem } from "@/contexts/CartContext";

interface UseCartTableProps {
  items: CartItem[];
  onRemove: (itemId: string) => void;
  onQuantityChange: (itemId: string, quantity: number) => void;
}

export const useCartTable = ({ onRemove, onQuantityChange }: UseCartTableProps) => {
  const handleRemove = useCallback(
    (itemId: string) => {
      onRemove(itemId);
    },
    [onRemove],
  );

  const handleQuantityChange = useCallback(
    (itemId: string, newQuantity: number) => {
      onQuantityChange(itemId, newQuantity);
    },
    [onQuantityChange],
  );

  const calculateSubtotal = useCallback((item: CartItem) => {
    return item.price * item.quantity;
  }, []);

  return {
    handleRemove,
    handleQuantityChange,
    calculateSubtotal,
  };
};
