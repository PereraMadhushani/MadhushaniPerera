"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { navLinks } from "@/lib/data";
import { motion } from "framer-motion";
import { useState } from "react";

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center group">
        <CiMenuFries className="text-[32px] text-accent group-hover:drop-shadow-[0_0_6px_#00ff99] transition-all duration-200" />
      </SheetTrigger>

      <SheetContent className="bg-primary/95 backdrop-blur-xl border-l border-white/10 flex flex-col p-0">
        {/* Logo */}
        <div className="pt-16 pb-8 px-8 text-center border-b border-white/10">
          <Link href="/" onClick={() => setOpen(false)}>
            <h1 className="text-3xl font-semibold">
              Madhushani
              <span className="text-accent drop-shadow-[0_0_8px_#00ff99]">.</span>
            </h1>
          </Link>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: open ? index * 0.07 + 0.05 : 0,
                duration: 0.25,
                ease: "easeOut",
              }}
            >
              <Link
                href={link.path}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-lg capitalize font-medium transition-all duration-200 ${
                  link.path === pathname
                    ? "text-accent bg-accent/10 border border-accent/20"
                    : "text-white/65 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.path === pathname && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                )}
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Hire Me CTA */}
        <div className="px-8 pb-10">
          <Link href="/contact" onClick={() => setOpen(false)} className="block">
            <button className="w-full py-3 rounded-full bg-accent text-primary font-semibold text-sm uppercase tracking-[2px] btn-glow transition-all duration-300 hover:bg-accent-hover">
              Hire Me
            </button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

