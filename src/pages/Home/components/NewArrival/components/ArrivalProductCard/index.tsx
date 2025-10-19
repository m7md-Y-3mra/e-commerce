import { Button } from "@/components/ui/button";
import type { ArrivalProductCardProps } from "./types";
import { useArrivalProductCard } from "./useArrivalProductCard";

const ArrivalProductCard = ({
  id,
  title,
  description,
  image,
  variant = "medium",
  onShopNow,
}: ArrivalProductCardProps) => {
  const {
    getButtonStyles,
    getCardStyles,
    getContentStyles,
    getDescriptionStyles,
    getImageClasses,
    getImageStyles,
    getTitleStyles,
  } = useArrivalProductCard(variant);
  return (
    <div className={getCardStyles()}>
      <div className={getImageStyles()}>
        <img src={image} className={getImageClasses()} />
      </div>
      <div className={getContentStyles()}>
        <h3 className={getTitleStyles()}>{title}</h3>
        <p className={getDescriptionStyles()}>{description}</p>
        <Button variant="link" onClick={() => onShopNow(id)} className={getButtonStyles()}>
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default ArrivalProductCard;
