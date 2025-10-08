import { cn } from "@/lib/utils"
import type { FC } from "react"
import { slides } from "../HeroCarousel/constant"
import type { DotIndicatorProps } from "./types"

const DotsIndicator:FC<DotIndicatorProps> = ({current, api}) => {
  return (
    <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              disabled={index === current}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-3 w-3 rounded-full transition-all",
                index === current
                  ? "bg-primary border-white border-[1px]"
                  : "bg-background/50 hover:bg-background/80"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
  )
}

export default DotsIndicator