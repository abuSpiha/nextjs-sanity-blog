import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: "6v7dh939",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const builder = ImageUrlBuilder(client);

export function urlFor(sourse: SanityImageSource) {
  return builder.image(sourse);
}
