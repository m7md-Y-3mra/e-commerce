import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

// Types
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  color?: string;
  stock?: number;
}

export interface CartState {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  couponCode: string | null;
  couponDiscount: number;
}

export interface CartContextType {
  cart: CartState;
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  applyCoupon: (code: string) => Promise<boolean>;
  removeCoupon: () => void;
  clearCart: () => void;
  getItemCount: () => number;
}

// Create Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Local Storage Key
const CART_STORAGE_KEY = "exclusive_cart";

// Helper: Calculate cart totals
const calculateTotals = (
  items: CartItem[],
  couponDiscount: number = 0,
): { subtotal: number; shipping: number; total: number } => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; // Free shipping as per design
  const total = subtotal - couponDiscount;

  return { subtotal, shipping, total };
};

// Provider Component
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize state from localStorage
  const [cart, setCart] = useState<CartState>(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        const parsedCart = JSON.parse(stored);
        const { subtotal, shipping, total } = calculateTotals(
          parsedCart.items,
          parsedCart.couponDiscount,
        );
        return {
          ...parsedCart,
          subtotal,
          shipping,
          total,
        };
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
    }

    return {
      items: [],
      subtotal: 0,
      shipping: 0,
      total: 0,
      couponCode: null,
      couponDiscount: 0,
    };
  });

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [cart]);

  // Add item to cart
  const addItem = useCallback((item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.items.find((i) => i.id === item.id);

      let newItems: CartItem[];
      if (existingItem) {
        // Update quantity if item already exists
        newItems = prevCart.items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i,
        );
      } else {
        // Add new item
        newItems = [...prevCart.items, item];
      }

      const { subtotal, shipping, total } = calculateTotals(newItems, prevCart.couponDiscount);

      return {
        ...prevCart,
        items: newItems,
        subtotal,
        shipping,
        total,
      };
    });
  }, []);

  // Remove item from cart
  const removeItem = useCallback((itemId: string) => {
    setCart((prevCart) => {
      const newItems = prevCart.items.filter((item) => item.id !== itemId);
      const { subtotal, shipping, total } = calculateTotals(newItems, prevCart.couponDiscount);

      return {
        ...prevCart,
        items: newItems,
        subtotal,
        shipping,
        total,
      };
    });
  }, []);

  // Update item quantity
  const updateQuantity = useCallback((itemId: string, quantity: number) => {
    if (quantity < 1) return;

    setCart((prevCart) => {
      const newItems = prevCart.items.map((item) => {
        if (item.id === itemId) {
          // Check stock limit if available
          const maxQuantity = item.stock ? Math.min(quantity, item.stock) : quantity;
          return { ...item, quantity: maxQuantity };
        }
        return item;
      });

      const { subtotal, shipping, total } = calculateTotals(newItems, prevCart.couponDiscount);

      return {
        ...prevCart,
        items: newItems,
        subtotal,
        shipping,
        total,
      };
    });
  }, []);

  // Apply coupon (mock implementation - can be connected to API)
  const applyCoupon = useCallback(async (code: string): Promise<boolean> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Mock coupon validation
    const validCoupons: Record<string, number> = {
      SAVE10: 10,
      SAVE20: 20,
      WELCOME: 15,
      SUMMER50: 50,
    };

    const discount = validCoupons[code.toUpperCase()];

    if (discount) {
      setCart((prevCart) => {
        const { subtotal, shipping, total } = calculateTotals(prevCart.items, discount);

        return {
          ...prevCart,
          couponCode: code.toUpperCase(),
          couponDiscount: discount,
          subtotal,
          shipping,
          total,
        };
      });
      return true;
    }

    return false;
  }, []);

  // Remove coupon
  const removeCoupon = useCallback(() => {
    setCart((prevCart) => {
      const { subtotal, shipping, total } = calculateTotals(prevCart.items, 0);

      return {
        ...prevCart,
        couponCode: null,
        couponDiscount: 0,
        subtotal,
        shipping,
        total,
      };
    });
  }, []);

  // Clear entire cart
  const clearCart = useCallback(() => {
    setCart({
      items: [],
      subtotal: 0,
      shipping: 0,
      total: 0,
      couponCode: null,
      couponDiscount: 0,
    });
  }, []);

  // Get total item count
  const getItemCount = useCallback(() => {
    return cart.items.reduce((count, item) => count + item.quantity, 0);
  }, [cart.items]);

  const value: CartContextType = {
    cart,
    addItem,
    removeItem,
    updateQuantity,
    applyCoupon,
    removeCoupon,
    clearCart,
    getItemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Custom hook to use cart context
export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
