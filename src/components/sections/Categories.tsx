"use server"; // Indicate this is a server component

import Image from "next/image";
import Link from "next/link";
import { fetchCategories } from "@/app/utils/fetchCategories"; // Use the fetchCategories utility function

interface Category {
  _id: string;
  title: string;
  imageUrl: string;
  products: number;
}

export async function Categories() {
  const categories: Category[] = await fetchCategories();

  if (categories.length === 0) {
    return <p>No categories found</p>;
  }

  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-8">Top Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category._id}
              href={`/category/${category._id}`} // Dynamic link to a detailed category page
              className="relative group overflow-hidden rounded-lg"
            >
              <Image
                src={category.imageUrl}
                alt={category.title}
                width={400}
                height={600}
                className="object-cover w-full h-[600px] transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <h3 className="text-white text-xl font-bold">{category.title}</h3>
                <p className="text-white">{category.products}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
