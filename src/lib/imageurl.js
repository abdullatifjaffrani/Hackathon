
import imageUrlBuilder from '@sanity/image-url';
import { client } from '../sanity/lib/client'; // Adjust the path as necessary

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);