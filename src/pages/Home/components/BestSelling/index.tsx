import HomeSectionHeader from "@/components/HomeSectionHeader";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import { BEST_SELLING_PRODUCTS, SECTION_LABEL, SECTION_TITLE, VIEW_ALL_TEXT } from "./constants";
import type { BestSellingProps } from "./types";

export default function BestSelling({ className = "" }: BestSellingProps) {
  return (
    <section className={`container mx-auto px-4 py-12 ${className}`}>
      {/* Header */}
      <HomeSectionHeader sectionLabel={SECTION_LABEL} />

      {/* Title and Button */}
      <div className="flex items-center justify-between mb-8">
        <SectionTitle sectionTitle={SECTION_TITLE} />
        <Button label={VIEW_ALL_TEXT} />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {BEST_SELLING_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} enableNavigation={false} />
        ))}
      </div>
    </section>
  );
}
