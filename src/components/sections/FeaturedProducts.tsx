'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { client } from '../../sanity/lib/client'; // Adjust path as necessary
import { urlFor } from '../../lib/imageurl'; // Adjust path as necessary
import { Product } from '../../app/types/types'; // Adjust path as necessary

export function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      // Fetch only the top 4 products
      const query = '*[_type == "products"]{_id, title, price, image}[0...4]';
      const data: Product[] = await client.fetch(query);
      setFeaturedProducts(data);
    };

    fetchFeaturedProducts();
  }, []);

  if (!featuredProducts.length) {
    return <p>Loading Featured Products...</p>;
  }

  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link key={product._id} href={`/product/${product._id}`}>
              <div className="block hover:scale-105 cursor-pointer">
                <img
                  src={urlFor(product.image).url()}
                  alt={product.title}
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-2">
                  <p className="text-base font-medium text-gray-900">
                    {product.title}
                  </p>
                  <p className="text-sm text-gray-500">${product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
