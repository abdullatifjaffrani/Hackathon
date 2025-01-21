'use client';

import { use, useEffect, useState } from "react";
import Image from "next/image";
import { client } from '../../../sanity/lib/client';
import { urlFor } from '../../../lib/imageurl';
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";

interface Product {
  title: string;
  price: number;
  description: string;
  image: any;
}

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const ProductDetailPage = ({ params }: Props) => {
  const { id } = use(params); // Unwrap `params` with `use()`
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1); // State for quantity

  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type == "products" && _id == $id][0]`;
      const data = await client.fetch(query, { id });
      setProduct(data);
    };

    fetchProduct();
  }, [id]); // Use the unwrapped `id`

  if (!product) return <p>Loading...</p>;

  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div>
            <Image
              src={urlFor(product.image).url()}
              alt={product.title}
              width={600}
              height={600}
              className="rounded-lg"
            />
          </div>
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
            <p className="text-xl text-gray-900">${product.price}</p>
            <p className="mt-4 text-gray-600">{product.description}</p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
              <label htmlFor="quantity" className="text-gray-700">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))} // Update quantity
                className="border rounded-md p-1 w-20 text-center"
                min="1"
              />
            </div>

            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md text-sm sm:text-base mt-4">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* Featured Products Section */}
      <div className="mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <FeaturedProducts/>
      </div>
    </div>
  );
};

export default ProductDetailPage;
