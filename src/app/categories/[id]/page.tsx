import Image from "next/image";
import { fetchProductsByCategory } from "../../../app/utils/fetchProductsByCategory";
import Link from "next/link";
import { urlFor } from "@/lib/imageurl";

interface Product {
  _id: string;
  title: string;
  price: number;
  image: string;
  description: string;
}

const CategoryDetailPage = async ({ params }: { params: { id: string } }) => {
  try {
    const products: Product[] = await fetchProductsByCategory(params.id);

    return (
      <div className="container mx-auto p-6 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Products in Category</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {products.map((product) => (
            <div className="hover:scale-105" key={product._id}>
              <Link href={`/product/${product._id}`}>
                <Image
                  src={urlFor(product.image).url()} // Ensure this generates a valid URL
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
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return (
      <div className="container mx-auto p-6 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Products in Category</h1>
        <p className="text-red-500">Failed to load products.</p>
      </div>
    );
  }
};

export default CategoryDetailPage;
