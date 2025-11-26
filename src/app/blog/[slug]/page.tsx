import notFound from "@/app/not-found";
import { PostPage } from "@/templates/blog/post-page";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";

type BlogPostPageProps = {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = allPosts.find((post) => post.slug === slug);

    if(!post) {
      return {
        title: "Post not found",
        description: "Post not found",
      };
    } 

    return {
        title: post.title,
        description: post.description,
        authors:[{ name: post.author.name}],
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            title: post.title,
            description: post.description,
            images: [
                {
                    url: post.image,
                    width: 800,
                    height: 600,
                    alt: post.title,
                },
            ],
        },
    } 
}

export const revalidate = 60;
export async function generateStaticParams() {
    return allPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = allPosts.find((post) => post.slug === slug);

    if(!post) {
      return notFound();
    } 

    return <PostPage post={post} />
}