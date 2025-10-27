import { useMemo } from "react";
import { useNavigate } from "react-router";
import { useCartContext } from "@/contexts/CartContext";
import type { BreadcrumbItem } from "@/components/Breadcrumb/types";

export const useCart = () => {
  const navigate = useNavigate();
  const cartContext = useCartContext();

  const isEmpty = cartContext.cart.items.length === 0;

  const breadcrumbItems: BreadcrumbItem[] = useMemo(
    () => [
      { label: "Home", path: "/" },
      { label: "Cart" },
    ],
    [],
  );

  const handleReturnToShop = () => {
    navigate("/");
  };

  const handleUpdateCart = () => {
    // Trigger a toast notification (handled in the component)
    return true;
  };

  const handleProceedToCheckout = () => {
    // Navigate to checkout page (to be implemented)
    navigate("/checkout");
  };

  return {
    cart: cartContext.cart,
    isEmpty,
    breadcrumbItems,
    handleReturnToShop,
    handleUpdateCart,
    handleProceedToCheckout,
    removeItem: cartContext.removeItem,
    updateQuantity: cartContext.updateQuantity,
  };
};
