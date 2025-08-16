"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import NavbarAuth from "./NavbarAuth";

export default function NavbarSwitcher() {
  const pathname = usePathname();
  const publicPaths = ["/", "/sign-in", "/sign-up"];
  const isPublic = publicPaths.includes(pathname);

  return isPublic ? <Navbar /> : <NavbarAuth />;
}
