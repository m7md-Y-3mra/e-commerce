import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import CarouselNavigationButton from "../CarouselNavigationButton";
import DotsIndicator from "../DotsIndicator";
import AppleLogo from "./assets/images/apple-logo.svg";
import ChevronRightSVG from "./assets/images/chevron-right.svg";
import { slides } from "./constant";
import { useHeroCarousel } from "./useHeroCarousel";

const HeroCarousel = () => {
  const { current, setApi, api } = useHeroCarousel();

  return (
    <div className="pt-5 sm:pt-8 md:pt-10 text-white rounded-sm overflow-hidden flex-1">
      <div className="relative bg-black h-full">
        <Carousel setApi={setApi}>
          <CarouselContent className="pl-4 sm:pl-8 md:pl-16 lg:pl-[64px]">
            {slides.map((slide) => (
              <CarouselItem key={slide.id} className="pl-0 flex h-full items-center justify-between px-8 md:px-12 lg:px-16">
                <div className="max-w-md space-y-4 md:space-y-6 text-background">
                  <div className="flex items-center gap-4">
                    <img src={AppleLogo} alt="apple-logo" />
                    <span className="text-base font-normal">{slide.subtitle}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-inter font-semibold leading-tight lg:text-5xl text-balance">
                    {slide.title}
                  </h2>
                  <a
                    href={slide.ctaLink}
                    className="inline-flex items-center gap-2 text-base font-medium underline underline-offset-8 hover:no-underline"
                  >
                    {slide.cta}
                    <img src={ChevronRightSVG} alt="chevron-right" />
                  </a>
                </div>
                <div className="hidden lg:block relative w-64 md:w-80 lg:w-96 h-60 md:h-70 lg:h-80">
                  <img
                    src={slide.image}
                    alt={slide.subtitle}
                    className="h-60 md:h-70 lg:h-80 w-auto object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <CarouselNavigationButton
          direction="prev"
          disabled={!api?.canScrollPrev()}
          onClick={() => api?.scrollPrev()}
        />
        <CarouselNavigationButton
          direction="next"
          disabled={!api?.canScrollNext()}
          onClick={() => api?.scrollNext()}
        />

        <DotsIndicator current={current} api={api} />
      </div>
    </div>
  );
};

export default HeroCarousel;
