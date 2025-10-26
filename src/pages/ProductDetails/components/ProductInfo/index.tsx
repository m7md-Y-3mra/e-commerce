import { type FC } from "react";
import { Heart, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import StarIcon from "@/components/StarIcon";
import { Button } from "@/components/ui/button";
import type { ProductInfoProps } from "./types";
import { useProductInfo } from "./hooks/useProductInfo";

const ProductInfo: FC<ProductInfoProps> = ({
  name,
  price,
  rating,
  reviewsCount,
  description,
  color,
  stock,
  className,
}) => {
  const {
    selectedSize,
    quantity,
    perStarValues,
    availableSizes,
    handleSizeChange,
    incrementQuantity,
    decrementQuantity,
  } = useProductInfo(rating);

  const isInStock = stock > 0;

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {/* Product Name */}
      <h1 className="text-2xl font-semibold">{name}</h1>

      {/* Rating and Reviews */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          {perStarValues.map((value, index) => (
            <StarIcon key={index} value={value} size={20} />
          ))}
        </div>
        <span className="text-gray-500 text-sm">({reviewsCount} Reviews)</span>
        <span className="text-gray-300">|</span>
        <span className={cn("text-sm", isInStock ? "text-green-500" : "text-red-500")}>
          {isInStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      {/* Price */}
      <div className="text-2xl font-normal">${price.toFixed(2)}</div>

      {/* Description */}
      <p className="text-sm leading-relaxed border-b pb-6">{description}</p>

      {/* Colors */}
      <div className="flex items-center gap-6">
        <span className="text-lg">Colours:</span>
        <div className="flex gap-2">
          <div
            className="w-6 h-6 rounded-full border-2 border-black cursor-pointer"
            style={{ backgroundColor: color.toLowerCase() }}
            title={color}
          />
        </div>
      </div>

      {/* Size Selection */}
      <div className="flex items-center gap-6">
        <span className="text-lg">Size:</span>
        <div className="flex gap-4">
          {availableSizes.map((size) => (
            <button
              key={size}
              onClick={() => handleSizeChange(size)}
              className={cn(
                "w-10 h-10 border rounded-md flex items-center justify-center text-sm font-medium transition-all hover:border-primary",
                selectedSize === size
                  ? "bg-primary text-white border-primary"
                  : "border-gray-300 text-black",
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity and Actions */}
      <div className="flex items-center gap-4">
        {/* Quantity Selector */}
        <div className="flex items-center border border-gray-300 rounded-md">
          <button
            onClick={decrementQuantity}
            className="w-10 h-11 flex items-center justify-center hover:bg-gray-100 transition-colors border-r border-gray-300"
            aria-label="Decrease quantity"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-16 h-11 flex items-center justify-center font-medium border-r border-gray-300">
            {quantity}
          </span>
          <button
            onClick={incrementQuantity}
            className="w-10 h-11 flex items-center justify-center hover:bg-primary hover:text-white transition-colors bg-primary text-white"
            aria-label="Increase quantity"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        {/* Buy Now Button */}
        <Button
          size="lg"
          className="px-12 h-11"
          disabled={!isInStock}
        >
          Buy Now
        </Button>

        {/* Wishlist Button */}
        <button
          className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100 transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
