import { type FC } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import QuantityInput from "../QuantityInput";
import { useCartTable } from "./useCartTable";
import type { CartTableProps } from "./types";

const CartTable: FC<CartTableProps> = ({ items, onRemove, onQuantityChange, className }) => {
  const { handleRemove, handleQuantityChange, calculateSubtotal } = useCartTable({
    items,
    onRemove,
    onQuantityChange,
  });

  return (
    <div className={cn("rounded-lg border", className)}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[40%]">Product</TableHead>
            <TableHead className="text-center">Price</TableHead>
            <TableHead className="text-center">Quantity</TableHead>
            <TableHead className="text-center">Subtotal</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              {/* Product Column */}
              <TableCell>
                <div className="flex items-center gap-4">
                  {/* Product Image with Remove Button */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Remove Button (X icon in top-left corner) */}
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute -top-2 -left-2 h-5 w-5 rounded-full p-0"
                      onClick={() => handleRemove(item.id)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                  {/* Product Name */}
                  <span className="font-medium">{item.name}</span>
                </div>
              </TableCell>

              {/* Price Column */}
              <TableCell className="text-center">${item.price}</TableCell>

              {/* Quantity Column */}
              <TableCell>
                <div className="flex justify-center">
                  <QuantityInput
                    value={item.quantity}
                    min={1}
                    max={item.stock}
                    onChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}
                  />
                </div>
              </TableCell>

              {/* Subtotal Column */}
              <TableCell className="text-center font-medium">${calculateSubtotal(item)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CartTable;
