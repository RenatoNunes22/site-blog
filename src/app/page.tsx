import { LadingPage } from "@/templates/lading-page";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Site.Set",
    description: "Sell your products as an affiliate in one place",
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Site.Set",
        description: "Sell your products as an affiliate in one place",
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

export default function Home() {
    return <LadingPage />;
}