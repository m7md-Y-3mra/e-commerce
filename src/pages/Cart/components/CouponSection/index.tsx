import { type FC } from "react";
import { cn } from "@/lib/utils";
import Button from "@/components/Button";
import { useCouponSection } from "./useCouponSection";
import type { CouponSectionProps } from "./types";

const CouponSection: FC<CouponSectionProps> = ({ className }) => {
  const { couponCode, isLoading, handleInputChange, handleApplyCoupon, handleKeyPress } =
    useCouponSection();

  return (
    <div className={cn("flex flex-col sm:flex-row gap-4 max-w-md", className)}>
      <input
        type="text"
        placeholder="Coupon Code"
        value={couponCode}
        onChange={(e) => handleInputChange(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={isLoading}
        className="flex-1 px-4 lg:px-6 py-3 lg:py-4 border border-black rounded-lg outline-0"
      />
      <Button
        onClick={handleApplyCoupon}
        className="whitespace-nowrap sm:w-auto"
        label={isLoading ? "Applying..." : "Apply Coupon"}
        disable={String(isLoading)}
      />
    </div>
  );
};

export default CouponSection;
