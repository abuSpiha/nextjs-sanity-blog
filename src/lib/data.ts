import { client } from "./sanity";
import { fullPost, postCard } from "./types";

const options = { next: { revalidate: 30 } };

export async function getPosts() {
  const query = `*[_type == "post"] | order(_createdAt desc) {
  image,
  title,
  description,
  "currentSlug": slug.current,
  "publishedAt": _createdAt
  }`;

  return await client.fetch<postCard[]>(query, {}, options);
}

export async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug] {
    image,
    title,
    body,
    "publishedAt": _createdAt
    }[0]`;

  return await client.fetch<fullPost>(query, { slug }, options);
}
