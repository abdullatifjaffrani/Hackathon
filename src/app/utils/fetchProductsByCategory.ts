import { client } from "../../sanity/lib/client";


export async function fetchProductsByCategory(categoryId: string) {
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

  const products = await client.fetch(query, { categoryId });
  return products;

}
