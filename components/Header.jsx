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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg border-b border-white/10 h-[64px]"
          : "bg-primary/80 backdrop-blur-sm border-b border-transparent h-[96px]"
      }`}
    >
      <div className="container mx-auto h-full flex justify-between items-center px-4">
        {/* Logo */}
        <Link href="/" className="group">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white">
            Madhushani
            <span className="text-accent transition-colors duration-200">.</span>
          </h1>
        </Link>

        {/* Desktop Nav + CTA */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="btn-glow text-sm">
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

