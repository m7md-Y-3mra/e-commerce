import { ChevronLeft, ChevronRight } from "lucide-react";
import type { FC } from "react";
import type { CarouselNavigationButtonProps } from "./types";

const CarouselNavigationButton: FC<CarouselNavigationButtonProps> = ({
  direction,
  disabled,
  onClick,
}) => {
  const isPrev = direction === "prev";
  const Icon = isPrev ? ChevronLeft : ChevronRight;
  const positionClass = isPrev ? "left-2 sm:left-4" : "right-2 sm:right-4";

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`absolute ${positionClass} top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 transition-colors hover:bg-background`}
      aria-label={isPrev ? "Previous slide" : "Next slide"}
    >
      <Icon className="h-5 w-5 text-foreground" />
    </button>
  );
};

export default CarouselNavigationButton;
