import HomeSectionHeader from "@/components/HomeSectionHeader";
import ProductCard from "@/components/ProductCard";
import { cn } from "@/lib/utils";
import { type FC } from "react";
import ErrorMessage from "@/components/ErrorMessage";
import ProductDetailsSkeleton from "@/components/ProductDetailsSkeleton";
import { withCenteredLayout } from "@/hoc";
import Breadcrumb from "./components/Breadcrumb";
import DeliveryInfo from "./components/DeliveryInfo";
import ImageGallery from "./components/ImageGallery";
import ProductInfo from "./components/ProductInfo";
import { RELATED_ITEMS_SECTION_TITLE } from "./constants";
import { useProductDetails } from "./hooks/useProductDetails";
import type { ProductDetailsProps } from "./types";

// Create centered error component
const CenteredError = withCenteredLayout(ErrorMessage);

const ProductDetails: FC<ProductDetailsProps> = ({ className }) => {
  const { product, productLoading, productError, relatedProducts, breadcrumbItems } =
    useProductDetails();

  if (productLoading) {
    return <ProductDetailsSkeleton />;
  }

  if (productError || !product) {
    return (
      <CenteredError
        title="Product Not Found"
        message={productError?.message || "We couldn't find the product you're looking for. It may have been removed or doesn't exist."}
      />
    );
  }

  return (
    <div className={cn("flex flex-col min-h-screen", className)}>
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6 lg:py-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Product Details Section */}
        <section className="container mx-auto px-4 pb-12 lg:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image Gallery */}
            <ImageGallery
              coverImage={product.coverPictureUrl}
              images={product.productPictures || []}
              productName={product.name}
            />

            {/* Product Info & Delivery */}
            <div className="flex flex-col gap-6">
              <ProductInfo
                name={product.name}
                price={product.price}
                rating={product.rating}
                reviewsCount={product.reviewsCount}
                description={product.description}
                color={product.color}
                stock={product.stock}
              />
              <DeliveryInfo />
            </div>
          </div>
        </section>

        {/* Related Items Section */}
        {relatedProducts.length > 0 && (
          <section className="container mx-auto px-4 py-12 lg:py-16">
            <HomeSectionHeader sectionLabel={RELATED_ITEMS_SECTION_TITLE} />

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={{
                    id: relatedProduct.id,
                    name: relatedProduct.name,
                    price: relatedProduct.price,
                    rating: relatedProduct.rating,
                    reviews: relatedProduct.reviewsCount,
                    image: relatedProduct.coverPictureUrl,
                    discount:
                      relatedProduct.discountPercentage > 0
                        ? relatedProduct.discountPercentage.toString()
                        : undefined,
                  }}
                  enableNavigation={true}
                />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default ProductDetails;
