"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-1">
      {navLinks.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`
            relative px-3 py-2 capitalize font-medium text-sm tracking-wide
            transition-colors duration-150 rounded-md
            after:content-[''] after:absolute after:bottom-0 after:left-3 after:right-3
            after:h-[2px] after:bg-accent after:rounded-full
            after:transition-all after:duration-150
            ${
              link.path === pathname
                ? "text-accent after:opacity-100 after:scale-x-100 bg-accent/5"
                : "text-white/70 hover:text-white after:opacity-0 after:scale-x-0 hover:after:opacity-100 hover:after:scale-x-100 hover:bg-white/5"
            }
          `}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;

