import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPosts } from "@/lib/data";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 30;

export default async function IndexPage() {
  const posts = await getPosts();
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
      {posts.map((post, idx) => {
        return (
          <Card key={idx}>
            <CardHeader>
              <Image
                src={urlFor(post.image).url()}
                alt={post.currentSlug}
                height={400}
                width={500}
                className="h-[200px] object-cover rounded-t-lg"
              />
              <CardTitle className="mt-2 line-clamp-2 font-bold">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-4 text-gray-600 dark:text-gray-300 text-sm">
                {post.description}
              </p>
              <Button asChild className="w-full mt-5">
                <Link href={`/${post.currentSlug}`}>read more</Link>
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
