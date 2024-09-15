interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface Review {
  reviewerName: string;
  reviewerEmail: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  stock: number;
  rating: number;
  weight: number;  // Weight in kilograms
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availability: string;
  returnPolicy: string;
  tags: string[];
  reviews: Review[];
  images: string[];
}
