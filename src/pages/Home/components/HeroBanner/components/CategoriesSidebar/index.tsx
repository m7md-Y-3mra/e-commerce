import { ChevronRight } from "lucide-react";
import { categories } from "./constant";

const CategoriesSidebar = () => {
  return (
    <aside className="lg:w-64 shrink-0 border-r pt-5 sm:pt-8 md:pt-10 pr-2 sm:pr-3 md:pr-4">
      <nav className="flex flex-col gap-2 sm:gap-3 md:gap-4">
        {categories.map((category) => (
          <a
            key={category.name}
            href="#"
            className="flex items-center justify-between hover:text-primary transition-colors"
          >
            <span>{category.name}</span>
            {category.hasSubmenu && <ChevronRight className="h-4 w-4" />}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default CategoriesSidebar;
