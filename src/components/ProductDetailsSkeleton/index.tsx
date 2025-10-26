import { Skeleton } from "../ui/skeleton";

const ProductDetailsSkeleton = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Breadcrumb Skeleton */}
      <div className="py-6 lg:py-8">
        <div className="flex items-center gap-3">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-1" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-1" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>

      {/* Product Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pb-12 lg:pb-16">
        {/* Left Column - Image Gallery */}
        <div className="flex gap-4 lg:gap-8">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4 order-2 lg:order-1">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="w-20 h-20 lg:w-32 lg:h-32 rounded-lg" />
            ))}
          </div>

          {/* Main Image */}
          <Skeleton className="flex-1 rounded-lg order-1 lg:order-2 min-h-[400px] lg:min-h-[600px]" />
        </div>

        {/* Right Column - Product Info */}
        <div className="flex flex-col gap-6">
          {/* Product Name */}
          <Skeleton className="h-8 w-[80%]" />

          {/* Rating and Stock */}
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="w-5 h-5 rounded-full" />
              ))}
            </div>
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-1" />
            <Skeleton className="h-4 w-16" />
          </div>

          {/* Price */}
          <Skeleton className="h-7 w-24" />

          {/* Description */}
          <div className="space-y-2 border-b pb-6">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[80%]" />
          </div>

          {/* Colors */}
          <div className="flex items-center gap-6">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="w-6 h-6 rounded-full" />
          </div>

          {/* Size */}
          <div className="flex items-center gap-6">
            <Skeleton className="h-5 w-12" />
            <div className="flex gap-4">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="w-10 h-10 rounded-md" />
              ))}
            </div>
          </div>

          {/* Quantity and Buttons */}
          <div className="flex items-center gap-4">
            <Skeleton className="w-40 h-11 rounded-md" />
            <Skeleton className="flex-1 h-11 rounded-md" />
            <Skeleton className="w-10 h-10 rounded-md" />
          </div>

          {/* Delivery Info */}
          <div className="flex flex-col border border-gray-300 rounded-md">
            <div className="flex items-center gap-4 p-6 border-b border-gray-300">
              <Skeleton className="w-10 h-10" />
              <div className="flex flex-col gap-2 flex-1">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-3 w-full" />
              </div>
            </div>
            <div className="flex items-center gap-4 p-6">
              <Skeleton className="w-10 h-10" />
              <div className="flex flex-col gap-2 flex-1">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-3 w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Items Skeleton */}
      <div className="py-12 lg:py-16">
        <Skeleton className="h-6 w-32 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i}>
              <Skeleton className="w-full h-64 rounded-lg mb-4" />
              <Skeleton className="h-5 w-[60%] mb-2" />
              <Skeleton className="h-5 w-[40%]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
