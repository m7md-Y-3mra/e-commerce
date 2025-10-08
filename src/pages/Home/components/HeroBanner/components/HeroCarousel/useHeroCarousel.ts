import type { CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { slides } from "./constant";

export const useHeroCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    const timer = setInterval(() => {
      const nextSlide = (api.selectedScrollSnap() + 1) % slides.length
      setCurrent(nextSlide);
      api?.scrollTo(nextSlide)
    }, 5000);

    return () => clearInterval(timer);
  }, [api, current]);

  return {
    current, api, setApi
  }
}
