import { getPost } from "@/lib/data";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { PortableText } from "next-sanity";

export const revalidate = 30;

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await getPost((await params).slug);

  return (
    <div className="mt-10">
      <h1>
        {/* <span className="block text-base text-center text-blue-500 font-semibold tracking-wide uppercase">
          Abdulrhman abuSpiha - blog
        </span> */}
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {post.title}
        </span>
      </h1>

      <Image
        src={urlFor(post.image).url()}
        width={700}
        height={400}
        alt={(await params).slug}
        className="rounded-lg mt-8 border w-full"
        priority
      />

      <div className="mt-10 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-blue-500 prose-a:text-blue-500">
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
    </div>
  );
}
