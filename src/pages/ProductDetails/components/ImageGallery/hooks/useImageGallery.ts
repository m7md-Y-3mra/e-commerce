import { useState, useMemo, useEffect } from "react";

export const useImageGallery = (coverImage: string, images: string[]) => {
  // Filter out duplicates using Set
  const allImages = useMemo(() => {
    const uniqueImages = new Set([coverImage, ...images]);
    return Array.from(uniqueImages);
  }, [coverImage, images]);

  // Initialize with first image from allImages array
  const [selectedImage, setSelectedImage] = useState(allImages[0]);

  // Update selected image when allImages changes (e.g., new product loaded)
  useEffect(() => {
    setSelectedImage(allImages[0]);
  }, [allImages]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return {
    allImages,
    selectedImage,
    handleImageClick,
  };
};
