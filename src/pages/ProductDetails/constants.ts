export const AVAILABLE_SIZES = ["XS", "S", "M", "L", "XL"] as const;

export const DEFAULT_QUANTITY = 2;

export const DELIVERY_INFO = {
  freeDelivery: {
    title: "Free Delivery",
    description: "Enter your postal code for Delivery Availability",
  },
  returnDelivery: {
    title: "Return Delivery",
    description: "Free 30 Days Delivery Returns.",
    link: "Details",
  },
} as const;

export const RELATED_ITEMS_SECTION_TITLE = "Related Item";
