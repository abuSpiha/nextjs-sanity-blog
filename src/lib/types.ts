import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

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
  body: any;
  publishedAt: string;
}
