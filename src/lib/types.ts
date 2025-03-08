import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableTextBlock } from "next-sanity";

export interface postCard {
  image: SanityImageSource;
  title: string;
  description: string;
  currentSlug: string;
  publishedAt: string;
}

export interface fullPost {
  image: SanityImageSource;
  title: string;
  body: PortableTextBlock[];
  publishedAt: string;
}
