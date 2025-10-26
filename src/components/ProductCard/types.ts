export interface Product {
  id: number | string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  rating: number;
  reviews: number;
  image: Record<string, string> | string;
  isNew?: boolean;
}

// const obj = {
//   id: 1,
//   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   price: 109.95,
//   description:
//     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   category: "men's clothing",
//   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
//   rating: { rate: 3.9, count: 120 },
// };

export interface ProductCardProps {
  product: Product;
  isPriceNextToStar?: boolean;
  enableNavigation?: boolean;
}
