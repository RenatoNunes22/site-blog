import BlogList from "@/pages/blog-page";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Site.Set",
    description: "Tips and strategies to boost your business",
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Blog | Site.Set",
        description: "Tips and strategies to boost your business",
        url: "https://siteset-blog.vercel.app/og-image.jpg",
        siteName: "Site.Set",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "https://siteset-blog.vercel.app/og-image.jpg",
                width: 800,
                height: 600,
                alt: "Site.Set",
            },
        ],
    },
}

export default function BlogListPage() {
  const sortedPosts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return <BlogList posts={sortedPosts} />;
}