import HomeSectionHeaderProps from "@/components/HomeSectionHeader";
import NavigationArrows from "@/components/NavigationArrows";
import ProductCard from "@/components/ProductCard";
import SectionButton from "@/components/SectionButton";
import SectionTitle from "@/components/SectionTitle";
import Timer from "./components/Timer";
import { FLASH_SALES_PRODUCTS, SECTION_LABEL, SECTION_TITLE, VIEW_ALL_TEXT } from "./constants";
import type { FlashSalesProps } from "./types";

export default function FlashSales({ className = "" }: FlashSalesProps) {

  return (
    <section className={`container mx-auto px-4 py-12 ${className}`}>
      {/* Header */}
      <HomeSectionHeaderProps sectionLabel={SECTION_LABEL} />

      {/* Title and Timer */}
      <div className="flex items-end justify-between mb-8">
        <div className="flex flex-col lg:flex-row gap-5 lg:items-end lg:gap-20">
          <SectionTitle sectionTitle={SECTION_TITLE} />

          {/* Countdown Timer */}
          <Timer />
        </div>

        {/* Navigation Arrows */}
        <NavigationArrows />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {FLASH_SALES_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <SectionButton label={VIEW_ALL_TEXT} />
      </div>
    </section>
  );
}
