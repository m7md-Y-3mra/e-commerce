import type { ArrivalProductCardVariant } from "./types";

export const useArrivalProductCard = (variant: ArrivalProductCardVariant) => {
  const getCardStyles = () => {
    const baseStyles =
      "relative bg-black text-white rounded-lg overflow-hidden flex items-end font-inter";

    switch (variant) {
      case "large":
        return `${baseStyles} h-[600px]`;
      case "medium":
      case "small":
      default:
        return `${baseStyles} h-[288px]`;
    }
  };

  const getImageStyles = () => {
    const baseStyles = "absolute flex items-center";

    switch (variant) {
      case "large":
        return `${baseStyles}`;
      case "medium":
        return `${baseStyles} justify-center`;
      case "small":
      default:
        return `${baseStyles} justify-center`;
    }
  };

  const getImageClasses = () => {
    switch (variant) {
      case "large":
        return "";
      case "medium":
        return "object-contain";
      case "small":
      default:
        return "text-6xl opacity-50";
    }
  };

  const getContentStyles = () => {
    switch (variant) {
      case "large":
        return "relative p-8 z-10";
      case "medium":
      case "small":
      default:
        return "relative p-6 z-10";
    }
  };

  const getTitleStyles = () => {
    switch (variant) {
      case "large":
      case "medium":
        return "text-2xl font-bold mb-4";
      case "small":
      default:
        return "text-xl font-bold mb-2";
    }
  };

  const getDescriptionStyles = () => {
    switch (variant) {
      case "large":
        return "mb-4 max-w-xs";
      case "medium":
        return "mb-3 text-sm";
      case "small":
      default:
        return "mb-3 text-xs";
    }
  };

  const getButtonStyles = () => {
    const baseStyles = "text-white underline p-0 hover:text-gray-300";

    switch (variant) {
      case "large":
        return baseStyles;
      case "medium":
        return baseStyles;
      case "small":
      default:
        return `${baseStyles} text-sm`;
    }
  };

  return {
    getButtonStyles,
    getCardStyles,
    getContentStyles,
    getDescriptionStyles,
    getImageClasses,
    getImageStyles,
    getTitleStyles,
  };
};
