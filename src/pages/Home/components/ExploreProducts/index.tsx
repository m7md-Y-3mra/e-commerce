import HomeSectionHeader from "@/components/HomeSectionHeader";
import NavigationArrows from "@/components/NavigationArrows";
import ProductCard from "@/components/ProductCard";
import SectionButton from "@/components/SectionButton";
import SectionTitle from "@/components/SectionTitle";
import { EXPLORE_PRODUCTS, SECTION_LABEL, SECTION_TITLE, VIEW_ALL_TEXT } from "./constants";
import type { ExploreProductsProps } from "./types";

export default function ExploreProducts({ className = "" }: ExploreProductsProps) {
  return (
    <section className={`container mx-auto px-4 py-12 ${className}`}>
      {/* Header */}
      <HomeSectionHeader sectionLabel={SECTION_LABEL} />

      {/* Title and Navigation */}
      <div className="flex items-center justify-between mb-8">
        <SectionTitle sectionTitle={SECTION_TITLE} />

        {/* Navigation Arrows */}
        <NavigationArrows />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {EXPLORE_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} isPriceNextToStar={true} enableNavigation={false} />
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <SectionButton label={VIEW_ALL_TEXT} />
      </div>
    </section>
  );
}
