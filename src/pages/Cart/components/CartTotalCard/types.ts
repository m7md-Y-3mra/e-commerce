export interface CartTotalCardProps {
  subtotal: number;
  shipping: number;
  total: number;
  onCheckout: () => void;
  className?: string;
}
