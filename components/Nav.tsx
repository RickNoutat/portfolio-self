"use client";

import Link from "next/link.js";
import { usePathname } from "next/navigation.js";

const Links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/skills",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex gap-8">
      {Links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`${
            link.path === pathname && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
