interface IData {
  data: {
    name: string;
    description: string;
    imageUrl: string;
    price: string;
    shippingMethod: string;
    id: string;
  }[];
  loading: boolean;
  error: boolean;
  cart: {
    name: string;
    description: string;
    imageUrl: string;
    price: string;
    shippingMethod: string;
    id: string;
  }[];
  likedProducts: {
    name: string;
    description: string;
    imageUrl: string;
    price: string;
    shippingMethod: string;
    id: string;
  }[];
}
