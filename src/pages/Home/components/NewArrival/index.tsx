import HomeSectionHeader from "@/components/HomeSectionHeader";
import SectionTitle from "@/components/SectionTitle";
import ArrivalProductCard from "./components/ArrivalProductCard";
import { FEATURED_ITEMS, SECTION_LABEL, SECTION_TITLE } from "./constants";
import type { NewArrivalProps } from "./types";
import { useNewArrival } from "./useNewArrival";

export default function NewArrival({ className = "" }: NewArrivalProps) {
  const { handleShopNow } = useNewArrival();

  return (
    <section className={`container mx-auto px-4 py-12 ${className}`}>
      {/* Header */}
      <HomeSectionHeader sectionLabel={SECTION_LABEL} />

      <SectionTitle sectionTitle={SECTION_TITLE} className="mb-8" />

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Large Card - PlayStation 5 */}
        <ArrivalProductCard {...FEATURED_ITEMS[0]} variant="large" onShopNow={handleShopNow} />

        {/* Right Side - 3 Cards */}
        <div className="flex flex-col gap-6">
          {/* Women's Collections */}
          <ArrivalProductCard {...FEATURED_ITEMS[1]} variant="medium" onShopNow={handleShopNow} />

          {/* Bottom Row - 2 Cards */}
          <div className="grid grid-cols-2 gap-6">
            {/* Speakers */}
            <ArrivalProductCard {...FEATURED_ITEMS[2]} variant="small" onShopNow={handleShopNow} />

            {/* Perfume */}
            <ArrivalProductCard {...FEATURED_ITEMS[3]} variant="small" onShopNow={handleShopNow} />
          </div>
        </div>
      </div>
    </section>
  );
}
