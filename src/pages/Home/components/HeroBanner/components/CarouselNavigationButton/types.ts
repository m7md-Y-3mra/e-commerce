export interface CarouselNavigationButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}
