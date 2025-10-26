import { Skeleton } from "../ui/skeleton";

const ProductCardSkeleton = () => {
  return (
    <div className="group relative">
      {/* Image Skeleton */}
      <Skeleton className="w-full h-64 rounded-lg mb-4" />

      {/* Product Name Skeleton */}
      <Skeleton className="h-5 w-[60%] mb-2" />

      {/* Price and Rating Section */}
      <div className="flex flex-col gap-2 mb-2">
        {/* Price */}
        <Skeleton className="h-5 w-[40%]" />

        {/* Rating */}
        <div className="flex items-center gap-2">
          {/* Star Icons */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="w-4 h-4 rounded-full" />
            ))}
          </div>
          {/* Review Count */}
          <Skeleton className="h-4 w-12" />
        </div>
      </div>

      {/* Color Options Skeleton */}
      <div className="flex gap-2">
        <Skeleton className="w-5 h-5 rounded-full" />
        <Skeleton className="w-5 h-5 rounded-full" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
