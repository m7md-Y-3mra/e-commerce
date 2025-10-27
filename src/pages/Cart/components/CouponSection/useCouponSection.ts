import { useState, useCallback } from "react";
import { useCartContext } from "@/contexts/CartContext";
import { toast } from "sonner";

export const useCouponSection = () => {
  const { applyCoupon } = useCartContext();
  const [couponCode, setCouponCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = useCallback((value: string) => {
    setCouponCode(value);
  }, []);

  const handleApplyCoupon = useCallback(async () => {
    if (!couponCode.trim()) {
      toast.error("Please enter a coupon code");
      return;
    }

    setIsLoading(true);

    try {
      const success = await applyCoupon(couponCode);

      if (success) {
        toast.success("Coupon applied successfully!");
        setCouponCode("");
      } else {
        toast.error("Invalid coupon code. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to apply coupon. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [couponCode, applyCoupon]);

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleApplyCoupon();
      }
    },
    [handleApplyCoupon],
  );

  return {
    couponCode,
    isLoading,
    handleInputChange,
    handleApplyCoupon,
    handleKeyPress,
  };
};
