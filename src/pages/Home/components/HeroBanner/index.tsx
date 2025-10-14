import { cn } from "@/lib/utils";
import CategoriesSidebar from "./components/CategoriesSidebar";
import HeroCarousel from "./components/HeroCarousel";
import type { HeroBannerProps } from "./types";

export default function HeroBanner({ className }: HeroBannerProps) {
  return (
    <section className={cn("container mx-auto pb-8", className)}>
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
        {/* Categories Sidebar */}
        <CategoriesSidebar />
        {/* Hero Carousel */}
        <HeroCarousel />
      </div>
    </section>
  );
}

export { HeroBanner };
