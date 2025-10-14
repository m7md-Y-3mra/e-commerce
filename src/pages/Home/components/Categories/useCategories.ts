import { useState } from "react";

export const useCategories = () => {
  const [activeCategory, setActiveCategory] = useState<number>(4);

  const handleCategoryClick = (categoryId: number) => {
    setActiveCategory(categoryId);
  };

  const scrollLeft = () => {
    console.log("Scroll left");
  };

  const scrollRight = () => {
    console.log("Scroll right");
  };

  return {
    activeCategory,
    handleCategoryClick,
    scrollLeft,
    scrollRight,
  };
};
