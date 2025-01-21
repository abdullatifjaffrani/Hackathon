import { client } from "../../sanity/lib/client";
// import { sanityClient } from "@/utils/sanityClient";

export const fetchCategories = async () => {
  const query = `*[_type == "categories"] {
    _id,
    title,
    "imageUrl": image.asset->url,
    products
  }`;

  const categories = await client.fetch(query);
  return categories;
};
