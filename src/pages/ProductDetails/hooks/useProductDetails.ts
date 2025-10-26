import { useMemo } from "react";
import { useParams } from "react-router";
import { useFetch } from "@/lib/hooks/useFetch";
import { API_ENDPOINTS, getProductsUrl } from "@/config/api";
import type { ProductDetailsResponse } from "../types";
import type { BreadcrumbItem } from "../components/Breadcrumb/types";

export const useProductDetails = () => {
  const { id } = useParams<{ id: string }>();

  // Fetch product details
  const productUrl = id ? API_ENDPOINTS.PRODUCT_BY_ID(id) : null;
  const {
    data: product,
    loading: productLoading,
    error: productError,
  } = useFetch<ProductDetailsResponse>(productUrl);

  // Fetch related products based on category
  const category = product?.categories?.[0];
  const relatedProductsUrl = category
    ? getProductsUrl({ category })
    : null;
  const {
    data: relatedProductsResponse,
    loading: relatedLoading,
    error: relatedError,
  } = useFetch<{ items: ProductDetailsResponse[] }>(relatedProductsUrl);

  // Filter out current product from related products
  const relatedProducts = useMemo(() => {
    if (!relatedProductsResponse?.items || !product) return [];
    return relatedProductsResponse.items
      .filter((p) => p.id !== product.id)
      .slice(0, 4); // Limit to 4 related products
  }, [relatedProductsResponse, product]);

  // Generate breadcrumb items
  const breadcrumbItems: BreadcrumbItem[] = useMemo(() => {
    const items: BreadcrumbItem[] = [
      { label: "Account", path: "/" },
    ];

    if (product?.categories && product.categories.length > 0) {
      items.push({
        label: product.categories[0].charAt(0).toUpperCase() + product.categories[0].slice(1),
        path: `/category/${product.categories[0]}`,
      });
    }

    if (product?.name) {
      items.push({ label: product.name });
    }

    return items;
  }, [product]);

  return {
    product,
    productLoading,
    productError,
    relatedProducts,
    relatedLoading,
    relatedError,
    breadcrumbItems,
  };
};
