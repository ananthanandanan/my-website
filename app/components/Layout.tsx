"use client";

import { usePathname } from "next/navigation";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function Layout({
  children,
  navWide = false,
}: {
  children: React.ReactNode;
  navWide?: boolean;
}) {
  const pathname = usePathname();
  const routeWide = pathname?.startsWith("/blog/") ?? false;
  const wide = navWide || routeWide;

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Nav wide={wide} />
      <main className="w-full flex-1">{children}</main>
      <Footer wide={wide} />
    </div>
  );
}
