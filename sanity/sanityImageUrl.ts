import { client } from "./client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Export a function that can be used to get image URLs
const builder = imageUrlBuilder(client);

// Export a function that can be used to get image URLs
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
