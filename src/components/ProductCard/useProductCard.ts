import { useCallback, useMemo, useState } from "react";
import type { ProductCardProps } from "../ProductCard/types";

/** Clamp to [0,1] */
const clamp01 = (n: number) => Math.max(0, Math.min(1, n));

type Product = ProductCardProps["product"];

export function useProductCard(product: Product) {
  // Color options (when the image is a map of color -> src)
  const colors = useMemo<string[]>(
    () => (typeof product.image === "object" ? Object.keys(product.image) : []),
    [product.image]
  );

  // Active color
  const [activeColor, setActiveColor] = useState<string>(colors[0] ?? "");

  const handleActiveColorChange = useCallback((color: string) => {
    setActiveColor(color);
  }, []);

  // Resolve image src for current color (or string image / fallback)
  const imageSrc = useMemo<string>(() => {
    if (typeof product.image === "string") return product.image;
    if (typeof product.image === "object") {
      return product.image[activeColor] || "/placeholder.svg";
    }
    return "/placeholder.svg";
  }, [product.image, activeColor]);

  // Star fractions for each of 5 stars (supports halves/partials)
  const perStarValues = useMemo<number[]>(
    () => Array.from({ length: 5 }, (_, i) => clamp01((product?.rating ?? 0) - i)),
    [product?.rating]
  );

  // Pricing helpers
  const hasOriginalPrice = useMemo(
    () => (product?.originalPrice ?? 0) > 0,
    [product?.originalPrice]
  );

  return {
    // product passthroughs commonly used in the card
    product,
    discount: product.discount,
    isNew: product.isNew,

    // colors
    colors,
    activeColor,
    handleActiveColorChange,

    // media
    imageSrc,

    // rating
    perStarValues,

    // pricing
    hasOriginalPrice,
  };
}

export type UseProductCardReturn = ReturnType<typeof useProductCard>;
