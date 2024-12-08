"use client";
import { useState } from 'react';
import Image from 'next/image';
import { FeaturedProducts } from '@/components/sections/FeaturedProducts';

// Define the type for product
interface Product {
  image: string;
  name: string;
  description: string;
}

// Props interface with params
interface ProductProps {
  params: {
    id: string; // Dynamically passed ID
  };
}

const ProductPage = ({ params }: ProductProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="relative">
          <Image
            src="/assets/ourproducts/Image1.png" // Replace with dynamic image if available
            alt={params.id}
            width={500}
            height={500}
            className="rounded-md object-cover w-full h-auto"
          />
        </div>

        {/* Product Details Section */}
        <div className="space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            {params.id}
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Enhance your interiors with this beautifully crafted luxury stool chair.
          </p>

          {/* Quantity Selector */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <label htmlFor="quantity" className="text-gray-700">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              className="border rounded-md p-2 w-20 text-center"
              min="1"
            />
          </div>

          {/* Add to Cart Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md text-sm sm:text-base">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Featured Products */}
      <div className="mt-12">
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default ProductPage;
