import { client } from "../../sanity/lib/client";

interface Product {
  _id: string;
  title: string;
  price: number;
  image: { asset: { url: string } };
  description: string;
}

export async function fetchProductsByCategory(categoryId: string): Promise<Product[]> {
  try {
    const query = `*[_type == "products" && references($categoryId)] {
      _id,
      title,
      price,
      image {
        asset -> {
          url
        }
      },
      description
    }`;

    const products: Product[] = await client.fetch(query, { categoryId });
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return empty array in case of error
  }
}
