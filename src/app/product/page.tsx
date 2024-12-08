"use client";

import Image from "next/image";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";

// Correct UI/UX code only, no logic or event handlers
const ProductPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="relative">
          <Image
            src="/assets/ourproducts/Image1.png"
            alt="product-image"
            width={500}
            height={500}
            className="rounded-md object-cover w-full h-auto"
          />
        </div>

        {/* Product Details Section */}
        <div className="space-y-6">
          {/* Product Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Product Name</h1>

          {/* Product Description */}
          <p className="text-base sm:text-lg text-gray-600">
            Enhance your interiors with this beautifully crafted luxury stool chair.
          </p>

          {/* Quantity Selector UI */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <label htmlFor="quantity" className="text-gray-700">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              value={1}
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

      {/* Featured Products Section */}
      <div className="mt-12">
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default ProductPage;
