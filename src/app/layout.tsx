import { Layout } from "@/components/layout/layout"
import "@/styles/globals.css";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
