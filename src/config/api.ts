/**
 * API Configuration
 * Centralized API base URL and endpoint definitions
 */

// Base URL for API requests
// In development, this uses the Vite proxy configured in vite.config.ts
// In production, you can override this with environment variables
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

/**
 * API Endpoints
 */
export const API_ENDPOINTS = {
  // Products
  PRODUCTS: `${API_BASE_URL}/products`,
  PRODUCT_BY_ID: (id: string) => `${API_BASE_URL}/products/${id}`,

  // Categories
  CATEGORIES: `${API_BASE_URL}/categories`,
  CATEGORY_BY_ID: (id: string) => `${API_BASE_URL}/categories/${id}`,

  // Reviews
  REVIEWS_BY_PRODUCT: (productId: string) => `${API_BASE_URL}/reviews/${productId}`,

  // Cart
  CART: `${API_BASE_URL}/cart`,
  CART_ITEMS: `${API_BASE_URL}/cart/items`,
  CART_APPLY_COUPON: `${API_BASE_URL}/cart/apply-coupon`,

  // Orders
  ORDERS: `${API_BASE_URL}/orders`,
  ORDER_CHECKOUT: `${API_BASE_URL}/orders/checkout`,
  ORDER_HISTORY: (orderId: string) => `${API_BASE_URL}/orders/history/${orderId}`,

  // Auth
  AUTH_LOGIN: `${API_BASE_URL}/auth/login`,
  AUTH_REGISTER: `${API_BASE_URL}/auth/register`,
  AUTH_LOGOUT: `${API_BASE_URL}/auth/logout`,
  AUTH_ME: `${API_BASE_URL}/auth/me`,
} as const;

/**
 * Helper function to build query string
 */
export const buildQueryString = (params: Record<string, string | number | boolean>): string => {
  const queryParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      queryParams.append(key, String(value));
    }
  });

  const queryString = queryParams.toString();
  return queryString ? `?${queryString}` : '';
};

/**
 * Helper function to get products with filters
 */
export const getProductsUrl = (params?: {
  category?: string;
  page?: number;
  limit?: number;
  search?: string;
}): string => {
  if (!params) return API_ENDPOINTS.PRODUCTS;
  return `${API_ENDPOINTS.PRODUCTS}${buildQueryString(params)}`;
};
