import Image from "next/image";
import { fetchProductsByCategory } from "../../utils/fetchProductsByCategory";
import { fetchCategories } from "../../utils/fetchCategories";
import Link from "next/link";
import { urlFor } from "@/lib/imageurl";
import type { Metadata } from 'next';
// Product interface definition
interface Product {
  _id: string;
  title: string;
  price: number;
  image: any;
  description: string;
}

// Static Params for dynamic routes
export async function generateStaticParams(): Promise<Params[]> {
  try {
    const categories = await fetchCategories();
    return categories.map((category) => ({
      id: category._id.toString() // Ensure string conversion
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

// Define the expected params type explicitly
type Params = {
  id: string
}


// Page component for Category Detail, using async/await
export default async function CategoryDetailPage({ params }: { params: Params }) {
  const { id } = params;

  try {
    // Fetch products for the given category
    const products: Product[] = await fetchProductsByCategory(id);

    if (!products || products.length === 0) {
      return (
        <div className="container mx-auto p-6 min-h-screen">
          <h1 className="text-3xl font-bold mb-4">Products in Category</h1>
          <p className="text-gray-500">No products found in this category.</p>
        </div>
      );
    }

    return (
      <div className="container mx-auto p-6 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Products in Category</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {products.map((product) => (
            <div className="hover:scale-105" key={product._id}>
              <Link href={`/product/${product._id}`}>
                <div className="relative aspect-square">
                  <Image
                    src={urlFor(product.image).url() || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="rounded-lg object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="mt-2">
                  <p className="text-base font-medium text-gray-900">{product.title}</p>
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
        <p className="text-red-500">Failed to load products. Please try again later.</p>
      </div>
    );
  }
};

// export default CategoryDetailPage;
