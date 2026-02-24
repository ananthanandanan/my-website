import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function Layout({
  children,
  navWide = false,
}: {
  children: React.ReactNode;
  navWide?: boolean;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Nav wide={navWide} />
      <main className="w-full flex-1">{children}</main>
      <Footer />
    </div>
  );
}
