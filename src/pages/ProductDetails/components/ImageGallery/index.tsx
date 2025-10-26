import { type FC } from "react";
import { cn } from "@/lib/utils";
import type { ImageGalleryProps } from "./types";
import { useImageGallery } from "./hooks/useImageGallery";

const ImageGallery: FC<ImageGalleryProps> = ({
  coverImage,
  images,
  productName,
  className,
}) => {
  const { allImages, selectedImage, handleImageClick } = useImageGallery(
    coverImage,
    images,
  );

  return (
    <div className={cn("flex gap-4 lg:gap-8", className)}>
      {/* Thumbnail Images - Vertical List */}
      <div className="flex flex-col gap-4 order-2 lg:order-1">
        {allImages.map((image, index) => (
          <button
            key={index}
            onClick={() => handleImageClick(image)}
            className={cn(
              "w-20 h-20 lg:w-32 lg:h-32 bg-gray-100 rounded-lg overflow-hidden transition-all hover:ring-2 hover:ring-primary",
              selectedImage === image && "ring-2 ring-primary",
            )}
          >
            <img
              src={image}
              alt={`${productName} - View ${index + 1}`}
              className="w-full h-full object-contain p-2"
            />
          </button>
        ))}
      </div>

      {/* Main Image Display */}
      <div className="flex-1 bg-gray-100 rounded-lg overflow-hidden order-1 lg:order-2 min-h-[400px] lg:min-h-[600px] flex items-center justify-center">
        <img
          src={selectedImage}
          alt={productName}
          className="w-full h-full object-contain p-8 lg:p-12"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
