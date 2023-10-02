interface IProducts {
  card: {
    name: string;
    description: string;
    imageUrl: string;
    price: string;
    shippingMethod: string;
    id: string;
  }[];
  item: {
    name: string;
    description?: string;
    imageUrl: string;
    price: string;
    shippingMethod: string;
    id: string;
  };
  getProducts: () => IProducts["card"];
}
