import type { Metadata } from "next";
import { Libre_Baskerville, DM_Mono } from "next/font/google";
import "./globals.css";
import { Layout } from "@/app/components/Layout";
import { siteMetadata } from "@/lib/siteMetadata";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: siteMetadata.title, template: "%s | A.N.K" },
  description: siteMetadata.description,
  openGraph: { type: "website" },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "MyWebSite",
  },
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${dmMono.variable}`}>
      <body className="min-h-screen antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
