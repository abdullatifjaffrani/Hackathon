import { client } from "../../sanity/lib/client";

export const fetchCategories = async () => {
  try {
    const query = `*[_type == "categories"] {
      _id,
      title,
      "imageUrl": image.asset->url,
      products
    }`;

    const categories = await client.fetch(query);
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return []; // Return empty array in case of error
  }
};
