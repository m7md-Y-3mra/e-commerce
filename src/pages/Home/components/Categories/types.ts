export interface Category {
  id: number;
  name: string;
  icon: string;
  active?: boolean;
}

export interface CategoriesProps {
  className?: string;
}
