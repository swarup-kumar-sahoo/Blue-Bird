import "./globals.css";
import Providers from "./providers";
import NavbarSwitcher from "./components/NavbarSwitcher";

export const metadata = {
  title: "Blue Bird — Startup Investments",
  description: "Blue Bird - connect with startups, invest smarter.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Providers>
          <NavbarSwitcher />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
