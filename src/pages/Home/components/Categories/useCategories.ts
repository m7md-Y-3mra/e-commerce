import { useState } from "react";

export const useCategories = () => {
  const [activeCategory, setActiveCategory] = useState<number>(4);

  const handleCategoryClick = (categoryId: number) => {
    setActiveCategory(categoryId);
  };

  return {
    activeCategory,
    handleCategoryClick,
  };
};
