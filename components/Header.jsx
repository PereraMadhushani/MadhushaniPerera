"use client";

import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/90 backdrop-blur-xl shadow-lg shadow-black/40 border-b border-white/5 py-3 xl:py-4"
          : "bg-primary/60 backdrop-blur-md border-b border-transparent py-4 xl:py-6"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link href="/" className="group">
          <h1 className="text-2xl md:text-4xl font-semibold tracking-tight">
            Madhushani
            <span className="text-accent group-hover:drop-shadow-[0_0_10px_#00ff99] transition-all duration-300">.</span>
          </h1>
        </Link>

        {/* Desktop Nav + CTA */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="btn-glow">
              Hire me
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;

