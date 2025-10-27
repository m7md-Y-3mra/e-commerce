import { type FC } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { CartTotalCardProps } from "./types";

const CartTotalCard: FC<CartTotalCardProps> = ({
  subtotal,
  shipping,
  total,
  onCheckout,
  className,
}) => {
  return (
    <div className={cn("border rounded-lg p-6 shadow-sm bg-white", className)}>
      <h2 className="text-xl font-semibold mb-6">Cart Total</h2>

      <div className="space-y-4">
        {/* Subtotal */}
        <div className="flex justify-between items-center pb-4 border-b">
          <span className="text-gray-600">Subtotal:</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>

        {/* Shipping */}
        <div className="flex justify-between items-center pb-4 border-b">
          <span className="text-gray-600">Shipping:</span>
          <span className="font-medium">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total:</span>
          <span className="font-semibold text-lg">${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <Button onClick={onCheckout} className="w-full mt-6" size="lg">
        Proceed to checkout
      </Button>
    </div>
  );
};

export default CartTotalCard;
