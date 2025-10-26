import { Eye, Heart } from "lucide-react";
import { type FC } from "react";
import { useNavigate } from "react-router";
import StarIcon from "../StarIcon";
import { Button } from "../ui/button";
import type { ProductCardProps } from "./types";
import { useProductCard } from "./useProductCard";

const ProductCard: FC<ProductCardProps> = ({
  product,
  isPriceNextToStar = false,
  enableNavigation = true,
}) => {
  const navigate = useNavigate();
  const {
    discount,
    isNew,
    colors,
    activeColor,
    handleActiveColorChange,
    imageSrc,
    perStarValues,
    hasOriginalPrice,
  } = useProductCard(product);

  const handleCardClick = () => {
    if (enableNavigation) {
      navigate(`/product/${product.id}`);
    }
  };

  return (
    <div className="group relative">
      <div className="relative bg-gray-100 rounded-lg p-8 mb-4 flex items-center justify-center h-64 overflow-hidden cursor-pointer">
        {/* Discount Badge */}
        {discount && (
          <span className="absolute top-3 left-3 bg-primary text-white text-xs px-3 py-1 rounded">
            -{discount}%
          </span>
        )}

        {/* New Badge */}
        {isNew && (
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded">
            NEW
          </span>
        )}

        {/* Icons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors">
            <Heart className="h-4 w-4" />
          </button>
          <button className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors">
            <Eye className="h-4 w-4" />
          </button>
        </div>

        {/* Add to Cart Button */}
        <div className="absolute z-10 inset-x-0 bottom-0 translate-y-full transition-transform group-hover:translate-y-0">
          <Button className="w-full rounded-none rounded-b-lg bg-black hover:bg-black hover:opacity-80">
            Add To Cart
          </Button>
        </div>

        {/* Product Image */}
        <span className="text-6xl" onClick={handleCardClick}>
          <img
            src={imageSrc}
            alt={product.name}
            className="h-full w-full object-contain transition-transform group-hover:scale-105"
          />
        </span>
      </div>

      {/* Product Info */}
      <h3
        className="font-semibold mb-2 cursor-pointer hover:text-primary transition-colors"
        onClick={handleCardClick}
      >
        {product.name}
      </h3>

      <div
        className={`flex gap-2 ${isPriceNextToStar ? "flex-row items-center" : "flex-col"} mb-2`}
      >
        <div className="flex items-center gap-3">
          <span className="text-primary font-semibold">${product.price}</span>
          {hasOriginalPrice && (
            <span className="text-gray-400 line-through">${product.originalPrice}</span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400 text-2xl">
            {perStarValues.map((v, i) => (
              <StarIcon key={i} value={v} />
            ))}
          </div>
          <span className="text-gray-500 text-sm">({product.reviews})</span>
        </div>
      </div>

      {/* Color Options */}
      {colors.length > 0 && (
        <div className="flex gap-2">
          {colors.map((color) => (
            <div
              key={color}
              className={`w-5 h-5 rounded-full border-2 outline-2 ${
                activeColor === color ? "outline-black" : "outline-white"
              } cursor-pointer transition-colors`}
              style={{ backgroundColor: color }}
              onClick={() => handleActiveColorChange(color)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
