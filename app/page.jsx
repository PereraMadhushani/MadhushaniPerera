import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import Photo from "@/components/Photo";
import TypewriterText from "@/components/TypewriterText";
import HeroSection from "@/components/HeroSection";
import CustomCursor from "@/components/CustomCursor";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { personalInfo } from "@/lib/data";

import Services from "@/app/services/page";
import Work from "@/app/work/page";
import Resume from "@/app/resume/page";
import Contact from "@/app/contact/page";

// Reusable section heading used across the single-page layout
const SectionHeading = ({ title, subtitle }) => (
  <div className="text-center mb-12" data-aos="fade-up">
    <h2 className="text-3xl font-bold text-accent uppercase tracking-wide">
      {title}
    </h2>
    <p className="text-white/70 mt-2">{subtitle}</p>
  </div>
);

const Home = () => {
  return (
    <main className="h-full">
      <CustomCursor />
      <div className="container mx-auto h-full">
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <HeroSection />

        {/* ── Stats ─────────────────────────────────────────────────────── */}
        <Stats />

        {/* ── Services ──────────────────────────────────────────────────── */}
        <section id="services">
          <div data-aos="zoom-in">
            <Services />
          </div>
        </section>

        {/* ── Work ──────────────────────────────────────────────────────── */}
        <section id="work" className="pt-12 pb-24 xl:pt-0 xl:pb-0">
          <SectionHeading title="Work" subtitle="My Recent Projects" />
          <div data-aos="zoom-in">
            <Work />
          </div>
        </section>

        {/* ── Resume ────────────────────────────────────────────────────── */}
        <section id="resume" className="pt-12 pb-24 xl:pt-0 xl:pb-0">
          <SectionHeading title="Resume" subtitle="My Experience & Education" />
          <div data-aos="zoom-in">
            <Resume />
          </div>
        </section>

        {/* ── Contact ───────────────────────────────────────────────────── */}
        <section id="contact" className="pt-12 pb-24 xl:pt-0 xl:pb-0">
          <SectionHeading title="Contact" subtitle="Get In Touch" />
          <div data-aos="zoom-in">
            <Contact />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;