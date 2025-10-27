import { type FC } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import QuantityInput from "../QuantityInput";
import { useCartItemCard } from "./useCartItemCard";
import type { CartItemCardProps } from "./types";

const CartItemCard: FC<CartItemCardProps> = ({ item, onRemove, onQuantityChange, className }) => {
  const { handleRemove, handleQuantityChange, subtotal } = useCartItemCard({
    item,
    onRemove,
    onQuantityChange,
  });

  return (
    <div className={cn("border rounded-lg p-4 shadow-sm bg-white", className)}>
      <div className="flex gap-4">
        {/* Product Image */}
        <div className="relative flex-shrink-0">
          <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
          </div>
          {/* Remove Button */}
          <Button
            variant="destructive"
            size="icon"
            className="absolute -top-2 -left-2 h-5 w-5 rounded-full p-0"
            onClick={handleRemove}
          >
            <X className="h-3 w-3" />
          </Button>
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col justify-between">
          {/* Product Name */}
          <h3 className="font-medium text-sm">{item.name}</h3>

          {/* Price and Quantity */}
          <div className="flex items-center justify-between mt-2">
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-600">Price: ${item.price}</span>
              <QuantityInput
                value={item.quantity}
                min={1}
                max={item.stock}
                onChange={handleQuantityChange}
              />
            </div>

            {/* Subtotal */}
            <div className="text-right">
              <div className="text-xs text-gray-500">Subtotal</div>
              <div className="font-semibold">${subtotal}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
