import { type FC } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCouponSection } from "./useCouponSection";
import type { CouponSectionProps } from "./types";

const CouponSection: FC<CouponSectionProps> = ({ className }) => {
  const { couponCode, isLoading, handleInputChange, handleApplyCoupon, handleKeyPress } =
    useCouponSection();

  return (
    <div className={cn("flex flex-col sm:flex-row gap-4 max-w-md", className)}>
      <Input
        type="text"
        placeholder="Coupon Code"
        value={couponCode}
        onChange={(e) => handleInputChange(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={isLoading}
        className="flex-1"
      />
      <Button
        onClick={handleApplyCoupon}
        disabled={isLoading}
        className="whitespace-nowrap sm:w-auto"
      >
        {isLoading ? "Applying..." : "Apply Coupon"}
      </Button>
    </div>
  );
};

export default CouponSection;
