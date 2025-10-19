export type ArrivalProductCardVariant = "large" | "medium" | "small";

export interface ArrivalProductCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  variant?: ArrivalProductCardVariant;
  onShopNow: (id: number) => void;
}
