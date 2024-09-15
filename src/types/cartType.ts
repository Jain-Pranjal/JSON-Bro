interface ProductInCart {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
    totalPrice: number;
  }
  
  export interface Cart {
    id: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
    totalPrice: number;
    paymentMethods: string[];
    shippingMethods: string[];
    products: ProductInCart[];
    createdAt: string;  // You can use Date if needed
    updatedAt: string;  // You can use Date if needed
  }
  