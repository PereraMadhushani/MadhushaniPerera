"use client";

import Link from "next/link";
import { navLinks, personalInfo, socials, contactInfo } from "@/lib/data";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-[#27272c] border-t border-white/10 mt-16">
      {/* ── Main grid ─────────────────────────────────────────────────── */}
      <div className="container mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">

        {/* Column 1 — Brand / bio */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="text-xl font-bold tracking-tight text-white w-fit">
            Madhushani
            <span className="text-accent">.</span>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed max-w-[240px]">
            Full Stack Developer crafting elegant digital experiences with
            React, Next.js, and a passion for clean UI.
          </p>
          {/* Social icons */}
          <div className="flex gap-3 mt-1">
            {socials.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 text-sm hover:bg-accent hover:text-primary hover:border-accent transition-all duration-150"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 2 — Quick links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-white">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="text-sm text-white/60 hover:text-accent transition-colors duration-150 capitalize"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Services / page links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-white">
            Services
          </h3>
          <ul className="flex flex-col gap-2">
            {["Web Development", "UI/UX Design", "Mobile Development", "Software Applications"].map((s) => (
              <li key={s}>
                <Link
                  href="/services"
                  className="text-sm text-white/60 hover:text-accent transition-colors duration-150"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Contact details */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-white">
            Contact
          </h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="text-accent mt-0.5 flex-shrink-0 text-xs" />
              <span className="text-sm text-white/60">{personalInfo.phone}</span>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="text-accent mt-0.5 flex-shrink-0 text-xs" />
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm text-white/60 hover:text-accent transition-colors duration-150 break-all"
              >
                {personalInfo.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-accent mt-1 flex-shrink-0 text-xs" />
              <span className="text-sm text-white/60 leading-relaxed">
                {personalInfo.address}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40">
            © {currentYear} Kaushalya Madhushani Perera. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Built with{" "}
            <span className="text-accent font-medium">Next.js</span> &{" "}
            <span className="text-accent font-medium">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
