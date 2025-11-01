import { type FC } from "react";
import { cn } from "@/lib/utils";
import Button from "@/components/Button";
import type { CartTotalCardProps } from "./types";

const CartTotalCard: FC<CartTotalCardProps> = ({
  subtotal,
  shipping,
  total,
  onCheckout,
  className,
}) => {
  return (
    <div className={cn("border-[1.5px] border-black rounded-lg p-6 bg-white", className)}>
      <h2 className="text-xl font-semibold mb-6">Cart Total</h2>

      <div className="space-y-4">
        {/* Subtotal */}
        <div className="flex justify-between items-center pb-4 border-b border-black">
          <span className="text-gray-600">Subtotal:</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>

        {/* Shipping */}
        <div className="flex justify-between items-center pb-4 border-b border-black">
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
      <div className="text-center mt-6">
        <Button onClick={onCheckout} label="Proceed to checkout" />
      </div>
    </div>
  );
};

export default CartTotalCard;
