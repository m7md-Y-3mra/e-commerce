export interface ProductDetailsResponse {
  id: string;
  productCode: string;
  name: string;
  description: string;
  nameArabic: string;
  descriptionArabic: string;
  coverPictureUrl: string;
  productPictures: string[];
  categories: string[];
  price: number;
  stock: number;
  weight: number;
  color: string;
  discountPercentage: number;
  rating: number;
  reviewsCount: number;
  sellerId: string;
}

export interface ProductDetailsProps {
  className?: string;
}
