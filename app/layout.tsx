import type { Metadata } from "next";
import { Libre_Baskerville, DM_Mono } from "next/font/google";
import "./globals.css";
import { Layout } from "@/app/components/Layout";

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
  title: { default: "A.N.K — K N Anantha Nandanan", template: "%s | A.N.K" },
  description:
    "Software engineer focused on scalable backend systems, DevOps, and applied AI. Writing about things I learn and systems I build.",
  openGraph: { type: "website" },
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
