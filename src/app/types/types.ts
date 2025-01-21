// types.ts
export interface Product {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount?: number; // Optional field
  badge?: string; // Optional field
  image: {
    asset: {
      url: string;
    };
  };
  category: {
    _ref: string; // Reference to the category document
  };
  description: string;
  inventory: number;
  tags: string[];
}

