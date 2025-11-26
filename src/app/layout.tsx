import { Layout } from "@/components/layout/layout"
import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Site.Set',
  description: 'Sell your products as an affiliate in one place',
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
