import HomeSectionHeader from "@/components/HomeSectionHeader";
import NavigationArrows from "@/components/NavigationArrows";
import { CATEGORIES, SECTION_LABEL, SECTION_TITLE } from "./constants";
import type { CategoriesProps } from "./types";
import { useCategories } from "./useCategories";

export default function Categories({ className = "" }: CategoriesProps) {
  const { activeCategory, handleCategoryClick, scrollLeft, scrollRight } = useCategories();

  return (
    <section className={`container mx-auto px-4 py-12 border-b ${className}`}>
      {/* Header */}
      <HomeSectionHeader sectionLabel={SECTION_LABEL} />

      {/* Title and Navigation */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">{SECTION_TITLE}</h2>

        {/* Navigation Arrows */}
        <NavigationArrows />
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`flex flex-col items-center justify-center p-6 border-2 rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-all ${
                isActive ? "bg-primary text-white border-primary" : "border-gray-200"
              }`}
            >
              <img src={category.icon} className="h-12 w-12 mb-4" />
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
