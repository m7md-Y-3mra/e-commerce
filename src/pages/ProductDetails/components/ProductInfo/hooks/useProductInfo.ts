import { useState, useMemo } from "react";
import { AVAILABLE_SIZES, DEFAULT_QUANTITY } from "../../../constants";

export const useProductInfo = (rating: number) => {
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [quantity, setQuantity] = useState<number>(DEFAULT_QUANTITY);

  const perStarValues = useMemo(() => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars: number[] = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(1);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(0.5);
      } else {
        stars.push(0);
      }
    }

    return stars;
  }, [rating]);

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return {
    selectedSize,
    quantity,
    perStarValues,
    availableSizes: AVAILABLE_SIZES,
    handleSizeChange,
    incrementQuantity,
    decrementQuantity,
  };
};
