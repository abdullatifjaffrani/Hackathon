import Image from "next/image";
import Link from "next/link";
import { fetchCategories } from "../../app/utils/fetchCategories";

interface Category {
  _id: string;
  title: string;
  imageUrl: string;
  products: number;
}

const CategoriesPage = async () => {
  const categories: Category[] = await fetchCategories();

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category._id}
            href={`/category/${category._id}`} // Dynamic link to a detailed category page
            className="block border rounded-lg shadow hover:shadow-lg p-4 transition-transform hover:scale-105"
          >
            <div>
              <Image
                src={category.imageUrl}
                alt={category.title}
                width={300}
                height={600}
                className="w-full h-100 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold mt-2">{category.title}</h2>
              <p className="text-gray-600">
                {category.products} Products
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
