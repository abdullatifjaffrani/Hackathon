'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { client } from '../../sanity/lib/client'; // Adjust the path as necessary
import { urlFor } from '../../lib/imageurl'; // Adjust the path as necessary
import { Product } from '../../app/types/types'; // Adjust the path as necessary
import Link from 'next/link'; // Import Link from Next.js

export function OurProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = '*[_type == "products"]{_id, title, price, image}';
      const data: Product[] = await client.fetch(query);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-8">Our Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.length ? (
            products.map((product) => (
              <div className="hover:scale-105" key={product._id}>
                <Link href={`/product/${product._id}`}>
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="rounded-lg"
                  />
                  <div className="mt-2">
                    <p className="text-base font-medium text-gray-900">
                      {product.title}
                    </p>
                    <p className="text-sm text-gray-500">${product.price}</p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </div>
    </section>
  );
}
