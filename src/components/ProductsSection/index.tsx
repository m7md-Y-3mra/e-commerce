import { type FC } from "react";
import { cn } from "@/lib/utils";
import HomeSectionHeader from "../HomeSectionHeader";
import NavigationArrows from "../NavigationArrows";
import ProductCard from "../ProductCard";
import SectionButton from "../SectionButton";
import SectionTitle from "../SectionTitle";
import type { ProductsSectionProps } from "./types";

const ProductsSection: FC<ProductsSectionProps> = ({
  sectionLabel,
  sectionTitle,
  products,
  showNavigationArrows = false,
  showViewAllButton = false,
  viewAllText = "View All",
  className,
}) => {
  return (
    <section className={cn("container mx-auto px-4 py-12", className)}>
      {/* Header with Section Label */}
      {sectionLabel && <HomeSectionHeader sectionLabel={sectionLabel} />}

      {/* Title and Navigation/Button */}
      {(sectionTitle || showNavigationArrows || showViewAllButton) && (
        <div className="flex items-center justify-between mb-8">
          {sectionTitle && <SectionTitle sectionTitle={sectionTitle} />}
          {showNavigationArrows && <NavigationArrows />}
          {showViewAllButton && !showNavigationArrows && (
            <SectionButton label={viewAllText} />
          )}
        </div>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View All Button (centered) */}
      {showViewAllButton && showNavigationArrows && (
        <div className="text-center">
          <SectionButton label={viewAllText} />
        </div>
      )}
    </section>
  );
};

export default ProductsSection;
